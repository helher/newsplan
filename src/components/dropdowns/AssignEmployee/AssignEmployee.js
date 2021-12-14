import React, { useState } from 'react';
import './AssignEmployee.css';
import { IoMdArrowDropdownCircle } from 'react-icons/io'; 
import Parse, { User } from 'parse';


function AssignEmployee({selectedEmployee, setSelectedEmployee}) {
    const options = ['ML', 'Helena', 'Aliz']
    const [isActive, setIsActive] = useState(false)

    return (
        <div className = "employee-dropdown">
            <h5>Employee</h5>
            <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
                    {!selectedEmployee && (<p>Select</p>)}
                    <div className="selected-employee">{selectedEmployee}</div>
                    <div className="space"></div>
                    <IoMdArrowDropdownCircle className="dropdown-icon"/>
                </div>
                {isActive && (
                    <div className="dropdown-content">
                        {options.map((option) => ( 
                            <div 
                                onClick={(e) => {
                                    setSelectedEmployee(option)
                                    setIsActive(false)
                                }}
                                className="dropdown-item">
                                    <h6>{option}</h6>
                            </div>
                        ))}
                    </div>
                )}
        </div>
    )
}

export default AssignEmployee
