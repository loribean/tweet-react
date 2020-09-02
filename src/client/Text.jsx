import React from 'react';
import ReactDOM from 'react-dom';

class Text extends React.Component {
  render() {
    return (
      <div >
        <p>{this.props.post}</p>
      </div>
    );
  }
}

export default Text;