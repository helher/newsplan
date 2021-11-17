import React from 'react';
import './PrimaryButton.css';
import { useNavigate } from 'react-router';

const PrimaryButton = ({
    text,
    goto
}) => {

    let navigate = useNavigate();

    function handleClick() {
        navigate(goto)
    }

    return (
        <div>
            <button className="primary-btn" onClick={handleClick}>
                <div class="button-text-white">{text}
                </div>
            </button>
        </div>
    
    )
}

export default PrimaryButton;