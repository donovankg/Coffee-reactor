// https://github.com/andrewsuzuki/react-twitter-widgets
// https://www.npmjs.com/package/react-twitter-widgets

// const Twitter = require('twitter');
import React, {Component} from 'react';
// import Twitter from 'twitter';
import { Timeline } from 'react-twitter-widgets'

  // const Twitter = require('twitter');



  // const client = new Twitter({
  //   consumer_key: 'zRTPRT9CWA8GVw0ZSmBmafWl3',
  //   consumer_secret: 'aZE1nBzJ2ukePwkEygocQ3DRsJ4K6kamNvj6EdsrzhQ3ubuq30',
  //   access_token_key: '817107541037551618-JlaRvEaZxdQsSTHCnUye9vTDQm8zStZ',
  //   access_token_secret: 'H7PjP0us9UneJuLgoBFyNxFI0QbR8vmRRDE5gBKJqRDNX'
  // });


  // var params = {screen_name: 'starwars'};
  // client.get('statuses/user_timeline', params, function(error, tweets, response) {
  //   if (!error) {
  //     console.log(tweets[0]);
  //   }
  // });
  //
  //





  class TwitterFeed extends Component {


    render() {
        return (
          <Timeline dataSource={{
            sourceType: 'profile',
            screenName: 'starwars'
          }}
          options={{
            username: 'TwitterDev',
            height: '700'
          }} onLoad={() => console.log('Timeline is loaded!')} />
        );
    }


}


export default TwitterFeed;
