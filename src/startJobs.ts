import { Client } from "discord.js"

import jobs from "./jobs"

export default (client: Client) => {
  for (const job of jobs) {
    job(client)
  }
}
