import React from 'react';
import ReactDOM from 'react-dom';



export default class Favourites extends React.Component {

  render() {
    return (
      <div>
      <p>Number of hearts: {this.props}</p>


      </div>
    );
  }
}