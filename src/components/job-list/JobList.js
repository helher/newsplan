import React from "react";
import { List } from "antd";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { Button } from "@material-ui/core";

//Styles
import "./JobList.css";

function JobList(jobListResult) {
  return (
    <div>
      {jobListResult !== null &&
        jobListResult !== undefined &&
        jobListResult.length > 0 && (
          <List
            dataSource={jobListResult}
            renderItem={(job) => (
              <List.Item>
                  <p>TEST TEST TEST</p>
                {/* <div className="job-container">
                  <div className="employee-info-and-image">
                    <div className="job-image-container">
                      <img
                        className="image-employee-job"
                        src={job.user.get("userImage").url()}
                        alt="employee image"
                      />
                    </div>
                    <p>
                      {job.employee},{job.workload}
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
                </div> */}
              </List.Item>
            )}
          />
        )}
    </div>
  );
}

export default JobList;

{
  /* <div className="wrapper">
        <div className="employee-info-and-avatar">
          <div className="comment-image-container">
            <img
              className="image-user-comment"
              src={item.get("userImage").url()}
              alt="comment author"
            />
          </div>
          <div className="selected-employee-info">Journalist, Heh, 1/2 day</div>
        </div>
        <br></br>
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
      </div>  */
}
