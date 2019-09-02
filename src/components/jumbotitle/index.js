import React from 'react';
import './style.css'

class JumboTitle extends React.Component {
    render() {
    return (
        <jumboTitle>
           <div className="jumbotron col-sm-10 offset-sm-1">
                <div className="container">
                    <h1 className="display-4">{this.props.children}</h1>
                    <p className="lead">{this.props.descrip}</p>
                </div>
            </div> 
        </jumboTitle>
    )
    }
};

export default JumboTitle;