import React from 'react'
import './Teamplan.css'

// components
import Footer from '../components/footer/Footer'
import LoadButton from '../components/buttons/LoadButton/LoadButton'
import AddEmployeeButton from '../components/buttons/AddEmployeeButton/AddEmployeeButton'
import CommentForm from '../components/comment-form/CommentForm'
import SectionTest from '../components/Test/SectionTest';
import Statusbar from '../components/statusbar/Statusbar';


const TeamPlan = () => {
    return (
        <>
            <div className="teamplan">
                <p>Teamplan</p>
                <CommentForm />
                <SectionTest />
                <Statusbar width="160px" color="var(--statusbar-approved)"/>,
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