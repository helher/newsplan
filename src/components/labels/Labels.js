import React from 'react'
import './Labels.css'


const Labels = ({
        text,
        color
    }) => {

    function Colors(props) {
        return (
            <div className="colors" style={{backgroundColor: props.color}}>{props.children}</div>
            );
        }

    return (
        <Colors color={color}>{text}</Colors>
    )
}

export default Labels