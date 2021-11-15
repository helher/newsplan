import React from 'react';
import FooterButton from '../components/buttons/FooterButton/FooterButton'
import  { IoIosAddCircleOutline } from 'react-icons/io'
import  { IoMdRefresh } from 'react-icons/io'
import './Ideas.css'
import AddJobButton from '../components/buttons/AddJobButton/AddJobButton';

const Ideas = () => {
    return (
        <div>
            <FooterButton UserIcon={ IoIosAddCircleOutline } text="Add Idea" goto="/Articles"/>
            <FooterButton UserIcon={ IoIosAddCircleOutline } text="Add Event" goto="/TeamPlan"/>
            <FooterButton UserIcon={ IoMdRefresh } text="Load more Employees" goto="/Articles"/>
            <FooterButton UserIcon={ IoMdRefresh } text="Load more Articles" goto="/Articles"/>
            <AddJobButton text="Add Job" goto="/Dashboard"/>
        </div>
    );
};

export default Ideas;