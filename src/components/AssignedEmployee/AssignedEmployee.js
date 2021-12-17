import React from 'react'; 
import './AssignedEmployee.css'; 
import Avatar from "@material-ui/core/Avatar";
import Parse from 'parse'; 

function AssignedEmployee() {


    //now just retrieving current user img to test - but it should retrieve assigned user's image 

    const user = Parse.User.current(); 



    return (
            <div>
                <h6>Journalist</h6>
            </div>
    )
}

export default AssignedEmployee
