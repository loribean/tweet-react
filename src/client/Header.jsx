

import React from 'react';
import ReactDOM from 'react-dom';






export default class Header extends React.Component {

  render() {
    return (
      <div>
      <p>{this.props.name}</p>

      </div>
    );
  }
}