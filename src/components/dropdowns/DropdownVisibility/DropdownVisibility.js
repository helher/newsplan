import React, { useState } from 'react';
import './DropdownVisibility.css';
import { IoMdArrowDropdownCircle } from 'react-icons/io'


function DropdownVisibility ({visibilitySelected, setVisibilitySelected}) {
    const [isActive, setIsActive] = useState(false)
    const options = ['Me Only', 'Editors and myself', 'Everyone']

    return (
        <div className="dropdown">
            <h5>Visibility</h5>
            <div className="dropdown-select">
                <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
                    <p>{visibilitySelected}</p>
                    <div className="space"></div>
                    <IoMdArrowDropdownCircle className="dropdown-icon"/>
                </div>
                {isActive && (
                    <div className="dropdown-content">
                        {options.map(option => ( 
                            <div 
                                onClick={(e) => {
                                    setVisibilitySelected(option)
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
