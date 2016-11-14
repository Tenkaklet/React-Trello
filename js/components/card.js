import React from 'react';


export default class Card extends React.Component {
    constructor () {
        super();
    }
    render () {

        return (
            <ul>
                <li>{this.props.text}</li>
            </ul>
        );
    }
}