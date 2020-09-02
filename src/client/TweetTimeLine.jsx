import React from 'react';
import ReactDOM from 'react-dom';
import Tweet from 'Tweet'


class TwitterTimeLine extends React.Component {
  render() {
    let box = this.props.tweets.map((item)=>{
        return <Tweet tweet={item}/>
    })
    return (
      <div>
        {box}
      </div>
    );
  }
}

export default TwitterTimeLine;