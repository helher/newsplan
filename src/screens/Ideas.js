import React from 'react';
import IconButton from './../components/buttons/IconButton/IconButton'
import  { IoIosAddCircleOutline } from 'react-icons/io'
import './Ideas.css'

const Ideas = () => {
    return (
        <div>
            <IconButton UserIcon={ IoIosAddCircleOutline } text="Add Idea" icon="IoIosAddCircleOutline"/>
        </div>
    );
};

export default Ideas;