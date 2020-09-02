
import React from 'react';
import ReactDOM from 'react-dom';

export default class Nav extends React.Component {

  render() {
    return (
      <div>
      <nav>
          <a href="/">Tweets</a> |
          <a href="/">Tweets & Replies</a> |
          <a href="/">Media</a> |
          <a href="/">Likes</a>
        </nav>


      </div>
    );
  }
}