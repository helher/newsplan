import React, { useState, useEffect } from "react";
import "./AssignWorkload.css";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import Parse from "parse";
import { List } from "antd";

function AssignWorkload() {
  const [isActive, setIsActive] = useState(false);
  const [readResults, setReadResults] = useState([]);

  const readWorkload = async function () {
    let query = new Parse.Query("Workload");
    try {
      let employees = await query.find();

      setReadResults(employees);
      return true;
    } catch (error) {
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  return (
    <div className="workload-dropdown" onClick={readWorkload}>
      <h5>Employee</h5>
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
         <p>Select</p>
        <div className="space"></div>
        <IoMdArrowDropdownCircle className="dropdown-icon" />
      </div>
      <div className="dropdown-content">
        {isActive &&
          readResults !== null &&
          readResults !== undefined &&
          readResults.length > 0 && (
            <List
              dataSource={readResults}
              renderItem={(item) => (
                <List.Item>
                  <div
                    onClick={(e) => {
                      setIsActive(false);
                    }}
                    className="dropdown-item"
                  >
                    <h6>
                      {item.get("duration")}
                    </h6>
                  </div>
                </List.Item>
              )}
            />
          )}
      </div>
    </div>
  );
}

export default AssignWorkload;
