import { SlashCommandBuilder } from "@discordjs/builders"
import { BaseCommandInteraction, Client, MessageActionRow, Modal, ModalActionRowComponent, TextInputComponent } from "discord.js"
import roleSelectMenu from "../selectMenus/roleSelectMenu"

export default {
  data: new SlashCommandBuilder()
    .setName("roleselectmenu")
    .setDescription("Managing select menus for managing personal roles")
    .addSubcommand(subcommand =>
      subcommand
        .setName("create")
        .setDescription("Create a role management modal in this channel")
    ),
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    // Send a select menu
    const row = new MessageActionRow()
      .addComponents(roleSelectMenu.data)
    interaction.channel?.send({ content: "test", components: [row]})
    interaction.reply({
      ephemeral: true,
      content: "Successfully created role select menu"
    })
  }
}
