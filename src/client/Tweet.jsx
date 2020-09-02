import React from 'react';
import ReactDOM from 'react-dom';


import User from 'User'

export default class Tweet extends React.Component {

  render() {
    return (
      <div>
      <User user ={this.props.tweet.user}/>


      </div>
    );
  }
}