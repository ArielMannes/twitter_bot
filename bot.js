console.log('The bot is starting...');

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

var search_params = {
	q: 'spacex',
	count:7
}
var tweet = {
	status: ' Hello twitter! #node.js_bot'
}
T.get('search/tweets',search_params, gotData);
T.post('statuses/update', tweet, tweeted);


function tweeted(err, data, response){
	console.log(data);
};

function gotData(err, data, response){
	var tweets = data.statuses;
	for (var i = 0;i < tweets.length;i++){
			console.log(tweets[i].text);
	}
};