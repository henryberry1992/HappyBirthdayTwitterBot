var Twit = require('twit');
var config = require('./config');
var wishes = require('./birthdaywishes');
var userdb = require('./userdb');
var T = new Twit(config.API);

console.log("Starting request");

var birthdayParams = 
{
	q: 'happy birthday OR HAPPY BIRTHDAY OR Happy Birthday OR HBD OR hbd OR birthday girl OR birthday boy',
	lang: 'en',
	count: 1
}

function getTweet(err,data,response)
{
	T.get('search/tweets', birthdayParams, tweetObtained);
	
	function tweetObtained(err,data,response)
	{
		var jsondata = data.statuses;
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
				if(checkUserMentions(jsondata[i].entities.user_mentions))
				{
					usernames = jsondata[i].entities.user_mentions.map(function(a) 
						{
							return a.screen_name;
						});

					if(isRetweet(jsondata[i].text) && isTaggedRetweet(usernames))
					{
						birthdayTweetName += usernames[1];
						console.log("Wisher and birthday person: " + jsondata[i].text + "\n", "wisher: " + usernames[0] + "\n","Birthday person:" + birthdayTweetName + "\n");
						userdb.checkUser(birthdayTweetName,postTweet);
						console.log("NEW USER WISHED AND ADDED INTO DATABASE.");
						birthdayTweetName = '';
					}
					else if(isRetweet(jsondata[i].text) && !(isTaggedRetweet(usernames)))
					{
						console.log("Only wisher retweet: " + jsondata[i].text + "\n", "Wisher: " + usernames + "\n");
						return;
					}
					else if(!(isRetweet(jsondata[i].text)))
					{
						birthdayTweetName = usernames[0];
						console.log("Non-retweet: " + jsondata[i].text + "\n", "birthday person: " + birthdayTweetName + "\n");
						userdb.checkUser(birthdayTweetName,postTweet);
						console.log("NEW USER WISHED AND ADDED INTO DATABASE.");
						birthdayTweetName = '';
					}
				}
				else
				{
					console.log("Regular tweet with nothing tagged: " + jsondata[i].text + "\n", "tagged people: "+ usernames + "\n");
					return;
				}
			}
		}
	}
}

function postTweet(name)
{	
	T.post('statuses/update', wishes.birthdayWish(name), tweeted);
	function tweeted(err, data, response)
	{
		if(err)
		{
			console.log(err);
		}
		else
		{
			console.log("Tweet posted : " + JSON.stringify(wishes.birthdayWish(name)));

		}
	}
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

// function followCountLimit(data)
// {
// 	return data <=10000;
// }
// if(followCountLimit(jsondata[i].user.followers_count) && checkUserMentions(jsondata[i].entities.user_mentions))

getTweet(); 

setInterval(getTweet, 1000*60*6);



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