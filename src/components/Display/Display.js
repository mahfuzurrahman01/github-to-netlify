import React from 'react';
import "./Display.css"
const Display = (props) => {
    console.log(props)
    return (
        <div className='card'>
            <h4>{props.name}</h4>
            <p>{props.title}</p>
            <p>{props.content}</p>
        </div>
    );
};

export default Display;