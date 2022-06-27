import "dotenv/config" // pull .env into process.env
import { Client, Intents } from "discord.js"

import interactionCreate from "./listeners/interactionCreate"
import syncronizeSlashCommands from "./syncronizeSlashCommands"

console.log("Starting Discord bot...")

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

client.once("ready", async () => {
  if (!client.user || !client.application) return

  await syncronizeSlashCommands(client)

  console.log(`${client.user.username} is online`)
})

process.on("SIGINT", () => {
  console.log("Shutting down gracefully...")
  if (client) client.destroy()
})

// Attach listeners
interactionCreate(client)

const TOKEN = process.env.TOKEN
client.login(TOKEN)
