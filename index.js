const Discord = require("discord.js");
const db = require("quick.db");
const TOKEN = "NDE5NDUwNjk5NTQ2MzYxODY2.DXwTeg.G3BHUY9h4W3GZeqcfIIHWOJIjc4";
const PREFIX = "~"

var fortunes = [

    "https://i.redd.it/2o326eovpri01.jpg",
    "https://i.redd.it/yrlsgwo7wri01.jpg",
    "https://i.redd.it/bxbik8oiesi01.jpg",
    "https://i.redd.it/a491ssd0gti01.jpg",
    "https://i.redd.it/dfdqz80ddri01.png",
    "https://i.redd.it/6rsnxdzhosi01.png",
    "https://i.imgur.com/00YIBVZ.png",
    "https://i.redd.it/g9jk1ud7cqi01.jpg",
    "https://i.redd.it/z48zsx9bqqi01.png",
    "https://i.redd.it/wxvoylfr5ui01.jpg 99% air ;)",
    "https://i.redd.it/4rlkscrnjqi01.png",
    "https://i.imgur.com/Utx360o.gifv",
    "https://i.imgur.com/R7Qj1n1.png",
    "https://i.redd.it/yubi9gpolri01.jpg",
    "https://i.redd.it/nitsnx5h9ti01.jpg",
    "https://i.imgur.com/TaJIRtb.png",
    "Jake Paul",
    "Fallen"
];
var roast = [

    "I'd give you a nasty look but you've already got one.",
    "If laughter is the best medicine, your face must be curing the world.",
    "I love what you've done with your hair. How do you get it to come out of the nostrils like that?",
    "If you're going to be two-faced, at least make one of them pretty.",
    "It looks like your face caught fire and someone tried to put it out with a hammer.",
    "If I wanted a bitch, I'd have bought a dog.",
    "I've seen people like you before, but I had to pay admission.    ",
    "Scientists say the universe is made up of neutrons, protons and electrons. They forgot to mention morons.    ",
    "Why is it acceptable for you to be an idiot but not for me to point it out?    ",
    "Your family tree must be a cactus because everyone on it is a prick.    ",
    "You'll never be the man your mother is.    ",
    "If I had a face like yours I'd sue my parents.    ",
    "Your doctor called with your colonoscopy results. Good news - they found your head.    ",
    "What's the difference between your girlfriend and a walrus? One has a moustache and smells of fish and the other is a walrus.    ",
    "If you really want to know about mistakes, you should ask your parents.    ",
    "The zoo called. They're wondering how you got out of your cage?    ",
    "You are proof that evolution can go in reverse.    ",
    "Brains aren't everything. In your case they're nothing.    ",
    "I thought of you today. It reminded me to take the garbage out.    "

];

var bot = new Discord.Client();

bot.on("ready", function () {
    console.log("Bot Online!")
    bot.user.setPresence({ game: { name: "Fade | Prefix: ~ | By VexNoid | v 1.0 | On " + bot.guilds.size + " server's", type: "PLAYING" } });
});

