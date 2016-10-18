var mysql = require('mysql');
var connection = mysql.createConnection
({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'twitter_users'
});

module.exports =
{
	checkUser: function(screen_name,callback)
	{
		var query = "SELECT 1 FROM twitter_users WHERE screen_name = '" + screen_name + "' ORDER BY screen_name LIMIT 1";
		connection.query(query, function(err,results)
		{
			if(err)
			{
				console.error("Error while checking user table: " + err);
				return;
			}
			if(results.length >0)
			{
				console.log('User already wished.');
				return;
			}
			else
			{
				var query = 'INSERT INTO twitter_users ' + 'SET screen_name = ?';
				connection.query(query, [screen_name], function(err,results)
				{
					if(err)
					{
						console.error("Error while inserting name: " + err);
						return;
					}
					else
					{
						console.log("Inserting user into database.");
						console.log("User name: " + screen_name);
						callback(screen_name);
					}
				});
			}
		});
	}
}

