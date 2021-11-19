import React from 'react'
import './CloseWindow.css'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { useNavigate } from "react-router-dom";

const CloseWindow = ({
    goto
}) => {

    let navigate = useNavigate();

    function handleClick() {
        navigate(goto)
    }

    
    return (
            <button className="close-button" onClick={handleClick}>
                < IoIosCloseCircleOutline className="closing-tag"/>
            </button>
    )
}

export default CloseWindow