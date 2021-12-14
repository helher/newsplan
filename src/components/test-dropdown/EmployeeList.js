import React, {useState} from "react";
import Parse from "parse";
import { Button, Input, List } from "antd";

function EmployeeList() {
  const [readResults, setReadResults] = useState([]);

  let queryResults;

  const readEmployeeList = async function () {
    let query = new Parse.Query("User");
    try {
      queryResults = await query.find();
      return true;
    } catch (error) {
      alert(`Error! Is this the error?`);
      return false;
    }
  };

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
    <div>
    <button onClick={readEmployees}> get employees</button>

      {readResults !== null &&
        readResults !== undefined &&
        readResults.length > 0 && (
            
          <List
            dataSource={readResults}
            renderItem={(item) => (
              <List.Item className="employee-list">
                <p>
                  {item.get("username")}
                </p>
              </List.Item>
            )}
          />
        )}
    </div>
  );
}

export default EmployeeList;
