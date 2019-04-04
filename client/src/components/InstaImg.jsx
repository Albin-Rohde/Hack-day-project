import React, { Component } from 'react';


class InstaImg extends Component{
    constructor(props){
        super(props);
        this.state = {
            removeBtn: 'btn--remove-img--hidden',
            imgStyle: 'insta-img-item--show',
            showBtn: this.showBtn,
            hideBtn: this.hideBtn,
        }
    }

    showBtn = () => {
        this.setState( {removeBtn: 'btn--remove-img--show', imgStyle: 'insta-img-item--hidden'} );

    }

    hideBtn = () => {
        this.setState( {removeBtn: 'btn--remove-img--hidden', imgStyle: 'insta-img-item--show'} );
    }

    render(){
        return (
            <div onMouseOver={this.state.showBtn} onMouseOut={this.state.hideBtn} className={this.props.cardStyle}>
                <img className={this.state.imgStyle} alt="insta img" src={this.props.imgurl}></img>
                <button className={this.state.removeBtn} onClick={ () => this.props.remove(this.props.index)}>Remove</button>
            </div>
        );
    }

}


export default InstaImg;