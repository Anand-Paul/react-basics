import React, { Component } from 'react';

class Card extends Component {
    constructor(props){
        super();
        this.props = props;
    }
    
    render() {
      return (
        <div>
            <h1>{this.props.title}</h1>
        </div>
      );
    }
}

export default Card;