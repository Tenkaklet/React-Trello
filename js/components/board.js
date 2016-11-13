import React from 'react';
import ListContainer from './list-container';

export default function Board (props) {

    return (
        <div className="Board">
            <h1>{props.title}</h1>
            <ListContainer name="List-Container"/>
        </div>
    );
}