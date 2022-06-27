import { Client, Modal, ModalSubmitInteraction } from "discord.js";

export interface ModalSubmit {
  data: Modal,
  run: (client: Client, interaction: ModalSubmitInteraction) => Promise<void>
}
