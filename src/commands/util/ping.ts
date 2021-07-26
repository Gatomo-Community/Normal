import {Command}  from '../../types'

export const command: Command = {
    name: 'ping',
    aliases: ['pong'],
    run: async (client, msg, args) => {
        msg.channel.send('pong')
    }
}