import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Top from './components/Top';
import Home from './components/Home'

function checkCookie(cookie){
  if(cookie){
    return cookie;
  }else{
    return false;
  }
}

class App extends Component {
  constructor(){
    super();
    this.cookie = document.cookie;
    this.checkCookie = checkCookie(this.cookie);
    this.state = {
      name: '',
      cardStyle: 'card',
      bgColor: 'dark',
      textColor: 'name--light',
      caption: '',
      captionColor: 'caption--light',
      topTheme: 'top-nav--dark',
      settingText: 'settings--text--light',
      settingBtn: 'settings--btn--dark',
      settingInpt: 'settings--input--dark',
      download: 'settings--link--dark',
      isShadow: 0,
      setCaption: this.setCaption,
      setBgColor: this.bgColor,
      setShadow: this.setShadow,
      setCardColor: this.cardColor,
      setName: this.setName,
    }
  }

  componentDidMount(){
    if(document.cookie.includes('name=')){
      this.setState( {name: document.cookie.split('name=')[1].split(';')[0].replace('%20', ' ') });
    }else{
      this.setState( {name: 'You name here' });
    }
  }

  setName = (event) => {
    this.setState( {name: event.target.value} );
  }

  setCaption = (event) => {
    this.setState( {caption: event.target.value} );
  }

  setShadow = () => {
    if(this.state.isShadow === 0){
      this.setState( {cardStyle: this.state.cardStyle + ' shadow--dark', isShadow: 1} );
    }else if(this.state.isShadow === 1){
      this.setState( {cardStyle: this.state.cardStyle.replace('shadow--dark', 'shadow--light'), isShadow: 2} );
    }else if(this.state.isShadow === 2){
      this.setState( {cardStyle: this.state.cardStyle.replace('shadow--light', ''), isShadow: 0} );
    }
  }

  bgColor = () => {
    if(this.state.bgColor === 'dark'){
      this.setState( {
        bgColor: 'light',
        textColor: 'name--dark',
        topTheme: 'top-nav--light',
        captionColor: 'caption--dark',
        settingText: 'settings--text--dark',
        settingBtn: 'settings--btn--light',
        settingInpt: 'settings--input--light',
        download: 'settings--link--light',
      });
    }else{
      this.setState( {
        bgColor: 'dark',
        textColor: 'name--light',
        topTheme: 'top-nav--dark',
        captionColor: 'caption--light',
        settingText: 'settings--text--light',
        settingBtn: 'settings--btn--dark',
        settingInpt: 'settings--input--dark',
        download: 'settings--link--dark',
      });
    }
  }

  setCookie = () => {

  }

  render() {
    if(!this.cookie){
      return (
          <Home className="login" />
      );
    }else if(this.cookie.includes('token')){
      return (
        <div>
          <Top state={this.state} download={this.state.download} settingInpt={this.state.settingInpt} settingBtn={this.state.settingBtn} settingText={this.state.settingText} name={this.state.name} setName={this.setName} topTheme={this.state.topTheme} className="top-container" setCaption={this.state.setCaption} caption={this.state.caption} bgColor={this.state.setBgColor} cardColor={this.state.setCardColor} setShadow={this.state.setShadow} />
          <hr></hr>
          <Main state={this.state} />
        </div>
      );
    }
  }
}

export default App;
