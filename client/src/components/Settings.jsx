import React, { Component } from 'react';

class Settings extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div className="settings">
          <button className={this.props.settingBtn} onClick={this.props.setShadow}>Shadow</button>
          <button className={this.props.settingBtn} onClick={this.props.bgColor}>Dark/Light</button>
          <div>
            <p className={this.props.settingText}>Add Caption</p>
            <input className={this.props.settingInpt} value={this.props.caption} onChange={event => this.props.setCaption(event)}></input>
          </div>
          <div>
              <p className={this.props.settingText}>Change name</p>
              <input className={this.props.settingInpt} value={this.props.name} onChange={event => this.props.setName(event)}></input>
          </div>
        </div>
        );
    }
}

export default Settings;