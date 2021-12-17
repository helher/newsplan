import React, {useState, useEffect} from 'react';
import Parse from 'parse';
import { List } from "antd";

function SectionTest() {
    const [selectedSection, setSelectedSection] = useState();

    const readSections = async function () {
    let query = new Parse.Query("Section");
    try {
      let sections = await query.find();
      setSelectedSection(sections);
      console.log("test output of section Parse: ", selectedSection);
      return true;
    } catch (error) {
      alert(`Error! ${error.message}`);
      return false;
    }
  };


    return (
        <div>
            <button onClick={readSections}>click me</button>
             <List
            dataSource={selectedSection}
            renderItem={(item) => (
                <List.Item>
                    <h6>{item.get("name")}</h6>
                </List.Item>
            )}
          />
        </div>
    );
}

export default SectionTest;
