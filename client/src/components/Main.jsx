import React, { Component } from 'react';
import ImgContainer from './ImgContainer';
import Name from './Name';
import Caption from './Caption';

class Main extends Component{
    constructor(props){
      super(props);
      this.state = {
        imgUrl: [],
      }
    }

    remove = (n) => {
        this.state.imgUrl.splice(n,1)
        this.setState( {imgUrl: this.state.imgUrl })
    }

    async componentDidMount(){
        const token = document.cookie.split('token=')[1];
        const response = await fetch(`https://create-portfolio.herokuapp.com/api/getmedia/${token}`)
            .then(data => data.json());
        this.setState( {imgUrl: response.img} );
    }

    render(){
        return (
            <div className={this.props.state.bgColor}>
              <Name state={this.props.state} />
              <Caption state={this.props.state} />
              <center>
                <ImgContainer state={this.props.state} remove={this.remove} cardStyle={this.props.state.cardStyle} array={this.state.imgUrl} />
              </center>
            </div>
        );
    }
  }

  export default Main;