import React from 'react'
import './Statusbar.css';

const Statusbar = ({
        color,
        width
    }) => {


    function CW(props) {
        return (
            <div className="cw" style={{backgroundColor: props.color, width: props.width}}>{props.children}</div>
            )
        }

    return(
        <div className = "bar">
            <CW color={color} width={width}></CW>
        </div>
    )
}

export default Statusbar

