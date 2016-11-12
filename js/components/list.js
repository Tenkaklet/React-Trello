import React from 'react';

import Card from './card';

export default class List extends React.Component {

    constructor(props) {
        super(props);
    }

    onAddInputChanged () {
        console.log('adding input');
    }

    onAddSubmit (event) {
        event.preventDefault();
        console.log('form submitted');
    }

    render () {
        return (
            <div className="list">
                <h3>{this.props.title}</h3>
                <Card text="lorem Ipsum One" />
                <Card text="Lorem Ipsum Two" />
                <Card text="Lorem Ipsum Three" />
                <form onSubmit={this.onAddSubmit}>
                    <input type="text" onChange={this.onAddInputChanged}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}