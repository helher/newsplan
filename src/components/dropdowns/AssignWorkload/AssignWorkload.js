import React, { useState, useEffect } from 'react';
import './AssignWorkload.css';
import { IoMdArrowDropdownCircle } from 'react-icons/io'
import Parse from 'parse';


function AssignWorkload({selectedWorkload, setSelectedWorkload}) {

    const [isActive, setIsActive] = useState(false)


        const workload = Parse.Object.extend("Workload"); 
        const query = new Parse.Query(workload); 
        const options = Array.from(query.get("duration")); 
        console.log(options)


    return (
        <div className = "workload-dropdown">
            <h5>Workload</h5>
            <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
                    {!selectedWorkload && (<p>Select</p>)}
                    <div className="selected-employee">{selectedWorkload}</div>
                    <div className="space"></div>
                    <IoMdArrowDropdownCircle className="dropdown-icon"/>
                </div>
                {isActive && (
                    <div className="dropdown-content">
                        {options.map((option) => ( 
                            <div
                                onClick={(e) => {
                                    setSelectedWorkload(option)
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

export default AssignWorkload
