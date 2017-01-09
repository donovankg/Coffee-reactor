// const Twitter = require('twitter');
import React, {Component} from 'react';
import Twitter from 'twitter';


  // const Twitter = require('twitter');



  const client = new Twitter({
    consumer_key: 'zRTPRT9CWA8GVw0ZSmBmafWl3',
    consumer_secret: 'aZE1nBzJ2ukePwkEygocQ3DRsJ4K6kamNvj6EdsrzhQ3ubuq30',
    access_token_key: '817107541037551618-JlaRvEaZxdQsSTHCnUye9vTDQm8zStZ',
    access_token_secret: 'H7PjP0us9UneJuLgoBFyNxFI0QbR8vmRRDE5gBKJqRDNX'
  });


  var params = {screen_name: 'starwars'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets[0]);
    }
  });



  class TwitterFeed extends Component {


    render() {
        return (
          <p> twitter feed < /p>
        );
    }


}


export default TwitterFeed;
