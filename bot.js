const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
require('dotenv').config();
client.login(process.env.DISCORDJS_BOT_TOKEN);

var orarul = require('./orar.json');
var links = require('./links.json');

let fs = require('fs');
const { get } = require('http');

//sheesh - caterinca
const { Player } = require("discord-player");
const player = new Player(client);
client.player = player;

const sheesh = 'https://www.youtube.com/watch?v=IVqmTuVewj4'
const xue = 'https://www.youtube.com/watch?v=HPXFRsijuKo'
const cahut = 'https://www.youtube.com/watch?v=O4CM80R8Zv8'
const bruh = 'https://www.youtube.com/watch?v=yNHIPhY_LqQ'
const start = 'https://www.youtube.com/watch?v=6Joyj0dmkug'
const augustin = 'https://www.youtube.com/watch?v=8acVR69RYTk'
const india = 'https://www.youtube.com/watch?v=MjZRb4cIviw'
const drip = 'https://www.youtube.com/watch?v=UPeJGVOPnK4'
const nokia = 'https://www.youtube.com/watch?v=un2HXgZTIsc'
const bihyah = 'https://www.youtube.com/watch?v=jcPDe2_r3PE'
const amogus = 'https://www.youtube.com/watch?v=RHtlLxm9wNI'
const letsgo = 'https://www.youtube.com/watch?v=ptXs_DCp62Q'

//is ready

