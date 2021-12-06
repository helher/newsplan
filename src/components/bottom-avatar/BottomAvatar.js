import React from 'react';
import './BottomAvatar.css';
import Avatar from "@material-ui/core/Avatar";
import Parse from 'parse'; 

//fix bug: when a user has no image, it does not catch error 

function BottomAvatar() {

const user = Parse.User.current(); 
    
    return (
    <div style={{ display: "flex", padding: 10, size: 50 }}>

    <Avatar
        style={{border: "1px non black", marginTop: -50, marginBottom: 20, marginLeft: 60
        , height: 70, width: 70 }}
        alt="Profile image"
        img src= {user.get("userimage").url()}
        />
    </div>

    );
}

export default BottomAvatar
