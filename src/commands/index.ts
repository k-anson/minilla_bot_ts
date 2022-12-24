import { Command } from "../types/Command"

import ping from "./ping"
import roleSelectMenu from "./roleSelectMenu"

const commands: Command[] = [
  ping,
  roleSelectMenu
]

export default commands