//teme
var directory = __dirname

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
        if(ora == 12){
            var min = getminute()
            if(min==05){
                ora = orarul.normal[nrzi-1].primaora.toLowerCase()
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
                    .setTitle(ora)
                    .setDescription("Ora Urmatoare")
                    .addField('||@everyone||', ':new_moon: ' + linkora + ' :new_moon:')
                    .setURL(linkora)
                    client.channels.cache.find(channel => channel.name === '📖scoala-online📖').send(helpembed)
                    }
            }
        }
        if(ora == 12){
            var min = getminute()
            if(min==55){
                ora = orarul.normal[nrzi-1].doiora.toLowerCase()
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
                    .setTitle(ora)
                    .setDescription("Ora Urmatoare")
                    .addField('||@everyone||', ':new_moon: ' + linkora + ' :new_moon:')
                    .setURL(linkora)
                    client.channels.cache.find(channel => channel.name === '📖scoala-online📖').send(helpembed)
                    }
            }
        }
        if(ora == 13){
            var min = getminute()
            if(min==45){
                ora = orarul.normal[nrzi-1].treiora.toLowerCase()
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
                    .setTitle(ora)
                    .setDescription("Ora Urmatoare")
                    .addField('||@everyone||', ':new_moon: ' + linkora + ' :new_moon:')
                    .setURL(linkora)
                    client.channels.cache.find(channel => channel.name === '📖scoala-online📖').send(helpembed)
                    }
            }
        }
        if(ora == 14){
            var min = getminute()
            if(min==35){
                ora = orarul.normal[nrzi-1].patruora.toLowerCase()
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
                    .setTitle(ora)
                    .setDescription("Ora Urmatoare")
                    .addField('||@everyone||', ':new_moon: ' + linkora + ' :new_moon:')
                    .setURL(linkora)
                    client.channels.cache.find(channel => channel.name === '📖scoala-online📖').send(helpembed)
                    }
            }
        }
        if(ora == 15){
            var min = getminute()
            if(min==25){
                ora = orarul.normal[nrzi-1].cinciora.toLowerCase()
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
                    .setTitle(ora)
                    .setDescription("Ora Urmatoare")
                    .addField('||@everyone||', ':new_moon: ' + linkora + ' :new_moon:')
                    .setURL(linkora)
                    client.channels.cache.find(channel => channel.name === '📖scoala-online📖').send(helpembed)
                    }
            }
        }
        if(ora == 16){
            var min = getminute()
            if(min==15){
                ora = orarul.normal[nrzi-1].saseora.toLowerCase()
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
                .setTitle(ora)
                .setDescription("Ora Urmatoare")
                .addField('||@everyone||', ':new_moon: ' + linkora + ' :new_moon:')
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
    var nrzi = getdayno()
    var date = new Date();
    if(nrzi == 5){
        var hour = date.getHours()
    }else{
        var hour = date.getHours()
    }
    return hour
}

function getminute(){
    var date = new Date();
    var min = date.getMinutes();
    return min
}



client.on('message', message => {
    //must
    //log messages

    if (message.author == '775432864677494854'){
        console.log("bot" + " : " + message.content)
    }else{
        console.log(message.author.username + " : " + message.content)
    }

    if (message.author.bot) return;

    //sheesh

    if((message.content.toLowerCase().includes('she') || (message.content.toLowerCase().includes('shi')))){
        client.player.play(message, sheesh);
        message.reply('sheeesh').then(msg => msg.delete({timeout: 6000}));
        message.delete()
    }

    if(message.content.toLowerCase().includes('xue')){
        client.player.play(message, xue);
        message.reply('xue hua piao piao bei feng xiao xiao').then(msg => msg.delete({timeout: 6000}));
        message.delete()
    }

    if(message.content.toLowerCase().includes('bruh')){
        client.player.play(message, bruh);
        message.reply('bruh').then(msg => msg.delete({timeout: 6000}));
        message.delete()
    }

    if(message.content.toLowerCase().includes('bih')){
        client.player.play(message, bihyah);
        message.reply('unde dracul este mario iuda?').then(msg => msg.delete({timeout: 6000}));
        message.delete()
    }

    if(message.content.toLowerCase().includes('start')){
        client.player.play(message, start);
        message.reply('geamuri experienta').then(msg => msg.delete({timeout: 6000}));
        message.delete()
    }

    if(message.content.toLowerCase().includes('nokia')){
        client.player.play(message, nokia);
        message.reply('nokia lmao').then(msg => msg.delete({timeout: 6000}));
        message.delete()
    }

    if(message.content.toLowerCase().includes('drip')){
        client.player.play(message, drip);
        message.reply('dont touch me ni44a').then(msg => msg.delete({timeout: 6000}));
        message.delete()
    }

    if(message.content.toLowerCase().includes('india')){
        client.player.play(message, india);
        message.reply('dingalinga').then(msg => msg.delete({timeout: 6000}));
        message.delete()
    }

    if(message.content.toLowerCase().includes('augu')){
        client.player.play(message, augustin);
        message.reply('augustin be like: ').then(msg => msg.delete({timeout: 6000}));
        message.delete()
    }

    if(message.content.toLowerCase().includes('amo')){
        client.player.play(message, amogus);
        message.reply('amogus').then(msg => msg.delete({timeout: 6000}));
        message.delete()
    }

    if(message.content.toLowerCase().includes('go')){
        client.player.play(message, letsgo);
        message.reply('dababyy').then(msg => msg.delete({timeout: 6000}));
        message.delete()
    }

    if((message.content.toLowerCase().includes('cahut') || (message.content.toLowerCase().includes('kahoot')))){
        client.player.play(message, cahut);
        message.reply('am luat 5').then(msg => msg.delete({timeout: 6000}));
        message.delete()
    }

    if(message.content.toLowerCase().includes('comande')){
        message.delete()
        var embed = new MessageEmbed()
        .setTitle("comande")
        .addField('augustin sau india sau cahut sau drip sau nokia sau start sau bruh sau xue sau sheesh', 'sau stop ca sa opresti coaie')
        message.channel.send(embed).then(msg => msg.delete({timeout: 60000}));
    }

    if(message.content.toLowerCase().includes('sau')){
        message.reply('esti prost').then(msg => msg.delete({timeout: 6000}));
    }

    if(message.content.toLowerCase().includes('stop')){
        message.channel.send('ok coaie').then(msg => msg.delete({timeout: 6000}))
        client.player.stop(message);
        message.delete()
    }

    if(message.content.toLowerCase().includes('skip')){
        message.channel.send('ok coaie').then(msg => msg.delete({timeout: 6000}))
        client.player.skip(message);
        message.delete()
    }


    //teme
    if((message.content.toLocaleLowerCase().includes('add')) || (message.content.toLocaleLowerCase().includes('remove'))){
        if(message.member.roles.cache.find(r => r.name === "teme")){
            //adauga teme
            if(message.content.toLowerCase().includes('add')){
                //cauta teme in mesaj
            var info = message.content.split("-")
            if(info.length > 2){
                var tema_act = info[1]
                var materie_tema = info[2]
                var data_tema = info[3]
            }else{
                message.channel.send("Valori incorecte!")
            }
                fs.readFile(directory + '/teme.json', 'utf8', function (err, data) {
                    if (err) {
                        console.log(err)
                    } else {
                        const file = JSON.parse(data);
                        file.teme.push({"tema": tema_act, "materie": materie_tema, "data": data_tema});
                        const json = JSON.stringify(file);
            
                        fs.writeFile(directory + '/teme.json', json, 'utf8', function(err){
                                if(err){ 
                                    console.log(err); 
                                } else {
                                    var embed = new MessageEmbed()
                                    .setColor(0xff0000)
                                    .setTitle("Am adaugat tema!")
                                    .addField("Subiect: ", tema_act)
                                    .addField("Materie: ", materie_tema)
                                    .addField("Pana pe: ", data_tema)
                                    message.channel.send(embed)
                                }});
                    }
                })
            }

            //scoate teme
            if(message.content.toLowerCase().includes('remove')){
                if(message.content.toLowerCase().includes('azi')){
                        getdaydate()
                        let rawdata = fs.readFileSync(directory + "/teme.json")
                        let inf = JSON.parse(rawdata)
                        teme_send = inf['teme']
                        teme_send.forEach(element => {
                            if(element['data'] == getdaydatedate()){
                                const index = teme_send.indexOf(element)
                                delete teme_send[index]
                                message.channel.send('Am sters temele pentru azi!')
                            }
                        });
                        fs.unlink(directory + '/teme.json', (err) => {
                            if (err) {
                              message.channel.send("Eroare!")
                              return
                            }
                            let lyrics = '{"teme":[]}'
                            fs.writeFile(directory + '/teme.json', lyrics, (err) => {
                                if (err) throw err;
                            });
                            fs.readFile(directory + '/teme.json', 'utf8', function (err, data) {
                                if (err) {
                                    console.log(err)
                                } else {
                                    var filtered = teme_send.filter(function (el) {
                                        return el != null;
                                    });
                                    const file = JSON.parse(data);
                                    filtered.forEach(element => {
                                        file.teme.push(element);
                                    });
                                    const json = JSON.stringify(file);
                                    fs.writeFile(directory + '/teme.json', json, 'utf8', function(err){
                                            if(err){ 
                                                console.log(err); 
                                    }});
                                }
                            })

                        })
                }else if(message.content.toLowerCase().includes('vechi')){
                    getdaydate()
                    let rawdata = fs.readFileSync(directory + "/teme.json")
                    let inf = JSON.parse(rawdata)
                    teme_send = inf['teme']
                    teme_send.forEach(element => {
                        if(element['data'] < getdaydate()){
                            const index = teme_send.indexOf(element)
                            delete teme_send[index]
                            message.channel.send('Am sters temele vechi!')
                        }
                    });
                    fs.unlink(directory + '/teme.json', (err) => {
                        if (err) {
                            message.channel.send("Eroare!")
                            return
                        }
                        let lyrics = '{"teme":[]}'
                        fs.writeFile(directory + '/teme.json', lyrics, (err) => {
                            if (err) throw err;
                        });
                        fs.readFile(directory + '/teme.json', 'utf8', function (err, data) {
                            if (err) {
                                console.log(err)
                            } else {
                                var filtered = teme_send.filter(function (el) {
                                    return el != null;
                                });
                                const file = JSON.parse(data);
                                filtered.forEach(element => {
                                    file.teme.push(element);
                                });
                                const json = JSON.stringify(file);
                    
                                fs.writeFile(directory + '/teme.json', json, 'utf8', function(err){
                                        if(err){ 
                                            console.log(err); 
                                }});
                            }
                        })
                    })
                }else{
                    if(message.content.toLowerCase().includes('all')){
                        fs.unlink(directory + '/teme.json', (err) => {
                            if (err) {
                              console.error(err)
                              return
                            }
                            var lyrics = '{"teme":[]}'
                            fs.writeFile(directory + '/teme.json', lyrics, 'utf8', function(err){
                                if(err){ 
                                    console.log(err); 
                            }});
                            message.channel.send("Am sters toate temele!")
                        })
                    }
                }
            }
        }else{ 
        message.channel.send("Nu ai permisiunea pentru a modifica temele!")
        }
    }

    //cauta dupa materie

    if(message.content.toLowerCase().includes('!materie')){
        var x = message.content.toLowerCase().split(' ')
        if(x.length !== 1){
            var are_teme = false
            mat = x[1]
            let rawdata = fs.readFileSync(directory + "/teme.json")
            let inf = JSON.parse(rawdata)
            toate_teme = inf['teme']
            toate_teme.forEach(element => {
                if(element['materie'] == mat){
                    var embed = new MessageEmbed()
                    .setColor(0xff0000)
                    .setTitle("Temele pentru " + mat)
                    .addField("Subiect: ", element['tema'])
                    .addField("Materie: ", element['materie'])
                    .addField("Pana pe: ", element['data'])
                    message.channel.send(embed)
                    are_teme = true
                }
            });
            if(are_teme == false){
                message.channel.send("Nu a fost gasita vreo tema pentru: " + mat)
            }
        }else{
            message.channel.send("Specifica o materie!")
        }
    }

    //cauta dupa data

    if(message.content.toLowerCase().includes('!data')){
        var x = message.content.toLowerCase().split(' ')
        if(x.length !== 1){
            var are_teme = false
            data = x[1]
            let rawdata = fs.readFileSync(directory + "/teme.json")
            let inf = JSON.parse(rawdata)
            toate_teme = inf['teme']
            toate_teme.forEach(element => {
                if(element['data'] == data){
                    var embed = new MessageEmbed()
                    .setColor(0xff0000)
                    .setTitle("Temele pentru " + data)
                    .addField("Subiect: ", element['tema'])
                    .addField("Materie: ", element['materie'])
                    .addField("Pana pe: ", element['data'])
                    message.channel.send(embed)
                    are_teme = true
                }
            });
            if(are_teme == false){
                message.channel.send("Nu au fost gasite teme pentru data de: " + data)
            }
        }
    }

        // cauta teme


        if(message.content.toLowerCase().includes('!teme')){
            if(message.content.toLowerCase().includes('!teme azi')){
                let rawdata = fs.readFileSync(directory + "/teme.json")
                let inf = JSON.parse(rawdata)
                teme_send = inf['teme']
                teme_send.forEach(element => {
                    if(element['tema'] == undefined){}else{
                        if(element['data'] == getdaydate()){
                            var embed = new MessageEmbed()
                        .setColor(0xff0000)
                        .setTitle("Tema")
                        .addField("Subiect: ", element['tema'])
                        .addField("Materie: ", element['materie'])
                        .addField("Pana pe: ", element['data'])
                        message.channel.send(embed)}    
                        }  
                });
            }else if(message.content.toLowerCase().includes('!teme toate')){
                let rawdata = fs.readFileSync(directory + "/teme.json")
                let inf = JSON.parse(rawdata)
                teme_send = inf['teme']
                teme_send.forEach(element => {
                    if(element['tema'] == undefined){}else{
                        var embed = new MessageEmbed()
                        .setColor(0xff0000)
                        .setTitle("Tema")
                        .addField("Subiect: ", element['tema'])
                        .addField("Materie: ", element['materie'])
                        .addField("Pana pe: ", element['data'])
                        message.channel.send(embed)}    
                });
            }else if(message.content.toLowerCase().includes('!teme maine')){
                let rawdata = fs.readFileSync(directory + "/teme.json")
                let inf = JSON.parse(rawdata)
                teme_send = inf['teme']
                teme_send.forEach(element => {
                    if(element['data'] == getdaydate() + 1){
                        if(element['tema'] == undefined){}else{
                            var embed = new MessageEmbed()
                            .setColor(0xff0000)
                            .setTitle("Tema")
                            .addField("Subiect: ", element['tema'])
                            .addField("Materie: ", element['materie'])
                            .addField("Pana pe: ", element['data'])
                            message.channel.send(embed)}   
                    } 
                });
            }else{
            var helpembed = new MessageEmbed()
            .setColor(0xff0000)
            .setTitle('Teme')
            .setDescription('test')
            .addField('♦', ':new_moon: scrie !teme azi/maine/toate :new_moon:')
            .addField('♦', ':new_moon: scrie !materie *materia* :new_moon:')
            .addField('♦', ':new_moon: scrie !data *data* :new_moon:')
            .addField('♦', ':new_moon: pt admini : add-*tema*-*materie*-*data* :new_moon:')
            message.channel.send(helpembed)
            }
        }


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
            .addField("12:10 - 12:50", ora1)
            .addField("13:00 - 13:40", ora2)
            .addField("13:50 - 14:30", ora3)
            .addField("14:40 - 15:20", ora4)
            .addField("15:30 - 16:10", ora5)
            .addField("16:20 - 17:00", ora6)
            message.channel.send(orar)
        }   

        if(message.content.toLowerCase().includes('!link')){
            var materie = message.content.toLowerCase().split(' ')
            var no = 0
            var istrue = 0
            for(i=0; i < links.linkuri.length; i++){
                if(links.linkuri[i].name.includes(materie[1])){
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
            .addField("15:30 - 16:10", ora3)
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
