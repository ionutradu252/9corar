const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
require('dotenv').config();
client.login(process.env.DISCORDJS_BOT_TOKEN);

var orarul = require('./orar.json');
var links = require('./links.json');

//is ready

client.once('ready', () => {
    console.log('Ready!')
    console.log('MADE BY XXXMARIOXXX#1288!')
    client.user.setActivity("!ajutor", {
        type: "LISTENING"
      });
      //client.channels.cache.find(channel => channel.name === '📖scoala-online📖').send("logged in")
})

client.on('guildMemberAdd', member => {
    var helpembed = new MessageEmbed()
    .setColor(0xff0000)
    .setTitle('Bine ai venit pe 9Campioni!')
    .setDescription('Un server mai bun ca al lui August')
    member.send(helpembed)
    member.send("Scrie !ajutor pentru mai multe detalii.")
 });


setInterval(function getactive(){ 
    var zi = getday()
    if((zi!="Sat")||(zi!="Sun") || (zi!="Fri")){
        var ora = gethour()
        var nrzi = getdayno()
        if(ora == 13){
            var min = getminute()
            if(min==45){
                ora = orar.orar[nrzi-1].primaora
                for(i=0; i < links.linkuri.length; i++){
                    if(links.linkuri[i].name.includes(ora)){
                        istrue = 1
                        nr = i
                    }
                    
                }
                if(istrue==1){
                linkora = links.linkuri[nr].link
                var helpembed = new MessageEmbed()
                .setColor(0xff0000)
                .setTitle('Ora Urmatoare')
                .setDescription(ora)
                .addField('♦', ':new_moon: ' + linkora + ' :new_moon:')
                .setURL(linkora)
                client.channels.cache.find(channel => channel.name === '📖scoala-online📖').send(helpembed)
                }
            }
        }
        if(ora == 14){
            var min = getminute()
            if(min==35){
                ora = orar.orar[nrzi-1].doiora
                for(i=0; i < links.linkuri.length-1; i++){
                    if(links.linkuri[i].name.includes(ora)){
                        istrue = 1
                        nr = i
                    }
                    
                }
                if(istrue==1){
                linkora = links.linkuri[nr].link
                var helpembed = new MessageEmbed()
                .setColor(0xff0000)
                .setTitle('Ora Urmatoare')
                .setDescription(ora)
                .addField('♦', ':new_moon: ' + linkora + ' :new_moon:')
                .setURL(linkora)
                client.channels.cache.find(channel => channel.name === '📖scoala-online📖').send(helpembed)
                }
            }
        }
        if(ora == 15){
            var min = getminute()
            if(min==25){
                ora = orar.orar[nrzi-1].treiora
                for(i=0; i < links.linkuri.length; i++){
                    if(links.linkuri[i].name.includes(ora)){
                        istrue = 1
                        nr = i
                    }
                    
                }
                if(istrue==1){
                linkora = links.linkuri[nr].link
                var helpembed = new MessageEmbed()
                .setColor(0xff0000)
                .setTitle('Ora Urmatoare')
                .setDescription(ora)
                .addField('♦', ':new_moon: ' + linkora + ' :new_moon:')
                .setURL(linkora)
                client.channels.cache.find(channel => channel.name === '📖scoala-online📖').send(helpembed)
                }
            }
        }
        if(ora == 16){
            var min = getminute()
            if(min==15){
                ora = orar.orar[nrzi-1].patruora
                for(i=0; i < links.linkuri.length; i++){
                    if(links.linkuri[i].name.includes(ora)){
                        istrue = 1
                        nr = i
                    }
                    
                }
                if(istrue==1){
                linkora = links.linkuri[nr].link
                var helpembed = new MessageEmbed()
                .setColor(0xff0000)
                .setTitle('Ora Urmatoare')
                .setDescription(ora)
                .addField('♦', ':new_moon: ' + linkora + ' :new_moon:')
                .setURL(linkora)
                client.channels.cache.find(channel => channel.name === '📖scoala-online📖').send(helpembed)
                }
            }
        }
        if(ora == 17){
            var min = getminute()
            if(min==5){
                ora = orar.orar[nrzi-1].cinciora
                for(i=0; i < links.linkuri.length; i++){
                    if(links.linkuri[i].name.includes(ora)){
                        istrue = 1
                        nr = i
                    }
                    
                }
                if(istrue==1){
                linkora = links.linkuri[nr].link
                var helpembed = new MessageEmbed()
                .setColor(0xff0000)
                .setTitle('Ora Urmatoare')
                .setDescription(ora)
                .addField('♦', ':new_moon: ' + linkora + ' :new_moon:')
                //.setURL(linkora)
                client.channels.cache.find(channel => channel.name === '📖scoala-online📖').send(helpembed)
                }
            }
            if(min==55){
                ora = orar.orar[nrzi-1].saseora
                var istrue = 0
                var nr = 0
                for(i=0; i < links.linkuri.length; i++){
                    if(links.linkuri[i].name.includes(ora)){
                        istrue = 1
                        nr = i
                    }
                    
                }
                if(istrue==1){
                linkora = links.linkuri[nr].link
                var helpembed = new MessageEmbed()
                .setColor(0xff0000)
                .setTitle('Ora Urmatoare')
                .setDescription(ora)
                .addField('♦', ':new_moon: ' + linkora + ' :new_moon:')
                .setURL(linkora)
                client.channels.cache.find(channel => channel.name === '📖scoala-online📖').send(helpembed)
                }
            }
        }
    }
}, 60000);

