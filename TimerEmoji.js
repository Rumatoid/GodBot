const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');
client.login(config.token);

var emojis = ['0⃣', '1⃣', '2⃣', '3⃣', '4⃣', '5⃣', '6⃣', '7⃣', '8⃣', '9⃣']

function sendTime(msgN, msg, time) {
  str = time % 10
  str1 = parseInt(time % 100 / 10)
  sec = 'Секунд'
  if (str1 != 1) {
    switch (str) {
      case 1: {
        sec = 'Секунда'
        break
      }
      case 2: {
        sec = 'Секунды'
        break
      }
      case 3: {
        sec = 'Секунды'
        break
      }
      case 4: {
        sec = 'Секунды'
        break
      }
    }
  }

  msgN.edit(`${msg.author}, у тебя осталось ${time} ${sec}!`)
}

client.on('message', (msg) => {

  if (msg.content.indexOf("сек") > -1 && msg.author.bot == false) {
    var timer = parseInt(msg.content.substr(7, msg.content.length))
    console.log(timer)

    msg.channel.send(`${msg.author}`)
      .then(message => {
        let msgN = message
        for (i = 0; i <= timer; i++) {
          if (i == timer) {
            setTimeout(function () {
              msgN.edit(`${msg.author}, ты должен быть здесь!!!!! <:Anton:506191184654368768> `)
            }, i * 1000)
            break
          }
          setTimeout(sendTime, i * 1000, msgN, msg, timer - i)
        }

        setTimeout(function () {
          msgN.delete()
          msg.delete()
        }, (timer + 50) * 1000)
      })
      .catch(console.error)

  }
});