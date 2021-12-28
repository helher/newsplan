import React, {useState} from 'react'
import './Teamplan.css'

// components
import Footer from '../components/footer/Footer'
import LoadButton from '../components/buttons/LoadButton/LoadButton'
import AddEmployeeButton from '../components/buttons/AddEmployeeButton/AddEmployeeButton'
import Statusbar from '../components/statusbar/Statusbar'
import WorkLoad from '../components/Test/WorkLoad'
import AssignEmployee from '../components/dropdowns/assign-employee/AssignEmployee'
import AssignWorkload from '../components/dropdowns/assign-workload/AssignWorkload'
import JobForm from '../components/dropdowns/job-dropdown-form/JobForm'


const TeamPlan = () => {
    const [workload, setWorkload] = useState();
    const [selectedEmployee, setSelectedEmployee] = useState()
    const[section, setSection] = useState();

    return (
        <>
            <div className="teamplan">
                <div className="job-dropdown-container">
                <JobForm selectedEmployee={selectedEmployee} setSelectedEmployee={setSelectedEmployee} workload={workload} setWorkload={setWorkload}/>
                </div>
            </div>
             <div className="footer-container">
                <div className="footerteamplan-btns">
                    <AddEmployeeButton text="Add Employee"/>
                    <LoadButton text="Load more Employees"/>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default TeamPlan;