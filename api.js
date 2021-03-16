var bad = require('bad-words/lib/lang.json').words
module.exports = msg => {
if(bad.some(word => msg.content.includes(word))) msg.delete({timeout:2000,}) && msg.reply('Please dont use foul language !!!!')
}