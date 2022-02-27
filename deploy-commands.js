const {SlashCommandBuilder} = require('@discordjs/builders');
const {REST} = require('@discordjs/rest');
const {Routes} = require('discord-api-types/v9');
require('dotenv').config();
const token = process.env.DISCORD_TOKEN;
const clientId = process.env.clientId;
const guildId = process.env.guildId;

const commands = [
    new SlashCommandBuilder().setName('test').setDescription('Test command'),
    new SlashCommandBuilder().setName('server').setDescription('Server info'),
    new SlashCommandBuilder().setName('user').setDescription('User info'),
    new SlashCommandBuilder().setName('pingme').setDescription('Pings you'),
]

    .map(command => command.toJSON());

const rest = new REST({version:'9'}).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), {body: commands})
    .then(() => console.log('Register commands success'))
    .catch(console.error);