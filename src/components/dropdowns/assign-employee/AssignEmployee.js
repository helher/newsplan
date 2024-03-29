import React, { useState, useEffect } from "react";
import Parse from "parse";
import { IoMdArrowDropdownCircle } from "react-icons/io";

// Styles
import "./AssignEmployee.css";

function AssignEmployee({ selectedEmployee, setSelectedEmployee, setEmployeeId}) {
  const [readResults, setReadResults] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const employees = [];

   useEffect(() => {
    readEmployees();
  }, []);

  
  const readEmployees = async function () {
    let query = new Parse.Query("User");
    try {
      let employee = await query.find();
      employee.forEach(employee => {
        employees.push(employee);
      })
      console.log(employees);
       setReadResults(employees);
      return true;
    } catch (error) {
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  return (
    <div className="employee-dropdown-container">
      <div className="section-employee">
      <h5>Employee</h5>
      <div className="employee-dropdown-btn" onClick={() => setIsActive(!isActive)}>
        {!selectedEmployee ? (<p>Select</p>) : 
        <p className="selected-employee">{selectedEmployee}</p>}
        <div className="space"></div>
        <IoMdArrowDropdownCircle className="dropdown-icon" />
      </div>
      {isActive && (
                    <div className="employee-dropdown-content">
                        {readResults.map((employee) => ( 
                            <div 
                                onClick={(e) => {
                                  console.log("is the fail happening here?")

                                    const chosenEmployeeInfo = employee.get("username") + ", " + employee.get("role")
                                    setSelectedEmployee(chosenEmployeeInfo);
                                    setEmployeeId(employee.id);
                                    setIsActive(false)
                                }}
                                className="dropdown-item">
                                    <h6>{employee.get("username")},  {employee.get("role")}</h6>
                            </div>
                        ))}
                    </div>
                )}
    </div>
    </div>
  );
}

export default AssignEmployee;