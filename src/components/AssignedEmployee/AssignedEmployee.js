import React, { useState } from 'react'; 
import './AssignedEmployee.css'; 
import Avatar from "@material-ui/core/Avatar";
import Parse from 'parse'; 
import { IoMdArrowDropdownCircle } from 'react-icons/io'



function AssignedEmployee({status, setStatus}) {


    //need to parse: 
        //selected and assigned user.name
        //selected and assigned user.img 
        //selected and assigned user.role
        //selected workload 


        const user = Parse.User.current(); 

        const [isActive, setIsActive] = useState(false)
        const options = ['Planned']


        return (
            <div className="status-dropdown" >
                <div> 
                <h6>Journalist, HeH, 1/2 day</h6>
                <br></br>
                <div>
                <h5>Status</h5>
                </div>
                </div>
                <br></br>
                <div className="status-dropdown-select">
                    <br></br>
                    <div className="status-dropdown-btn" onClick={() => setIsActive(!isActive)}>
                        {!status && (<p>Planned</p>)}
                        <div className="selected-status">{status}</div>
                        <div className="space"></div>
                        <IoMdArrowDropdownCircle className="dropdown-icon"/>
                    </div>
                    {isActive && (
                        <div className="status-dropdown-content">
                            {options.map((option) => ( 
                                <div 
                                    onClick={(e) => {
                                        setStatus(option)
                                        setIsActive(false)
                                    }}
                                    className="status-dropdown-item">
                                        <h6>{option}</h6>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        )
}



export default AssignedEmployee
