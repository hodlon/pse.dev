const { Client, Routes  } = require("discord.js")
const { config } = require("dotenv")
const { REST } = require("@discordjs/rest")

config()

const TOKEN = process.env.DISCORD_TOKEN
const MESSAGES_LIMIT = 3
const GUILD_ID = process.env.DISCORD_GUILD_ID

const client = new Client({
  intents: ["Guilds", "GuildMessages", "MessageContent"],
})

const rest = new REST({ version: "10" }).setToken(TOKEN)



export const getChannelMessages = async () => {
  console.log("Retrieve announcements from discord channel...")
  const MESSAGES_URL = `${Routes.channelMessages(GUILD_ID)}?limit=${MESSAGES_LIMIT}`
  // If operating on a guild channel, this endpoint requires the current user to have the VIEW_CHANNEL permission
  const messages = await rest.get(MESSAGES_URL)
  return messages
}

const runDiscordBot = () => {
  client.login(TOKEN)
  client.on("ready", async () => {
    await getChannelMessages()
  })
}

runDiscordBot()
