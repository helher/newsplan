import React from 'react'
import './Statusbar.css';

const Statusbar = ({
    color,
    width
}) => {


    function Colors(props) {
        return (
            <div className="colors" style={{backgroundColor: props.color}}>{props.children}</div>
            );
        }

    function Width(props) {
        return (
            <div className="width" style={{width: props.width}}>{props.children}</div>
            );
        }


    return(
        <div className = "bar">
            <Colors color={color}></Colors>
            <Width width={width}></Width>
        </div>
    )
}

export default Statusbar

