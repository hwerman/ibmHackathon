import React, { Component } from 'react';

class Bosses extends Component{

componentDidMount(){
  this.props.getBossRatings();
}

  render(){
    console.log('props', this.props);
    return(
      <div>
        {this.props.getBossRatings}
      </div>
    )
  }
}

export default Bosses;
