import React from 'react'
import './IdLabel.css'


const IdLabel = ({
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

export default IdLabel