import React, { useState, useEffect } from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import Parse from "parse";

// Styles
import "./Section.css";

function Section({ section, setSection }) {
  const [isActive, setIsActive] = useState(false);
  const [readResults, setReadResults] = useState([]);
  let sections = [];

  useEffect(() => {
    readSections();
  }, []);

  const readSections = async function () {
    let query = new Parse.Query("Section");

    let section = await query.find();
    try {
      section.forEach((section) => {
        sections.push(section.get("name"));
      });
      setReadResults(sections);
      return true;
    } catch (error) {
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  return (
    <div>
      <div className="section-dropdown">
        <h5>Section</h5>
        <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
          {!section ? (
            <p>Select</p>
          ) : (
            <p className="selected-section">{section}</p>
          )}
          <div className="space"></div>
          <IoMdArrowDropdownCircle className="dropdown-icon" />
        </div>
        {isActive && (
          <div className="section-dropdown-content">
            {readResults.map((section) => (
              <div
                onClick={(e) => {
                  console.log("is the fail happening here?");
                  setSection(section);
                  setIsActive(false);
                }}
                className="dropdown-item"
              >
                <h6>{section}</h6>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Section;
