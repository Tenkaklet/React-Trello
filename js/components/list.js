import React from 'react';

import Card from './card';

export default class List extends React.Component {

    constructor(props) {
        super(props);
    }

    onAddSubmit (event) {
        event.preventDefault();
        // include validator here, e.g.
        if (this._cardText.value.length < 3) return;

        this.props.handleAddCard(this._cardText.value);
        this._cardText.value = '';
    }

    render () {

        return (
            <div className="list">
                {this.props.cards.map((card, index) => <Card key={index} text={card} />)}
                <form onSubmit={this.onAddSubmit.bind(this)}>
                    <input type="text" ref={ref => this._cardText = ref} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}


