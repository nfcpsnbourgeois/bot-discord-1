const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.js');
client.login(config.token);

// Fonction pour afficher les erreurs dans la console
client.on('error', console.error);

// Tableau des activités
const activities = [
   { name: 'TradingView', type: 'PLAYING' },
   { name: 'BTC/USD 📈', type: 'WATCHING' },
   { name: 'Telegram Group 🚀', type: 'WATCHING' }
];

// Fonction pour mettre à jour l'activité
function updateActivity() {
    const activity = activities[Math.floor(Math.random() * activities.length)];
    client.user.setPresence({
       activity: {
          name: activity.name,
          type: activity.type
       }
    });
 }
 
// Événement une fois que le bot est prêt
client.once('ready', () => {
   console.log('Félicitations, votre bot Discord a été correctement initialisé !');
   setInterval(updateActivity, 60000); // Mettre à jour l'activité toutes les 60 secondes
});

// Événement lorsqu'un message est reçu
client.on('message', message => {
   if (message.content === 'ping') {
      message.reply('Pong!');
   }
});
