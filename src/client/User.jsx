import React from 'react';
import ReactDOM from 'react-dom';



export default class User extends React.Component {

  render() {
    return (
      <div>

      <p>{this.props.user.name}</p>
      <p>{this.props.user.time}</p>





      </div>
    );
  }
}