const Discord = require("discord.js");

const PREFIX = "!"

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Bot Online!")
    bot.user.setPresence({game:{name:"VexNoid | Prefix ! | https://discord.gg/MKfZXf6", type:"PLAYING"}});
    });

bot.on("message", function(message)  {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

switch (args[0].toLowerCase()) {
    case "updates":
    var embed = new Discord.RichEmbed()
        .addField("Major Updates", "**We have no current major updates.**")
    message.channel.sendEmbed(embed);
        break;
    case "bots":
        var embed = new Discord.RichEmbed()
            .addField("Status", "✅ = Online    ❌ = Offline\n📶 = Not hosted    💻 = Developing")//✅  ❌  📶  💻
            .addField("Bots", "**Fade** = 📶\n**VexNoid** = 💻")
        message.channel.sendEmbed(embed);
        break;
        case "suggest":
        if (args.length >= 2) {
            var sendtochannel = bot.guilds.get("420798650357383169").channels.get("427148860373204992");
            sendtochannel.send("**Suggestion:** " + args.slice(1).join(" ") + ("\nFrom:") + message.author.tag);
            message.channel.send("**Your suggestion was sent!**")
        } else {
            message.channel.send("Please use this format ```~Suggest (Suggestion)``` **Any inappropriate suggestions will get you blacklisted!**")
        }
        break;
        case "complain":
        if (args.length >= 2) {
            var sendtochannel = bot.guilds.get("420798650357383169").channels.get("427141283740516358");
            sendtochannel.send("**Complaint:** " + args.slice(1).join(" ") + ("\n**From:**") + message.author.tag);
            message.channel.send("**Your complaint was sent!**")
        } else {
            message.channel.send("Please use this format ```!Complaint (Compaint)``` **Please only make legit complaints**")
        }
        break;
     case "help":
        var embed = new Discord.RichEmbed();
        embed.setColor(0xFFD700);
        embed.setTitle("Commmands")
        embed.addField("New Commands", "Complaint - Give complaints for our services.")
        embed.addField("Commands", "Bots - List the bots and there status.\nVersions - Gives you the version of the bot\nComplaint - Give complaints for our services.\nHelp - List all the commands")
        embed.setFooter("Made by VexNoid | Fallen#9211");
    
            message.author.send(embed)
        message.author.send()
            message.channel.send("**Check your DMs.**")
            break;
        case "invite":
            message.channel.send("https://discord.gg/qTTdfj")
            break;
        case "version":
            Message.channel.send("**0.1 (Alpha)**")
            break;
        case "products":
        var embed = new Discord.RichEmbed()
        .setColor(0xFFD700)
        .setTitle("Products")
        .addField("Custom Bot (Hosting Not Inculded)","Free - Simple commands with watermark. You may not have more than 10 commands!\n\n1.99 - Avrage commands. You may only have 15 commands!\n\n2.99 - Above Avrage commands. You may not have more that 25 commands!")

            message.author.send(embed)
        message.author.send()
            message.channel.send("**Check you DMs.**")
            break;
        case "addfade":
        message.member.addRole(message.guild.roles.find("name", "FadeBotRole"));
        message.channel.sendMessage("You have been added to the Fade Bot Community. To be removed type **-RemoveFade**.")
        break;     
        case "removefade":
        message.member.removeRole(message.guild.roles.find("name", "FadeBotRole"));
        message.channel.sendMessage("You have been removed to the Fade Bot Community. To be added type **-AddFade**.")
        break;
        case "communities":
            message.author.send("Communites\n```Fade Bot\n-addfade```")
            message.channel.send("Check your DMs.")
            break;   
    default:
        message.channel.send("I do not know this command!")
}

});
bot.login(TOKEN);
