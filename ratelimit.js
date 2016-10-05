var Twit = require('twit');
var config = require('./config');
var T = new Twit(config.API);

console.log("Starting request");
function getTweets(err,data,response)
{
	if(err)
	{
		console.log(err);
	}
	console.log(data);
}

T.get('application/rate_limit_status', getTweets);