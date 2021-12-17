import React, { useState } from "react";
import "./AssignEmployee.css";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import Parse from "parse";
import { List } from "antd";

function AssignEmployee({ selectedEmployee, setSelectedEmployee }) {
  const [readResults, setReadResults] = useState([]);
  const [isActive, setIsActive] = useState(false);
  
  const readEmployees = async function () {
    let query = new Parse.Query("User");
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
    <div className="employee-dropdown" onClick={readEmployees}>
      <h5>Employee</h5>
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
        {!selectedEmployee && <p>Select</p>}
        <div className="selected-employee">{selectedEmployee}</div>
        <div className="space"></div>
        <IoMdArrowDropdownCircle className="dropdown-icon" />
      </div>
      <div className="employee-dropdown-content">
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
                    <h6>{item.get("username")}, {(item.get("role"))}</h6>
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
