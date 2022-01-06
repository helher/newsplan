import React from "react";

// Styles
import "./Teamplan.css";

// Images
import teamImage from "../images/teamplan_image.jpg";

// components
import Footer from "../components/footer/Footer";
import LoadButton from "../components/buttons/LoadButton/LoadButton";
import AddEmployeeButton from "../components/buttons/AddEmployeeButton/AddEmployeeButton";

const TeamPlan = () => {
  return (
    <>
      <div className="teamplan">
          <img className="teamplan-img" src={teamImage} alt="teamplan"/>
          <div className="teamplan-header">
          <h1 >Under Construction</h1>
          <p>This page is under construction, but feel free to explore the other pages</p>
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


