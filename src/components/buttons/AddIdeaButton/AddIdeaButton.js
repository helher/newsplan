import React from 'react';
import './AddIdeaButton.css';
import { IoIosAddCircleOutline } from 'react-icons/io'

const AddIdeaButton = ({
    text,
    setPopupNew
}) => {

    function handleClickPopup() {
        console.log("bt clicked!")
        setPopupNew(true)
    }

    return (
        <button className="addidea-iconbtn" onClick={handleClickPopup}  >
            <div class="button-text-white">
                <IoIosAddCircleOutline className="addidea-icon"/>{text}
            </div>
        </button>
    )
}

export default AddIdeaButton;

