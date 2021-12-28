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
  setJobListResult

}) {
  const [employeeId, setEmployeeId] = useState();

   function saveJob() {
    {
      if (workload && selectedEmployee) {
        return <SaveJob saveAction={addJobToDB} />;
      }
    }
  }

  async function updateAvailability() {
    const query = new Parse.Query("User");

    try {
      const assignedEmployee = await query.get(employeeId);;
      if ((workload = "Full day")) {
        assignedEmployee.set("availability", "0%");
      } else if ((workload = "1/2 day"))
        assignedEmployee.set("availability", "50%");
      else {
        assignedEmployee.set("availability", "75%");
      }
    } catch (e) {}
  }

   const updateJobList = async function () {
    const query = new Parse.Query("ArticleRole");

    try {
      query.equalTo("articleId", articleId);
      query.descending("createdAt");
      const assignedJobs = await query.find();
      setJobListResult(assignedJobs);
      return true;
    } catch (error) {
      alert(`Error! Is this the error?`);
      return false;
    }
  };

  async function addJobToDB() {
    const ArticleRole = Parse.Object.extend("ArticleRole");
    const newRole = new ArticleRole();
    const query = new Parse.Query("User");
    try {
      const employeeObject = await query.get(employeeId);
      newRole.set("articleId", articleId);
      newRole.set("employee", selectedEmployee);
      newRole.set("workload", workload);
      newRole.set("user", employeeObject);
      newRole.set("status", "planned");
      let result = await newRole.save();
      updateAvailability();
      updateJobList();
      alert("Job Assigned for artice with ID: " + articleId);
    } catch (error) {
      alert("Failed to update assigned Job, with error code: " + error.message);
    }
  }




/*   function destructureObject(job) {
    return {
      id: job.id,
      employeeDetail: job.get("employee"),
      userObject: job.get("user"),
      workload: job.get("workload"),
      status: job.get("status"),
    };
  }

  function destructureJob(jobs) {
    return jobs.map(destructureObject);
  } */

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
