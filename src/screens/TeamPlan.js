import React, {useState} from 'react'
import './Teamplan.css'

// components
import Footer from '../components/footer/Footer'
import LoadButton from '../components/buttons/LoadButton/LoadButton'
import AddEmployeeButton from '../components/buttons/AddEmployeeButton/AddEmployeeButton'
import Statusbar from '../components/statusbar/Statusbar';
import WorkLoad from '../components/Test/WorkLoad'


const TeamPlan = () => {

    return (
        <>
            <div className="teamplan">
                <p>Teamplan</p>
                <Statusbar status="planned"/>
                <WorkLoad/>
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