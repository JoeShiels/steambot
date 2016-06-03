var socket = require('socket.io-client')('https://steambo.herokuapp.com/');
var SteamUser = require('steam-user');
var SteamTotp = require('steam-totp');
var user = new SteamUser();

var code = SteamTotp.generateAuthCode('414puBZjTp44WxEoyBJeQ1E/gd4=');

user.logOn({
	'accountName': 'joeshiels16',
	'password': 'G36c123823',
	'twoFactorCode': code
});

user.on('loggedOn', function (details) {
	console.log('logged on');
	socket.emit('logon', { bot: 'joeshiels16' });
});