import React from 'react';

import Card from './card';

export default class List extends React.Component {

    constructor(props) {
        super(props);
    }



    handleChange (e) {
        const input = e.target.value;
        this.props.changeTitle(input);
    }
    onAddSubmit (event) {
        event.preventDefault();
        const input = event.target.value;
        this.props.changeTitle(input);
    }

    render () {
        return (
            <div className="list">
                <h3>{this.props.title}</h3>
                <Card text="lorem Ipsum One" />
                <Card text="Lorem Ipsum Two" />
                <Card text="Lorem Ipsum Three" />
                <form onSubmit={this.onAddSubmit.bind(this)}>
                    <input type="text" onChange={this.handleChange.bind(this)}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}