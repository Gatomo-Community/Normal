/* Command Types */

// Libs
import Client from '../client';
import { Message } from 'discord.js';


// Types
// Este tipo solo es una función. Está incrustado enel tipo Command
type Run = (client: Client, msg: Message, args: string[]) => {}

// Solo éste tipo se exportará
export type Command = {
	name: string,
	description?: string,
	aliases?: string[],
	enabled?: boolean | true,
	usage?: string,
	cooldown?: number,
	guildOnly?: boolean | true
	perms?: 
		'everyone'|
		'mod'|
		'admin'|
		'owner'|
		'dev'
	,
	run: Run
}
