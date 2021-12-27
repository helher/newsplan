import React, { useState, useEffect } from "react";
import Parse from "parse";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import "./AssignWorkload.css";

function AssignWorkload({workload, setWorkload}) {
  const [readResults, setReadResults] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const durationArray = [];

  const readWorkLoad = async function () {
    let query = new Parse.Query("Workload");
    try {
      let workload = await query.find();
      workload.forEach((workload) => {
        durationArray.push(workload.get("duration"));
      });
      console.log("Durations parsed from the database",durationArray);
      setReadResults(durationArray);
      return true;
    } catch (error) {
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  return (
    <div>
      <div className="section-employee" onClick={readWorkLoad} >
      <h5>Workload</h5>
      <div className="employee-dropdown-btn" onClick={() => setIsActive(!isActive)}>
        {!workload ? (<p>Select</p>) : 
        <p className="selected-employee">{workload}</p>}
        <div className="space"></div>
          <IoMdArrowDropdownCircle className="dropdown-icon" />
        </div>
        {isActive && (
          <div className="employee-dropdown-content">
            {readResults.map((workload) => (
              <div
                onClick={(e) => {
                  setWorkload(workload);
                  setIsActive(false);
                }}
                className="dropdown-item"
              >
                <h6>{workload}</h6>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AssignWorkload;
