import React, { useState, useEffect } from 'react';
import { IoMdArrowDropdownCircle } from 'react-icons/io'; 
import './DropdownLength.css'; 
import Parse from 'parse'; 



function DropdownLength({length, setLength}) {

const [isActive, setIsActive] = useState(false)
const [readResults, setReadResults] = useState([])
let lengthOptions = []

useEffect(() => {
    readWorkload();
}, []);

useEffect(() => {}, [readResults]);

const readWorkload = async function () {
    let query = new Parse.Query("Length");
    let lengthOption = await query.find();

    try {
        lengthOption.forEach((lengthOption) => {
        lengthOptions.push(lengthOption.get("words"));
        });

    setReadResults(lengthOptions);
    return true; 
}catch (error) {
    alert(`Error! ${error.message}`);
    return false;
}
}


    return (
        <div className="dropdown">
        <h5>Length</h5>
        <div className="dropdown-select">
            <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
                {!length && (<p>Select</p>)}
                <div className="selected-length">{length}</div>
                <div className="space"></div>
                <IoMdArrowDropdownCircle className="dropdown-icon"/>
            </div>
            {isActive && (
            <div className="dropdown-content">
            {readResults.map((lengthOption) => (
                <div
                    onClick={(e) => {
                    setLength(lengthOption);
                    setIsActive(false);
                    }}
                    className="dropdown-item"
                >
                    <h6>{lengthOption}</h6>
                </div>
                ))}
            </div>
            )}
        </div>
    </div>
    )
}

export default DropdownLength
