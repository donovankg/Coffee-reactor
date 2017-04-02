
// https://github.com/andrewsuzuki/react-twitter-widgets
// https://www.npmjs.com/package/react-twitter-widgets


import React, {Component} from 'react';
import { Timeline } from 'react-twitter-widgets'


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
          }} />

        );
    }
}


export default TwitterFeed;
