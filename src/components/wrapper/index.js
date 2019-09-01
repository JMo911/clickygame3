import React from 'react';
import './style.css';

class Wrapper extends React.Component {
    render() {
        return <div class='wrapper'>Hello, {this.props.name}</div>
    }
}

export default Wrapper;