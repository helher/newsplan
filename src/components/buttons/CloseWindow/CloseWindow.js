import React from 'react'
import './CloseWindow.css'
import { IoIosCloseCircleOutline } from 'react-icons/io'

const CloseWindow = ({
        setTrigger
    }) => {
    
        function handleClickPopup() {
            setTrigger(false)
        }
    
    return (
            <button className="close-button">
                < IoIosCloseCircleOutline className="closing-tag" onClick={handleClickPopup}/>
            </button>
    )
}

export default CloseWindow