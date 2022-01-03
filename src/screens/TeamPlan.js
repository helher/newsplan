import React, { useState } from "react";
import Parse from "parse";

// Styles
import "./Teamplan.css";

// components
import Footer from "../components/footer/Footer";
import LoadButton from "../components/buttons/LoadButton/LoadButton";
import AddEmployeeButton from "../components/buttons/AddEmployeeButton/AddEmployeeButton";
import JobForm from "../components/dropdowns/job-dropdown-form/JobForm";
import WorkLoad from "../components/Test/WorkLoad";
import JobList from "../components/job-list/JobList";


const TeamPlan = () => {
  const [workload, setWorkload] = useState();
  const [selectedEmployee, setSelectedEmployee] = useState();
  const [cloudResult, setCloudResult] = useState()


  async function helloCloud() {
    let result = await Parse.Cloud.run("sum", {
    })
    setCloudResult(result)
  }

  return (
    <>
      <div className="teamplan">
        <div className="job-dropdown-container">
          <JobForm
            selectedEmployee={selectedEmployee}
            setSelectedEmployee={setSelectedEmployee}
            workload={workload}
            setWorkload={setWorkload}
          />

          <button onClick={helloCloud}>knap</button>
          <p>{cloudResult}</p>


          <WorkLoad/>
        </div>
      </div>
      <div className="footer-container">
        <div className="footerteamplan-btns">
          <AddEmployeeButton text="Add Employee" />
          <LoadButton text="Load more Employees" />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TeamPlan;
