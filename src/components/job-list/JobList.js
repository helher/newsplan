import React, { useState, useEffect } from "react";
import Parse from "parse";
import { List } from "antd";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { Button } from "@material-ui/core";

//Styles
import "./JobList.css";
import DiscardJob from "../buttons/DiscardButtonSmall/DiscardButtonSmall";

function JobList({jobListResult}) {
 
  return (
    <div className="job-list">
      {jobListResult.map((job) => (
        <div className="assigned-job-container">
          <div className="employee-info-and-image">
            <div className="job-image-container">
              <img
                className="image-user-job"
                src={job.get("user").get("userimage").url()}
                alt="employee image"
              />
            </div>
            <p>
              {job.get("employee")}, {job.get("workload")}
            </p>
          </div>
          <div className="joblist-container">
            <br></br>
            <div className="status-text">Status</div>
            <div className="status-dropdown-btn">
            <p className="status-text">Planned</p>
              <IoMdArrowDropdownCircle className="dropdown-icon" />
            </div>
            
            < DiscardJob />
            </div>
          </div>
      ))}
    </div>
  )
}

export default JobList;
