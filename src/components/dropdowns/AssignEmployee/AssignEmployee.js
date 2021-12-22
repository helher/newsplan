import React, { useState, useEffect } from "react";
import "./AssignEmployee.css";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import Parse from "parse";

function AssignEmployee({ selectedEmployee, setSelectedEmployee, setAssignedEmployees, articleId}) {
  const [readResults, setReadResults] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const employees = [];

   useEffect(() => {
    readEmployees();
  }, []);

  /* const updateAssignedEmployeeList = async function () {
        const query = new Parse.Query("ArticleRole");
    
        try {
          query.equalTo("articleId", props.ideaId);
          query.descending("createdAt");
          const assignedEmployee = await query.find();
          setAssignedEmployees(assignedEmployee);
    
          return true;
        } catch (error) {
          alert(`Error! Is this the error?`);
          return false;
        }
      }; */

  
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
    <div>
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
