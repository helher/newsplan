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
        <h1 className="teamplan-header">Under Construction</h1>
        <div className="image-container-teamplan">
          <img className="teamplan-image" scr={teamImage} alt="teamplan"/>
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
