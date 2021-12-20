import React, { useState } from 'react'; 
import './AssignedJob.css'; 
import Avatar from "@material-ui/core/Avatar";
import Parse from 'parse'; 
import { IoMdArrowDropdownCircle } from 'react-icons/io'
import { List } from "antd";



function AssignedJob({jobResult}) {

        return (
          <div>
            {jobResult !== null &&
              jobResult !== undefined &&
              jobResult.length > 0 && (
                <List
                  dataSource={jobResult}
                  renderItem={(item) => (
                    <List.Item className="job_list">
                      <div className="job-container">
                        <div className="job">
                          <div className="job-image-container">
                            <img
                              className="-job-image-user-comment"
                              src={item.get("userImage").url()}
                              alt="employee-assignedJob-image"
                            />
                          </div>
                          <div className="status-dropdown">
                            <div>
                              <h6>
                                {item.get("role")}, {item.get("userName")},
                                {item.get("workload")}
                              </h6>
                              <div>
                                <h5>Status</h5>
                              </div>
                            </div>
                            <br></br>
                            <div className="status-dropdown-select">
                              <br></br>
                              <div className="status-dropdown-btn">
                                <p>Planned</p>
                                <div className="selected-status">
                                  Test, what is in here?
                                </div>
                                <div className="space"></div>
                                <IoMdArrowDropdownCircle className="dropdown-icon" />
                              </div>
                              <h6>planned</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List.Item>
                  )}
                />
              )}
          </div>
        );
}


export default AssignedJob
