const {Client} = require('discord.js') ;
const client = new Client ;
const settings = require('./setting.json') ;

client.on('message', msg=>{
    if(msg.content.startsWith(settings.prefix+'pic')){
        var num = Random(54,1) ;
        msg.channel.send({files:["./pict/"+num+".png"]}) ;
    }

    if(msg.content.startsWith(settings.prefix+'PIC')){
        var num = Random(9,1) ;
        switch(num){
            case 1 : msg.channel.send({files:["./pict/"+num+".png"]}) ;break ;
            case 2 : msg.channel.send({files:["./pict/"+num+".png"]}) ;break ;
            case 3 : msg.channel.send({files:["./pict/"+num+".png"]}) ;break ;
            case 4 : msg.channel.send({files:["./pict/"+num+".png"]}) ;break ;
        }
    }





function Random(max,min){
    var rnd = Math.floor(Math.random()*max)+min ;
    return rnd ;
}

}) ;   


client.login(settings.token) ;
