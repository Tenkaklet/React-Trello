import React from 'react';
import List from './list';

export default function Board (props) {

    return (
        <div className="Board">
            <h1>{props.title}</h1>
            <List title="List One" />
            <List title="List Dos" />
        </div>
    );
}