import React, { useState } from 'react';
import { IoMdArrowDropdownCircle } from 'react-icons/io'; 
import './DropdownLength.css'; 


function DropdownLength({length, setLength}) {

const [isActive, setIsActive] = useState(false)
const options = ['0-1000 words', '2000-3000 words', '30000-4000 words', '4000-5000 words']

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
                    {options.map((option) => ( 
                        <div 
                            onClick={(e) => {
                                setLength(option)
                                setIsActive(false)
                            }}
                            className="dropdown-item">
                                <h6>{option}</h6>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>
    )
}

export default DropdownLength
