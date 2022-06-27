import { SlashCommandBuilder } from "@discordjs/builders"
import { BaseCommandInteraction, Client } from "discord.js"

export default {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Minilla replies  with 'Pong!'"),
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    const content = "Pong!"

    await interaction.reply({
      ephemeral: true,
      content
    })
  }
}
