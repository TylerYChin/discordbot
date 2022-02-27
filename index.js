const {Client, Intents} = require('discord.js');
require('dotenv').config();
const token = process.env.DISCORD_TOKEN;
const client = new Client({ intents: [Intents.FLAGS.GUILDS]});

client.once('ready', () => {
    console.log('Ready.');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const {commandName} = interaction;

    if (commandName === 'test') {
        await interaction.reply('test :)');
    } else if (commandName === 'server') {
        await interaction.reply(`Serber: ${interaction.guild.name} \nMembers ${interaction.guild.memberCount}`);
    } else if (commandName === 'user') {
        await interaction.reply(`Tag: ${interaction.user.tag}\nId: ${interaction.user.id}`);
    } else if (commandName === 'pingme') {
        await interaction.reply(`<@!${interaction.user.id}>`);
    }
});

client.login(token);