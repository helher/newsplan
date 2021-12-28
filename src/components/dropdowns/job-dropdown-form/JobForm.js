import React, { useState } from "react";
import Parse from "parse";

//styles
import "./JobForm.css";

// Components
import AssignEmployee from "../assign-employee/AssignEmployee";
import AssignWorkload from "../assign-workload/AssignWorkload";
import SaveJob from "../../buttons/SaveJob/SaveJob";

function JobForm({
  workload,
  setWorkload,
  selectedEmployee,
  setSelectedEmployee,
  articleId,
}) {
  const [employeeId, setEmployeeId] = useState();

  async function updateAvailability() {
    const query = Parse.Object.extend("User");
    query.equalTo("objectId", employeeId);

    try {
      const assignedEmployee = await query.find();
      if ((workload = "Full day")) {
        assignedEmployee.set("availability", "0%");
      } else if ((workload = "1/2 day"))
        assignedEmployee.set("availability", "50%");
      else {
        assignedEmployee.set("availability", "75%");
      }
    } catch (e) {}
  }

  async function addJobToDB() {
    const ArticleRole = Parse.Object.extend("ArticleRole");
    const newRole = new ArticleRole();
    newRole.set("articleId", articleId);
    newRole.set("employee", selectedEmployee);
    newRole.set("workload", workload);
    newRole.set("status", "planned");

    try {
      let result = await newRole.save();
      updateAvailability();
      alert("Comment created with ID: " + result.id);
    } catch (error) {
      alert("Failed to update comment, with error code: " + error.message);
    }
  }

  function saveJob() {
    {
      if (workload && selectedEmployee) {
        return <SaveJob saveAction={addJobToDB} />;
      }
    }
  }
  return (
    <div>
      <h3>Job</h3>
      <div className="job-form-component">
        <AssignEmployee
          selectedEmployee={selectedEmployee}
          setSelectedEmployee={setSelectedEmployee}
          setEmployeeId={setEmployeeId}
        />
        <AssignWorkload workload={workload} setWorkload={setWorkload} />
        {saveJob()}
      </div>
    </div>
  );
}

export default JobForm;
