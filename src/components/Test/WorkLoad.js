import React, { useState, useEffect } from "react";
import Parse from "parse";

function WorkLoad() {
  const [readResults, setReadResults] = useState([]);
  let jobArray = [];

  useEffect(() => {
    readWorkLoad();
  }, []);

  const readWorkLoad = async function () {
    let query = new Parse.Query("ArticleRole");
    query.equalTo("articleId", "QVvucafMWC");

    let job = await query.find();
    try {
      job.forEach((job) => {
        jobArray.push(job);
      });
      setReadResults(jobArray);
      return true;
    } catch (error) {
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  

  return <div>
       {readResults.map((job) => (
    
                <h6>{job.get("employee")}</h6>
 
            ))}
  </div>;
}

export default WorkLoad;
