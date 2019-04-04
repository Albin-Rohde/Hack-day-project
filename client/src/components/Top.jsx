import React, { Component } from 'react';
import Download from './Download';
import Settings from './Settings';

class Top extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: document.cookie.split('name=')[1].split(';')[0].replace('%20', ' '),
        }
    }
    
    shadow = () => {
        this.setState( {shadow: 'card shadow'} )
    }

    render(){
        return (
        <div className={this.props.topTheme}>
          <Settings settingInpt={this.props.settingInpt} settingBtn={this.props.settingBtn} settingText={this.props.settingText} setName={this.props.setName} setCaption={this.props.setCaption} name={this.props.name} caption={this.props.caption} cardColor={this.props.cardColor} bgColor={this.props.bgColor} setShadow={this.props.setShadow} />
          <Download download={this.props.download} settingBtn={this.props.settingBtn}/> 
        </div>
        )
    }
}

export default Top;
