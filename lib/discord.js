const dio = require('discord.io')
const bot = new dio.Client({
    token: process.env.DISCORD_TOKEN,
    autorun: true
})
class Discord {
    constructor() {
        this.client = bot
    }

    get guild() {
        const serverId = Object.keys(this.client.servers)[0]
        return this.client.servers[serverId]
    }

    get channels() {
        return this.client.channels
    }

    get users() {
        return this.client.users
    }

    getUserByName(name) {
        const users = this.users
        const userKeys = Object.keys(users)
        const userLength = userKeys.length

        let result = null;
        for (let i=0;i<userLength;i++) {
            if (name === users[userKeys[i]].username) {
                result = users[userKeys[i]]
                break
            }
        }
        return result
    }

    getChannelByName(type, name) {
        const chans = this.channels
        const chanKeys = Object.keys(chans)
        const chanLengh = chanKeys.length

        let result = null
        for (let i=0;i<chanLength;i++) {
            if (name === chans[chanKeys[i]].name &&
                type === chans[chanKeys[i]].type) {
                result = chans[chanKeys[i]]
                break
            }
        }
        return result
    }
}

module.exports = new Discord()