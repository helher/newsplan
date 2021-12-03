import React from 'react'
import './CloseWindow.css'
import { IoIosCloseCircleOutline } from 'react-icons/io'

const CloseWindow = ({
        closeAction
    }) => {
    
    
    return (
            <button className="close-button">
                < IoIosCloseCircleOutline className="closing-tag" onClick={closeAction}/>
            </button>
    )
}

export default CloseWindow