//this bot posts a random number every minute

console.log('The bot is starting...');

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

setInterval(tweetIt, 1000*60);



function tweetIt(){
	var r = Math.floor(Math.random()*150);
	var tweet = {
			status: 'here is a random number' +r+ ' #node.js #bot'
		}
	T.post('statuses/update', tweet, tweeted);


	function tweeted(err, data, response){
		if(err){
			console.log('something went wrong');
		}
		else{
		console.log('It worked');
		}
	};
};


function searchInTwitter(){
	var search_params = {
		q: 'spacex',
		count:7
	}
	T.get('search/tweets',search_params, gotData);
};
function gotData(err, data, response){
	var tweets = data.statuses;
	for (var i = 0;i < tweets.length;i++){
			console.log(tweets[i].text);
	}
};