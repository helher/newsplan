import React, { useState, useEffect } from "react";
import Parse from "parse";

function WorkLoad() {
  const [readResults, setReadResults] = useState([]);
  let durationArray = [];

  useEffect(() => {
    readWorkLoad();
  }, []);

  const readWorkLoad = async function () {
    let query = new Parse.Query("Workload");

    let workload = await query.find();
    try {
      workload.forEach((workload) => {
        durationArray.push(workload.get("duration"));
      });
      setReadResults(durationArray);
      return true;
    } catch (error) {
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  return <div>
       {readResults.map((workload) => (
    
                <h6>{workload}</h6>
 
            ))}
  </div>;
}

export default WorkLoad;
