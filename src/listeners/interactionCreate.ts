import { BaseCommandInteraction, Client, Interaction, ModalSubmitInteraction, SelectMenuInteraction } from "discord.js"
import selectMenus from "../selectMenus"
import commands from "../commands"

export default (client: Client): void => {
  client.on("interactionCreate", async (interaction: Interaction) => {
    // if (interaction.isModalSubmit()) {
    //   await handleModalSubmit(client, interaction)
    // }
    if (interaction.isSelectMenu()) {
      await handleSelectMenu(client, interaction)
    }
    if (interaction.isCommand() || interaction.isContextMenu()) {
      await handleSlashCommand(client, interaction)
    }
  })
}

const handleModalSubmit = async (client: Client, interaction: ModalSubmitInteraction): Promise<void> => {
  // const modalSubmit = modalSubmits.find(modalSubmit => modalSubmit.customId === interaction.customId)
  // if (!modalSubmit) {
    // interaction.reply({ content: "An error has occured" })
    // return
  // }

  // modalSubmit.run(client, interaction)
}

const handleSelectMenu = async (client: Client, interaction: SelectMenuInteraction): Promise<void> => {
  const selectMenu = selectMenus.find(selectMenu => selectMenu.data.customId === interaction.customId)
  if (!selectMenu) {
    interaction.reply({ content: "An error has occured"})
    return
  }

  selectMenu.run(client, interaction)
}

const handleSlashCommand = async (client: Client, interaction: BaseCommandInteraction): Promise<void> => {
  const slashCommand = commands.find(command => command.data.toJSON().name === interaction.commandName)
  if (!slashCommand) {
    interaction.reply({ content: "An error has occured" })
    return
  }

  slashCommand.run(client, interaction)
}
