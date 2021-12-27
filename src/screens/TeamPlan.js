import React, {useState} from 'react'
import './Teamplan.css'

// components
import Footer from '../components/footer/Footer'
import LoadButton from '../components/buttons/LoadButton/LoadButton'
import AddEmployeeButton from '../components/buttons/AddEmployeeButton/AddEmployeeButton'
import Statusbar from '../components/statusbar/Statusbar';
import WorkLoad from '../components/Test/WorkLoad'
import AssignWorkload from '../components/dropdowns/assign-workload/AssignWorkload'
import Section from '../components/dropdowns/Section/Section';


const TeamPlan = () => {
    const [workload, setWorkload] = useState();
    const[section, setSection] = useState();

    return (
        <>
            <div className="teamplan">
                <p>Teamplan</p>
                <Statusbar status="planned"/>
                <AssignWorkload workload={workload} setWorkload={setWorkload}/>
                <WorkLoad/>
            </div>
             <div className="footer-container">
                <div className="footerteamplan-btns">
                    <AddEmployeeButton text="Add Employee"/>
                    <LoadButton text="Load more Employees"/>
                    
                    <Section/>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default TeamPlan;