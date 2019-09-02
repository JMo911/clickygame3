import React from 'react';
import './style.css'

class Cards extends React.Component {
    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.image} alt={this.props.name}></img>
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text"></p>
                </div>
        </div>
        );
    }
}

export default Cards;