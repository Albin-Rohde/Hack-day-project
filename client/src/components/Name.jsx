import React, { Component } from 'react';

class Name extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="name-container">
                <p className={this.props.state.textColor}>{this.props.state.name}</p>
            </div>
        )
    }
}

export default Name;
