import React from 'react'
import './Teamplan.css'

// components
import Footer from '../components/footer/Footer'
import LoadButton from '../components/buttons/LoadButton/LoadButton'
import AddEmployeeButton from '../components/buttons/AddEmployeeButton/AddEmployeeButton'
import CommentForm from '../components/comment-form/CommentForm'
import SectionTest from '../components/Test/SectionTest';
import AssignedJob from '../components/job-list/AssignedJob'
import AssignEmployee from '../components/dropdowns/AssignEmployee/AssignEmployee'


const TeamPlan = () => {
    return (
        <>
            <div className="teamplan">
                <p>Teamplan</p>
                <CommentForm />
                <SectionTest />
                <AssignedJob/>
                <AssignEmployee/>
                
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