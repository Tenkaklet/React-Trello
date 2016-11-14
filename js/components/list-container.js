import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';

export default class ListContainer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            cardArray: ['Hello', 'Goodbye', 'Bonjour']
        };
        
        this.handleAddCard = this.handleAddCard.bind(this);
    }

    handleAddCard (newCardText) {
        const newCardArray = [ ...this.state.cardArray, newCardText ];
        this.setState({ cardArray: newCardArray });
    }

    render () {
        return (
            <List cards={this.state.cardArray} handleAddCard={this.handleAddCard} />
        );
    }
}