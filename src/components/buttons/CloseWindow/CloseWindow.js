import React from 'react'
import './CloseWindow.css'
import { IoIosCloseCircleOutline } from 'react-icons/io'

function CloseWindow(props) {
    
    return (
            <button className="close-button">
                < IoIosCloseCircleOutline className="closing-tag" onClick={() => props.setTrigger(false)}/>
            </button>
    )
}

export default CloseWindow