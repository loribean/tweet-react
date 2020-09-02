import ReactDOM from 'react-dom';
import React from 'react'

import tweets from 'tweets'
import Tweet from 'Tweet'
import Nav from 'Nav';

class App extends React.Component {
  render() {
    const listOfItems = tweets.tweets;
    const list = listOfItems.map((item)=>{
        return(
            <li>
            <Tweet tweet={item} />
            <p> {item.text}</p>
            <p>Favourites{item.favourites_count}</p>
            <p>Retweets{item.retweet_count}</p>
             </li>)

            })

    return (
      <div>
        <Nav />
        <ul>{list}</ul>
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );