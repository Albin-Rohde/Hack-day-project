import React, { Component } from 'react';

class Caption extends Component{
  constructor(props){
      super(props)
  }
  render(){
      return(
          <div className="caption-container">
              <p className={this.props.state.captionColor} >{this.props.state.caption}</p>
          </div>
      )
  }
}

export default Caption;