bot.on("message", function (message) {

    if (message.content.includes("fuck")) {
        message.delete();
        message.author.send("Please do not say that!")
    }

    bot.on("ready", () => {
        console.log("User " + member.user.username + "has joined!")

        var role = member.guild.roles.find("name", "Guest", );

        member.addRole(role)
    });

    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.send("🏓 Pong!")
            break;
        case "life":
            message.channel.send("What is it?")
            break;
        case "version":
            message.channel.send("Version: 1.0 (RELEASED!)")
            break;
        case "meme":
            if (args[0]) {
                message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
            } else {
                message.channel.send("I DONT KNOW THAT MEME!")
            }
            break;
        case "invite":
            var embed = new Discord.RichEmbed()
                .addField("Invite", "[Click Here](https://discordbots.org/bot/419450699546361866)")
                .setColor(0xff1c1c)
            message.channel.sendEmbed(embed)
            break;
        case "servers":
            message.channel.send("I was on " + bot.guilds.size + "Discord Servers since I was last reset!")
        case "bork":
            message.channel.send("https://pre00.deviantart.net/9cb7/th/pre/i/2016/360/9/1/bork_bork__by_cartoon_bazooka-daszygl.png")
            break;
        case "userinfo":
            var embed = new Discord.RichEmbed()
                .addField("Name", message.author.username.toString())
                .addField("Date Created", message.author.createdAt)
                .addField("Tag", message.author.tag)
                .addField("Id", message.author.id)
                .addField("Bot", message.author.bot)
                .setColor(0xff1c1c)
                .setThumbnail(message.author.avatarURL)
                .setFooter("Made by VexNoid | Fallen#9211")
            message.channel.sendEmbed(embed)
            break;
        case "discord":
            var embed = new Discord.RichEmbed()
                .addField("Our discord", "[Discord](https://discord.gg/MKfZXf6)")
                .setColor(0xff1c1c)
                .setFooter("Made by VexNoid | Fallen#9211")
            message.channel.sendEmbed(embed)
            break;
        case "website":
            message.channel.send("Boi we have no website! yet...")
            break;
        case "creator":
            message.channel.send("I was made by **Shaded#9211**")
            break;
        case "updates":
            var embed = new Discord.RichEmbed()
                .addField("Description", "A desription of the Fade.")
                .addField("suggestion", "live suggestion feed to staff.")
                .setFooter("Made by VexNoid | Shaded#9211")
                .setColor(0xff1c1c)
            message.channel.sendEmbed(embed)
            break;
            message.channel.sendEmbed(embed)
        case "description":
            message.channel.send("Check yo DM'S! :scream:")
            message.author.send("```A small time bot constantly being improved and edited to make the experience more enjoyable for the user. We also a take suggestions and help users out if needed. We plan to make this bot have many features and more customizable and unlike any other bot before!```")
            break;
        case "suggest":
            if (args.length >= 2) {
                var sendtochannel = bot.guilds.get("417216984506171392").channels.get("419418914611658762");
                sendtochannel.send("Suggestion: " + args.slice(1).join("** **") + ("** From:**") + message.author.tag);
                message.channel.send("**Your suggestion was sent!**")
            } else {
                message.channel.send("Please use this format ```~Suggest (Suggestion) (Your Name)```")
            }
            break;
        case "no":
            break;
        case "bug":
            if (args.length >= 2) {
                var sendtochannel = bot.guilds.get("417216984506171392").channels.get("420757595721039872");
                sendtochannel.send("Bug: " + args.slice(1).join("** **") + ("** From:**") + message.author.tag);
                message.channel.send("**Your bug report was sent!**")
            } else {
                message.channel.send("Please use this format ```~bug (bug) (your Discord name with tag)```")
            }
            break;
        case "info":
            var embed = new Discord.RichEmbed()
                .addField("Bot Name", message.author.username.toString())
                .addField("Ping", message.client.ping)
                .addField("Id", message.author.id)
                .addField("Servers", "I am on " + bot.guilds.size + " server's")
                .addField("Our discord", "[Discord](https://discord.gg/MKfZXf6)")
                .setColor(0xff1c1c)
                .setThumbnail(message.author.avatarURL)
                .setFooter("Made by VexNoid | Fallen#9211")
            message.channel.sendEmbed(embed)
            break;
        case "spam":
            message.channel.send("Fork No")
            break;
        case "roastme":
            if (args[0]) {
                message.channel.send(roast[Math.floor(Math.random() * roast.length)]);
            } else {
                message.channel.send(";-;")
            }
            break;
        case "chelp":
            if (message.author.id === '330916414607196162') {
                var embed = new Discord.RichEmbed();
                embed.setColor(0xFFD700);
                embed.setTitle("Commmands")
                embed.addField("Commands", "stop - Stops the bot.")
                embed.setFooter("Made by VexNoid | Fallen#9211");
                message.author.send(embed)
                message.author.send()
                message.channel.send("Check yo DM'S! :scream:")
            } else {
                message.channel.send("You must be a creator to use this command!")
                break;
            }
            break;
        case "stop":
            if (message.author.id === '330916414607196162') {
                wleiskd.jxf
            } else {

            }
            message.channel.send("You must be a creator to use this command!")
            break;
        case "dm":
            if (args.length >= 3) {
                if (message.member.roles.find("name", "Faded")) {
                    args.shift();
                    let user = message.mentions.users.first();
                    user.send(args.slice(1).join(" "));
                    message.channel.send("You're DM message is sent! :white_check_mark:");
                } else {
                    message.channel.send("You must have the Faded role to use this command!");
                }
            } else {
                message.channel.send("Please use this format ```~DM @(user) (Message)```")
            }
            break;
        case "hi":
            message.channel.send("Hi! :hand_splayed:")
            break;
        case "help":
            var embed = new Discord.RichEmbed();
            embed.setColor(0xFFD700);
            embed.setTitle("Commmands")
            embed.addField("New Commands", "Suggest - Make a suggestion for the bot.\nRoastMe - Have the bot roast you.")
            embed.addField("Useful Commands", "Userinfo - Gives you information on the user that ran the command.\nDm - DM a user through the bot\nBotinfo - Gives information on the bot\nDiscord - list our discord.\nWebsite - List our website.\nServers - Shows how much Discord servers the bot was on since it was last rest.\nHelp - gives all commands.\nSuggest - make a suggestion for the bot.\nDescription - A overall description of th bot\nUpdates - Recent updates that happend to the bot.\nBug - Report a bug you have found with the bot.");
            embed.addField("Fun Commands", "Hi - Greets you.\nSpam - You know ;)\nBork - Borks at ya. ;)\nMeme - Sends some spicy memes.\nPing - Gives you a ping...\nLife - Life\nRoastMe - Have the bot roast you.")
            embed.setFooter("Made by VexNoid | Fallen#9211");

            message.author.send(embed)
            message.author.send()
            message.channel.send("Check yo DM'S! :scream:")
            break;
        default:
            message.channel.send("**Invalid Command! :red_circle:**")
    }

});
bot.login(process.env.TOKEN);
