import React, { useState, useEffect } from "react";
import Parse from "parse";
import { List } from "antd";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { Button } from "@material-ui/core";

//Styles
import "./JobList.css";

function JobList({jobListResult}) {
 
  return (
    <div>
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
              <h6>Planned</h6>
              <IoMdArrowDropdownCircle className="dropdown-icon" />
            </div>
            <div className="status-text"></div>
            <div className="approval-button">
              <Button variant="contained" disabled>
                x
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default JobList;
