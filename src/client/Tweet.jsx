

import React from 'react';
import ReactDOM from 'react-dom';


import User from 'User'
import Text from 'Text'


export default class Tweet extends React.Component {


  render() {

    let info = {
        name: this.props.tweet.user.name,
        time: this.props.tweet.created_at,
        retweets: this.props.tweet.retweet_count
    }
    return (
      <div>
      <User user ={info}/>
      <Text post={this.props.tweet.text} />

      </div>
    );
  }
}