import React, {useState, useEffect} from "react";
import Parse from "parse";

function Section(props) {
    const [selectedSection, setSelectedSection] = useState();

    const updateChosenSection = async function () {
        const query = new Parse.Query("Section");
    
        try {
          const sections = await query.find();
          props.setSelectedSection(sections);
          return true;
        } catch (error) {
          alert(`Error! Is this the error?`);
          return false;
        }
      };

  return (
    <div>
      <h5>Section </h5>

      </div>
  
  );
}

export default Section;
