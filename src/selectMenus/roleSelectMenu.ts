import { Client, MessageActionRow, MessageSelectMenu, SelectMenuInteraction } from "discord.js"

export default {
  data: new MessageSelectMenu()
    .setCustomId("roleSelectMenu")
    .setPlaceholder("Test Placeholder")
    .addOptions([
      {
        label: "Pick me m'lord",
        description: "Over here! Pick meeeeeeeee!",
        value: "first_option"
      }
    ]),
  run: async (client: Client, interaction: SelectMenuInteraction) => {
    const content = "You did it"

    await interaction.reply({
      ephemeral: true,
      content
    })
  }
}
