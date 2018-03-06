console.log('The follow bot is starting...');
var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

//set up a user stream
var stream = T.stream('user');

//put a callBack to the event of follow.
stream.on('follow', followed);

function followed(eventMsg){
	var name = eventMsg.source.name;
	console.log('followed by: '+name);
	var screenName = eventMsg.source.screen_name;
	tweetIt('@'+screenName + '  Cheers mate!');
	
}






//setInterval(tweetIt, 1000*60);

function tweetIt(txt){
	var r = Math.floor(Math.random()*150);
	var tweet = {
			status: txt //'here is a random number' +r+ ' #node.js #bot'
		}
	T.post('statuses/update', tweet, tweeted);


	function tweeted(err, data, response){
		if(err){
			console.log('something went wrong');
		}
		else{
		console.log('post worked');
		}
	};
}