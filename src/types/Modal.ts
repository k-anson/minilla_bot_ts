import { Client, Modal, ModalSubmitInteraction } from "discord.js";

export interface ModalSubmit {
  modal: Modal,
  run: (client: Client, interaction: ModalSubmitInteraction) => Promise<void>
}
