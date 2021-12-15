import React, { useState } from "react";
import "./AssignEmployee.css";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import Parse from "parse";
import { List } from "antd";

function AssignEmployee({ selectedEmployee, setSelectedEmployee }) {
  const options = ["ML", "Helena", "Aliz"];
  const [readResults, setReadResults] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const readEmployees = async function () {
    let query = new Parse.Query("User");
    try {
      let employees = await query.find();
      // Be aware that empty or invalid queries return as an empty array
      // Set results to state variable
      setReadResults(employees);
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  return (
    <div className="employee-dropdown" onClick={readEmployees}>
      <h5>Employee</h5>
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
        {!selectedEmployee && <p>Select</p>}
        <div className="selected-employee">{selectedEmployee}</div>
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
                    <h6>{item.get("username")}</h6>
                  </div>
                </List.Item>
            )}
          />
        )}
        </div>
    </div>
  );
}

export default AssignEmployee;
