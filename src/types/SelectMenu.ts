import { Client, MessageSelectMenu, SelectMenuInteraction } from "discord.js"

export interface SelectMenu {
  data: MessageSelectMenu,
  run: (client: Client, interaction: SelectMenuInteraction) => Promise<void>
}
