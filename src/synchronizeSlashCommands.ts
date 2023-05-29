import Discord from "discord.js"

import commands from "./commands"

export default async (client: Discord.Client) => {
  const GUILD_ID = process.env.GUILD_ID
  const FORCE_COMMAND_UPDATE = process.env.FORCE_COMMAND_UPDATE

  const currCommands = await client.application?.commands.fetch({ guildId: GUILD_ID})

  if (GUILD_ID) {
    console.log(`Synchronizing Guild ${GUILD_ID} slash commands...`)
  } else {
    console.log("Synchronizing Global slash commands...")
  }
  console.log(`${currCommands?.size} current command(s)`)

  const newCommands = commands.filter(command => !currCommands?.some((c) => c.name === command.data.name))
  for (const newCommand of newCommands) {
    // @ts-ignore
    await client.application?.commands.create(newCommand.data.toJSON(), GUILD_ID)
  }
  console.log(`Created ${newCommands.length} command(s)`)

  const deletedCommands = currCommands?.filter((command) => !commands.some((c) => c.data.name === command.name)).toJSON()
  if (deletedCommands) {
    for (const deletedCommand of deletedCommands) {
      await deletedCommand.delete()
    }
    console.log(`Deleted ${deletedCommands.length} command(s)`)
  }

  const updatedCommands = commands.filter((command) => currCommands?.some((c) => c.name === command.data.name))
  let updatedCommandCount = 0
  for (const updatedCommand of updatedCommands) {
    const newCommand = updatedCommand
    const previousCommand = currCommands?.find((c) => c.name === updatedCommand.data.name)
    let modified = false
    if (FORCE_COMMAND_UPDATE) {
      console.log("Forcing command updates...")
      modified = true
    } else {
      if (previousCommand?.description !== newCommand.data.description) modified = true
      if (!Discord.ApplicationCommand.optionsEqual(previousCommand?.options || [], newCommand.data.toJSON().options || [])) modified = true
    }
    if (modified) {
      // @ts-ignore
      await previousCommand?.edit(newCommand.data.toJSON())
      updatedCommandCount++
    }
  }
  console.log(`Updated ${updatedCommandCount} command(s)`)

  console.log("Finshed slash command synchronization")
}
