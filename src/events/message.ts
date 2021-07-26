import { Event, Command } from '../types';
import { Message } from 'discord.js';

export const ready: Event = {
    name: 'message',
    run: (client: any, msg: Message): any => {
        // Prevenir bots, webhooks o cualquier mensaje que no tenga el prefix
        if ( msg.author.bot || msg.webhookID || !msg.content.startsWith(client.config.prefix)) return;

        const args = msg.content.slice(client.config.prefix.length).trim().split(/ +/);
        const cmd = args.shift()?.toLowerCase();

        if (!cmd) return;
        const command = client.commands.get(cmd) || client.aliases.get(cmd)
        if (command) (command as Command).run(client, msg, args)
    }
}