function getdayno(){
    var date = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(date);
    var dayName = d.toString().split(' ')[0];
    var dayno = 0
    if(dayName=="Mon"){
        dayno = 1
    }else if(dayName=="Tue"){
        dayno = 2
    }else if(dayName=="Wed"){
        dayno = 3
    }else if(dayName=="Thu"){
        dayno = 4
    }else if(dayName=="Fri"){
        dayno = 5
    }
    return dayno
}

function getday(){
    var date = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(date);
    var dayName = d.toString().split(' ')[0];
    return dayName
}

function gethour(){
    var date = new Date();
    var hour = date.getHours();
    return hour
}

function getminute(){
    var date = new Date();
    var min = date.getMinutes();
    return min
}



client.on('message', message => {

    //log messages

    if (message.author == '775432864677494854'){
        console.log("bot" + " : " + message.content)
    }else{
        console.log(message.author.username + " : " + message.content)
    }

    if (message.author.bot) return;


        // basic command

        if(message.content.toLowerCase().includes('debug!time')){
            var timp = gethour()
            var minute = getminute()
            var dayName = getday()
            var daynumber = getdayno()
            var helpembed = new MessageEmbed()
            .setColor(0xff0000)
            .setTitle('DEBUG')
            .addField('hour', timp)
            .addField('minute', minute)
            .addField('dayname', dayName)
            .addField('daynumber', daynumber)
            message.channel.send(helpembed)
        }


        if(message.content.toLowerCase().includes('!ajutor')){
            var helpembed = new MessageEmbed()
            .setColor(0xff0000)
            .setTitle('9C')
            .setDescription('Help')
            .addField('♦', ':new_moon: scrie !orar pentru a afisa orarul de astazi :new_moon:')
            .addField('♦', ':new_moon: scrie !maine pentru a afisa orarul de maine :new_moon:')
            .addField('♦', ':new_moon: scrie !link mate de ex. pentru a afisa link-ul de la mate :new_moon:')
            message.channel.send(helpembed)
        }


        // invite

        if(message.content.toLowerCase().includes('!invite')){
            var helpembed = new MessageEmbed()
            .setColor(0xff0000)
            .setTitle('Click me')
            .setURL('https://discord.com/api/oauth2/authorize?client_id=761518975745392640&permissions=2048&scope=bot')
            message.channel.send(helpembed)
        }   

        if(message.content.toLowerCase().includes('!orar')){
            var daynumar = getdayno()
            daynumar = daynumar - 1
            var ora1 = orarul.normal[daynumar].primaora
            var ora2 = orarul.normal[daynumar].doiora
            var ora3 = orarul.normal[daynumar].treiora
            var ora4 = orarul.normal[daynumar].patruora
            var ora5 = orarul.normal[daynumar].cinciora
            var ora6 = orarul.normal[daynumar].saseora

            var orar = new MessageEmbed()
            .setColor(0xff0000)
            .setTitle("Orar")
            .addField("13:50 - 14:30", ora1)
            .addField("14:40 - 15:20", ora2)
            .addField("15:50 - 16:10", ora3)
            .addField("16:20 - 17:00", ora4)
            .addField("17:10 - 17:50", ora5)
            .addField("18:00 - 18:40", ora6)
            message.channel.send(orar)
        }   

        if(message.content.toLowerCase().includes('!link')){
            var materie = message.content.toLowerCase().split(' ')
            var no = 0
            var istrue = 0
            for(i=0; i < links.linkuri.length; i++){
                if(materie.includes(links.linkuri[i].name)){
                    istrue = 1
                    no = i
                }
            }
            if(istrue==1){
                var linkactual = links.linkuri[no].link
                var linkembed = new MessageEmbed()
                .setColor(0xff0000)
                .setTitle("Link pentru " + links.linkuri[no].name)
                .setURL(linkactual)
                message.channel.send(linkembed)
            }
        }

        if(message.content.toLowerCase().includes('!maine')){
            var daynumar = getdayno()
            var ora1 = orarul.normal[daynumar].primaora
            var ora2 = orarul.normal[daynumar].doiora
            var ora3 = orarul.normal[daynumar].treiora
            var ora4 = orarul.normal[daynumar].patruora
            var ora5 = orarul.normal[daynumar].cinciora
            var ora6 = orarul.normal[daynumar].saseora

            var orar = new MessageEmbed()
            .setColor(0xff0000)
            .setTitle("Orar")
            .addField("13:50 - 14:30", ora1)
            .addField("14:40 - 15:20", ora2)
            .addField("15:50 - 16:10", ora3)
            .addField("16:20 - 17:00", ora4)
            .addField("17:10 - 17:50", ora5)
            .addField("18:00 - 18:40", ora6)
            message.channel.send(orar)
        }   





        //example random



        if(message.content.includes('sfafsaffsfsacafga')){
            var answers = [
                "bn tu?",
                "eu bine",
                "sunt cam suparat"
              ]
              
              var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
            message.channel.send(randomAnswer)
        }
        
})