import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets'
import Tweet from 'Tweet'

class App extends React.Component {
  render() {

    const listOfItems = tweets.tweets;
    const items = listOfItems.map((item)=>{
        return(
            <li><Tweet tweet={item} /></li>)
    })
    return (
      <div>
        <ul>{items}</ul>
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );//