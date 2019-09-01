const React = require('react');

class Wrapper extends React.Component {
    render() {
        return <div>Hello, {this.props.name}</div>
    }
}

module.exports = Wrapper;