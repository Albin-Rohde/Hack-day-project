import React, { Component } from 'react';

class Home extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
          <div className="home-content">
              <h1 className="home-heading">Create your perfect portfolio in 1 minute</h1>
              <p className="home-text">Are you ready for the experience?</p>
              <button onClick={initLogin} className="home-login">Start</button>
          </div>
        );
    }
}


async function initLogin(){
    window.location.href = 'https://create-portfolio.herokuapp.com/api/login';
  }

export default Home;