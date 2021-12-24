const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]

});


const prefix = "!p"

Client.on("ready", () => {
    console.log("Le bot est opérationel");
});

Client.on("messageCreate", message => {
    if (message.author.bot) return; 

    //!pyoutube
    if(message.content === prefix + "youtube"){
        const embed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("Voici le YOUTUBE de la Team Plyers !")
        .setURL("https://www.youtube.com/channel/UCEdky4YnYD36DHM6eLjbpVA")
        .setTimestamp()
        .setFooter("Copyright : c/o Tweez");
       
        message.channel.send({ embeds: [embed]});

    }

    //!ptwitter
    if(message.content === prefix + "twitter"){
        const embed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("Voici le TWITTER de la Team Plyers !")
        .setURL("https://twitter.com/PlyersCrew")
        .setTimestamp()
        .setFooter("Copyright : c/o Tweez");

        message.channel.send({ embeds: [embed]});

    }

    //!ptwitch
    if(message.content === prefix + "twitch"){
        const embed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("Voici le TWITCH de la Team Plyers !")
        .setURL("https://www.twitch.tv/plyersesport")
        .setTimestamp()
        .setFooter("Copyright : c/o Tweez");

        message.channel.send({ embeds: [embed]});

    }

    //!pinstagram
    if(message.content === prefix + "instagram"){
        const embed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("Voici l'INSTAGRAM de la Team Plyers !")
        .setURL(" https://www.instagram.com/plyers.orga/")
        .setTimestamp()
        .setFooter("Copyright : c/o Tweez");

        message.channel.send({ embeds: [embed]});
    }

   //!phelp
   if(message.content === prefix + "help"){
       const embed = new Discord.MessageEmbed()
       .setColor("#0099ff")
       .setTitle("Voici les différents commandes du bot")
       .addField("!pyoutube", "Vous envoie le lien pour accèdez au YOUTUBE de la Team")
       .addField("!ptwitch", "Vous envoie le lien pour accèdez au TWITCH de la Team")
       .addField("!ptwiter", "Vous envoie le lien pour accèdez à la page TWITTER de la Team")
       .addField("!pinstagram", "Vous envoie le lien pour accèdez au INSTAGRAM de la Team")
       .setTimestamp()
       .setFooter("Copyright : c/o Tweez");
    

        message.channel.send({ embeds: [embed]})

   }



    //!pstaff
    if(message.content === prefix + "staff"){
        const embed = new Discord.MessageEmbed()
        .setColor("#330033")
        .setTitle("Vous prenez votre rôle de Staff")
        .setTimestamp()
        .setFooter("Copyright : c/o Tweez")
    
        message.channel.send({ embeds: [embed]})

    }


   
})




































































 //CustomStatus
 Client.on("ready", () => {
    function randomStatus() {
        let status = ["!phelp", "regarde le serveurs Plyers", "recrutement ON"]
        let rstatus = Math.floor(Math.random() * status.length);

        Client.user.setActivity(status[rstatus], {type: "WATCHING", url: "https://www.twitch.tv/plyersesport"});
    }; setInterval(randomStatus, 2000)
});























Client.login("OTIzNzIzNDI4MTk0ODQwNTg2.YcUKew.ZnvCIhibPpmgDQVG6gxfchhK9h0")