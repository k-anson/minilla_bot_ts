import { SlashCommandBuilder, SlashCommandSubcommandBuilder, SlashCommandSubcommandsOnlyBuilder } from "@discordjs/builders"
import { BaseCommandInteraction, Client } from "discord.js"

export interface Command {
  data: SlashCommandBuilder | SlashCommandSubcommandBuilder | SlashCommandSubcommandsOnlyBuilder,
  run: (client: Client, interaction: BaseCommandInteraction) => Promise<void>
}
