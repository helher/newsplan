import React from 'react';
import Parse from 'parse';
import { FcCheckmark } from "react-icons/fc";

//styles
import './JobForm.css';

// Components 
import AssignEmployee from '../assign-employee/AssignEmployee';
import AssignWorkload from '../assign-workload/AssignWorkload';
import SaveJob from '../../buttons/SaveJob/SaveJob';

function JobForm({workload, setWorkload, selectedEmployee, setSelectedEmployee}) {
    return (
        <div>
            <h3>Job</h3>
            <div className="job-form-component">
             <AssignEmployee selectedEmployee={selectedEmployee} setSelectedEmployee={setSelectedEmployee}/>
             <AssignWorkload workload={workload} setWorkload={setWorkload}/>
             <SaveJob/>
            </div>
        </div>
    );
}

export default JobForm;