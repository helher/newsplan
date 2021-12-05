import React from 'react';
import './AddEmployeeButton.css';
import { IoIosAddCircleOutline } from 'react-icons/io'

const AddEmployeeButton = ({
    text
}) => {

    function handleClickPopup() {

    }

    return (
        <button className="addemployee-iconbtn" onClick={handleClickPopup}  >
            <div class="button-text-white">
                <IoIosAddCircleOutline className="addemployee-icon"/>{text}
            </div>
        </button>
    )
}

export default AddEmployeeButton;

