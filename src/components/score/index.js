import React from 'react';
import './style.css';

class Score extends React.Component {
    render() {
        return (
            <div className="alert alert-info col-sm-10 offset-sm-1" role="alert" style={this.props.style}>
                Score: {this.props.score} Top Score: {this.props.topScore} 
            </div>
        )
    }
}

export default Score;