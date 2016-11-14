import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';

export default class ListContainer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            input: '',
            cardArray: []
        };
    }

    changeTitle (input) {
        this.setState({input});
    }
    // handlesubmit();
    render () {
        return (
            <List changeTitle={this.changeTitle.bind(this)} title={this.state.input} />
        );
    }
}