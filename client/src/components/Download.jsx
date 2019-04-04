import React, { Component } from 'react';

class Download extends Component {
    constructor(props){
        super(props);
        this.state = {
            isDone: false 
        } 
    }
    getZip = async () => {
        this.setState( {isDone: true} )
        const html = document.querySelector('#root').innerHTML;
        await fetch('https://create-portfolio.herokuapp.com/api/posthtml', {
            method: 'POST',
            body: JSON.stringify( {text: html} ),
            headers: {
                'Content-type': 'application/json'
            }
        });
    }
    
    
    render(){
        console.log(this.state.isDone);
        if(!this.state.isDone){
            return (
                <div>
                    <button className={this.props.settingBtn} onClick={this.getZip}> Im done styling!</button> 
                </div>
                )
        }
        else{
            return (
                <div>
                    <a className={this.props.download} download href="https://create-portfolio.herokuapp.com/api/website">Download site</a>  
                </div>
            );
        }
    }
}


export default Download;
