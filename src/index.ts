import { Client, Intents } from 'discord.js';

const client:any = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    client.api.applications(client.user.id).commands.post({
        data: {
            name: "hello",
            description: "hello world command"
            // possible options here e.g. options: [{...}]
        }
    });


    client.ws.on('INTERACTION_CREATE', async (interaction: any) => {
        const command = interaction.data.name.toLowerCase();
        const args = interaction.data.options;

        if (command === 'hello'){ 
            // here you could do anything. in this sample
            // i reply with an api interaction
            client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: "hello world!!!"
                    }
                }
            })
        }
    });
});


// login to Discord with your app's token
client.login('NzY1OTkxNDAzNDM5NzgzOTg3.X4c3Fg.bAfSqDjShleoCqn6I0TgPDXnEns');
