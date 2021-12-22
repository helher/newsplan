import React from 'react'
import AssignEmployee from '../dropdowns/AssignEmployee/AssignEmployee';
import AssignWorkload from '../dropdowns/AssignWorkload/AssignWorkload';

function JobForm(props) {
    return (
      <div>
        <h5>Assign Job</h5>
        <div className="assign-dropdowns">
          <AssignEmployee
            selectedEmployee={props.selectedEmployee}
            setSelectedEmployee={props.setSelectedEmployee}
          />
          <AssignWorkload
            workload={props.workload}
            setWorkLoad={props.setWorkload}
          />
        </div>
      </div>
    );
}

export default JobForm
