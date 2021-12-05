import React from 'react';
import './BottomAvatar.css';
import Avatar from "@material-ui/core/Avatar";
import Parse from 'parse'; 



function BottomAvatar() {

const user = Parse.User.current(); 
    
    return (
    <div style={{ display: "flex", padding: 10 }}>

    <Avatar
        style={{border: "1px non black", marginTop: -30, marginBottom: 20, marginLeft: 70
        , }}
        alt="GeeksforGeeks Pic 1"
        img src= {user.get("userimage").url()}
      />
    </div>

);
}

export default BottomAvatar
