import React, { useState, useEffect } from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import Parse from "parse";

// Styles
import "./DropdownVisibility.css";

function DropdownVisibility({ visibility, setVisibility }) {
  const [isActive, setIsActive] = useState(false);
  const [readResults, setReadResults] = useState([]);
  let visibilityOptions = [];

  useEffect(() => {
    readWorkload();
  }, []);

  useEffect(() => {}, [readResults]);

  const readWorkload = async function () {
    let query = new Parse.Query("Visibility");
    let visibilityOption = await query.find();

    try {
      visibilityOption.forEach((visibilityOption) => {
        visibilityOptions.push(visibilityOption.get("name"));
      });

      setReadResults(visibilityOptions);
      return true;
    } catch (error) {
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  return (
    <div className="dropdown" onClick={readWorkload}>
      <h5>Visibility</h5>
      <div className="dropdown-select">
        <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
          {!visibility && <p>Select</p>}
          <div className="selected-visibility">{visibility}</div>
          <div className="space"></div>
          <IoMdArrowDropdownCircle className="dropdown-icon" />
        </div>
          {isActive && (
            <div className="dropdown-content">
              {readResults.map((visibilityOption) => (
                <div
                  onClick={(e) => {
                    console.log("is the fail happening here?");
                    setVisibility(visibilityOption);
                    setIsActive(false);
                  }}
                  className="dropdown-item"
                >
                  <h6>{visibilityOption}</h6>
                </div>
              ))}
            </div>
          )}
      </div>
    </div>
  );
}

export default DropdownVisibility;
