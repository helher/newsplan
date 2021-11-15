import React from 'react';
import './AddJobButton.css';
import { useNavigate } from 'react-router';
import  { IoIosAddCircleOutline } from 'react-icons/io'

const AddJobButton = ({
    text,
    goto
}) => {

    let navigate = useNavigate();

    function handleClick() {
        navigate(goto)
    }

    return (
        <div>
            <button className="addjob-iconbtn" onClick={handleClick}>
                <div class="button-text">
                <IoIosAddCircleOutline className="icon"/>{text}
                </div>
            </button>
        </div>
    
    )
}

export default AddJobButton;