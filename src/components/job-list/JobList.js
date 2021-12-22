import React, { useState } from 'react'; 
import './JobList.css'; 
import Avatar from "@material-ui/core/Avatar";
import Parse from 'parse'; 
import { IoMdArrowDropdownCircle } from 'react-icons/io'
import { Button } from '@material-ui/core';
import './../buttons/AddEmployeeButton/AddEmployeeButton'
import AddEmployeeButton from './../buttons/AddJobButton/AddJobButton';
import AddJobButton from './../buttons/AddJobButton/AddJobButton';


function JobList() {

    const user = Parse.User.current(); 

        return (
        <div className = "wrapper">
            <div className = "employee-info-and-avatar">
            <div style={{ display: "flex", padding: 10, size: 50 }}>
            <Avatar
            style={{border: "1px non black"
            , height: 24, width: 24 }}
            alt="Profile image"
            img src= {user.get("userimage").url()}
        />
</div>
            <div className = "selected-employee-info">Journalist, Heh, 1/2 day</div>
            </div>
            <br></br>
            <div className="joblist-container">
                <br></br>
                <div className = "status-text" >Status</div>
                <div className="status-dropdown-btn">
                    <h6>Planned</h6>
                    <IoMdArrowDropdownCircle className="dropdown-icon"/>
                        </div>
                        <div className = "status-text">
                        
                        </div>
                        <div className ="approval-button"> 
                            <Button 
                                variant = "contained"
                                disabled
                                >x</Button>
                    
            </div>
            </div> 
        </div>
        )


}



export default JobList
