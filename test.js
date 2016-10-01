// var Twit = require('twit');
// var config = require('./config');
// var T = new Twit(config);

// console.log("Starting request");
// function getTweets(err,data,response)
// {
// 	var jsondata = data.statuses;
// 	var nameInTweet = [];
// 	console.log(data);
// }

// var params = 
// {
// 	q: 'happy birthday OR HAPPY BIRTHDAY OR Happy Birthday OR HBD OR hbd',
// 	lang: 'en',
// 	retweeted: 'false',
// 	count: 1

// }

// // var geoparams = 
// // {
// // 	place_id: '96683cc9126741d1'
// // }

// // function getLocation(err,data,response)
// // {
// // 	console.log(data);
// // }
// // T.get('geo/id',geoparams, getLocation);

// T.get('search/tweets', params, getTweets);

var nama = 'Jake';

function birthdayWish(name)
{
	var param = {};
	var wishLines = 
		[
			'Happy Birthday ' + '@' + name + '! -Birthday wishing bot.', 
			'Happy birthday ' + '@' + name + '! ' + 'I\'m so nice I didn\'t even list your age! -Birthday wishing bot.' ,
			'Exercise your lungs today by blowing candles. Happy birthday ' + '@' + name + '! -Birthday wishing bot.',
			'Watch out for birthdays, too many can kill you. Happy birthday ' + '@' + name + '! -Birthday wishing bot.',
			'I hope the candles don\'t cost more than the cake! Happy birthday ' + '@' + name + '! -Birthday wishing bot.',
			'Birthday = nature\'s way of telling us to eat more cake. Happy birthday ' + '@' + name + '! -Birthday wishing bot.',
			'Happy birthday to you... any many more!' + '@' + name + '! -Birthday wishing bot.',
			'May you live long enough to shit yourself. Happy birthday ' + '@' + name + '! -Birthday wishing bot.',
			'Not getting older, just becoming vintage. Happy birthday ' + '@' + name + '! -Birthday wishing bot.'
		];
	var wish = wishLines[Math.floor(Math.random()*wishLines.length)];
	param.status = wish;
	console.log(param);
}
birthdayWish(nama);