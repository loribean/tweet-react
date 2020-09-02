import ReactDOM from 'react-dom';
import React from 'react'

import tweets from 'tweets'
import TweetTimeLine from 'TweetTimeLine'
import Nav from 'Nav';
import Header from 'Header'

class App extends React.Component {
  render() {

    return (
      <div>

        <Header name={tweets.tweets[0].user.name} />
        <Nav />
        <TweetTimeLine tweets={tweets.tweets} />


      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );