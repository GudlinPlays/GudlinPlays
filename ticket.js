const { SlashCommandBuilder } =require('@discordjs/builders');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ChannelType, ButtonInteraction, PermissionsBitField } =require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ticket')
    .setDescription('Create a ticket message!'),
    async execute (interaction, client) {

        const { member, guildId, customId, message, user } = interaction;

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return await interaction.reply({ content: "You don't have the right permissions!"})

        const button = new ActionRowBuilder().addComponents(
            new ButtonBuilder().setCustomId("general").setEmoji("💬").setLabel("General").setStyle(ButtonStyle.Success),
            new ButtonBuilder().setCustomId("report").setEmoji("✍").setLabel("Report").setStyle(ButtonStyle.Success),
            new ButtonBuilder().setCustomId("store").setEmoji("🛒").setLabel("Store").setStyle(ButtonStyle.Success),
            new ButtonBuilder().setCustomId("bugreport").setEmoji("🐞").setLabel("Bug").setStyle(ButtonStyle.Success),
            new ButtonBuilder().setCustomId("appeal").setEmoji("👨‍⚖️").setLabel("Appeal").setStyle(ButtonStyle.Success)
        )

        const embed = new EmbedBuilder()
        .setColor("Fuchsia")
        .setTitle("Tickets & Support")
        .setDescription("💬 **General**\n • General Questions & Issues\n\n✍ **Report**\n • Report Hackers & Rule Breakers\n\n🛒 **Store**\n • Store Purchase Issues\n\n🐞 **Bug Report**\n • Report issues with our server to our team\n\n👨‍⚖️ **Appeal**\n • Appeal Punishments")
        .setThumbnail('https://media.discordapp.net/attachments/801716782510768158/1040684208533819433/abc.png')

        await interaction.reply({ embeds: [embed], components: [button] })

        const collector = await interaction.channel.createMessageComponentCollector();

        collector.on('collect', async i => {

            await i.update({ embeds: [embed], components: [button] });
            
            if (i.customId === 'general') {
                const general = await interaction.guild.channels.create({
                name: `general`,
                type: ChannelType.GuildText,
                parent: '1045798816760205434'
            });
            general.permissionOverwrites.create(i.user.id, { ViewChannel: true, SendMessages: true} );
            general.permissionOverwrites.create(general.guild.roles.everyone, { ViewChannel: false, SendMessages: false} );
            const General = interaction.guild.channels.cache.find("general");
            General.send({ content: `**Ticket Creator:** ${i.user}\n*Please wait patiently, do not ping our team!*\n\n**FORMAT TO FOLLOW**\nUsername:\nPlatform:\nIssue:\nProof:`});
            }  if (i.customId === 'report') {
                const report = await interaction.guild.channels.create({
                name: `report`,
                type: ChannelType.GuildText,
                parent: '1045798816760205434'
            });
            report.permissionOverwrites.create(i.user.id, { ViewChannel: true, SendMessages: true} );
            report.permissionOverwrites.create(report.guild.roles.everyone, { ViewChannel: false, SendMessages: false} );
            const Report = interaction.guild.channels.cache.find("report")
            Report.send({ content: `**Ticket Creator:** ${i.user}\n*Please wait patiently, do not ping our team!*\n\n**FORMAT TO FOLLOW**\nUsername:\nPlatform:\nIssue:\nProof:`});
            }  if (i.customId === 'store') {
                const store = await interaction.guild.channels.create({
                name: `store`,
                type: ChannelType.GuildText,
                parent: '1045798816760205434'
            });
            store.permissionOverwrites.create(i.user.id, { ViewChannel: true, SendMessages: true} );
            store.permissionOverwrites.create(store.guild.roles.everyone, { ViewChannel: false, SendMessages: false} );
            const Store = interaction.guild.channels.cache.find("store");
            Store.send({ content: `**Ticket Creator:** ${i.user}\n*Please wait patiently, do not ping our team!*\n\n**FORMAT TO FOLLOW**\nUsername:\nPlatform:\nIssue:\nProof:`});
            }  if (i.customId === 'bugreport') {
                const bugreport = await interaction.guild.channels.create({
                name: `bugreport`,
                type: ChannelType.GuildText,
                parent: '1045798816760205434'
            });
            bugreport.permissionOverwrites.create(i.user.id, { ViewChannel: true, SendMessages: true} );
            bugreport.permissionOverwrites.create(bugreport.guild.roles.everyone, { ViewChannel: false, SendMessages: false} );
            const Bugreport = interaction.guild.channels.cache.find("bugreport");
            Bugreport.send({ content: `**Ticket Creator:** ${i.user}\n*Please wait patiently, do not ping our team!*\n\n**FORMAT TO FOLLOW**\nUsername:\nPlatform:\nIssue:\nProof:`});
            }  if (i.customId === 'appeal') {
                const appeal = await interaction.guild.channels.create({
                name: `appeal`,
                type: ChannelType.GuildText,
                parent: '1045798816760205434'
            });
            appeal.permissionOverwrites.create(i.user.id, { ViewChannel: true, SendMessages: true} );
            appeal.permissionOverwrites.create(appeal.guild.roles.everyone, { ViewChannel: false, SendMessages: false} );
            const Appeal = interaction.guild.channels.cache.find("appeal");
            Appeal.send({ content: `**Ticket Creator:** ${i.user}\n*Please wait patiently, do not ping our team!*\n\n**FORMAT TO FOLLOW**\nUsername:\nPlatform:\nIssue:\nProof:`});
            }
        })
    }
}
