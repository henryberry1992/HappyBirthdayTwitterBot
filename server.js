var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

console.log("Starting request");

var birthdayParams = 
{
	q: 'happy birthday OR HAPPY BIRTHDAY OR Happy Birthday OR HBD OR hbd OR birthday girl OR birthday boy',
	lang: 'en',
	count: 1
}


function getTweet(err,data,response)
{
	jsondata = data.statuses;
	var usernames = [];
	var birthdayTweetName = '';
	if(err)
	{
		console.log(err);
	}
	else
	{
		for(var i =0; i<jsondata.length; i++)
		{
			if(followCountLimit(jsondata[i].user.followers_count) && checkUserMentions(jsondata[i].entities.user_mentions))
			{
				usernames = jsondata[i].entities.user_mentions.map(function(a) 
					{
						return a.screen_name;
					});

				if(isRetweet(jsondata[i].text) && isTaggedRetweet(usernames))
				{
					birthdayTweetName += usernames[usernames.length-1];
					console.log("Wisher and birthday person: " + jsondata[i].text + "\n", "wisher: " + usernames[0] + "\n","Birthday person:" + birthdayTweetName + "\n");
					postTweet(birthdayTweetName);
					birthdayTweetName = '';
				}
				else if(isRetweet(jsondata[i].text) && !(isTaggedRetweet(usernames)))
				{
					console.log("Only wisher retweet: " + jsondata[i].text + "\n", "Wisher: " + usernames + "\n");
				}
				else
				{
					birthdayTweetName = usernames[usernames.length-1];
					console.log("Non-retweet: " + jsondata[i].text + "\n", "birthday person: " + birthdayTweetName + "\n");
					postTweet(birthdayTweetName);
					birthdayTweetName = '';
				}
			}
			else
			{
				console.log("Regular tweet with nothing tagged: " + jsondata[i].text + "\n", "tagged people: "+ usernames + "\n");
			}
		}
	}
}

function postTweet(name)
{	
	T.post('statuses/update', birthdayWish(name), tweeted);

	function tweeted(err, data, response)
	{
		if(err)
		{
			console.log(err);
		}
		else
		{
			console.log("Tweet posted : " + JSON.stringify(birthdayWish(name)));
		}
	}
}

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
	return param;
}

function isRetweet(data)
{
	return data.substr(0,2) == 'RT';
}

function isTaggedRetweet(data)
{
	return data.length>1;
}

function checkUserMentions(data)
{
	return data.length>0;
}

function followCountLimit(data)
{
	return data <=10000;
}


T.get('search/tweets', birthdayParams, getTweet);



// var geoparams = 
// {
// 	place_id: '96683cc9126741d1'
// }

// function getLocation(err,data,response)
// {
// 	console.log(JSON.stringify(data.bounding_box.coordinates));
// }

// T.get('geo/id/:place_id',geoparams, getLocation);



// [[-179.231086,13.182335],[-179.231086,71.434357],[179.859685,71.434357],[179.859685,13.182335],[-179.231086,13.182335]] USA Bounding Box