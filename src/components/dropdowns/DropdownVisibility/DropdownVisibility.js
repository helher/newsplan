import React, { useState } from 'react';
import './DropdownVisibility.css';
import { IoMdArrowDropdownCircle } from 'react-icons/io'


function DropdownVisibility ({visibility, setVisibility}) {
    const [isActive, setIsActive] = useState(false)
    const options = ['Me Only', 'Editors and myself', 'Everyone']

    return (
        <div className="dropdown">
            <h5>Visibility</h5>
            <div className="dropdown-select">
                <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
                    {!visibility && (<p>Select</p>)}
                    <p>{visibility}</p>
                    <div className="space"></div>
                    <IoMdArrowDropdownCircle className="dropdown-icon"/>
                </div>
                {isActive && (
                    <div className="dropdown-content">
                        {options.map((option) => ( 
                            <div 
                                onClick={(e) => {
                                    setVisibility(option)
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

export default DropdownVisibility;
