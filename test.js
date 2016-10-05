var Twit = require('twit');
var config = require('./config');
var T = new Twit(config.API);

console.log("Starting request");
function getTweets(err,data,response)
{
	for(var i =0; i<data.length; i++)
	{
		console.log(data[i].text);
	}
}

var params = 
{
	screen_name: 'BdayTweetBot',
	count: 2

}

T.get('statuses/user_timeline', params, getTweets);
