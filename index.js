require('dotenv').config()

const package = require('./package.json')
const discord = require('./lib/discord')
const logger = require('./lib/logger')

discord.client.on('ready', event => {
    logger.info(
        `%s is connected to %s and ready!`,
        package.name,
        discord.guild.name
    )
})