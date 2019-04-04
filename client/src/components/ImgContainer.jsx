import React, { Component } from 'react';
import InstaImg from './InstaImg';

class ImgContainer extends Component{
    constructor(props){
        super(props);
    }
    

    render() {
        console.log(this.props.cardBg);
        const imgArr = this.props.array.map( (url, i) => {
            return <InstaImg index={i} remove={this.props.remove} cardStyle={this.props.cardStyle} imgurl={url} />
        });
        return (
            <div className="img-container">
                {imgArr}
            </div>
        );
    }
}

export default ImgContainer;