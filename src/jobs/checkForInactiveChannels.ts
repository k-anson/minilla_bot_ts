import { Client } from "discord.js"
import cron from "node-cron"

export default (client: Client) => {
  cron.schedule("* * 3 * *", () => {
    // Check channels for inactivity
  })
}
