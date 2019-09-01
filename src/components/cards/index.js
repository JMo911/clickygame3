import React from 'react';
import './style.css'

class Cards extends React.Component {
    render() {
        return (
            <div class="card">
                <img class="card-img-top" src={this.props.image} alt={this.props.name}></img>
                <div class="card-body">
                    <h5 class="card-title">{this.props.name}</h5>
                    <p class="card-text"></p>
                </div>
        </div>
        );
    }
}

export default Cards;