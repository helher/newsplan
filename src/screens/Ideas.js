import React from 'react';
import FooterButton from '../components/buttons/FooterButton/FooterButton'
import  { IoIosAddCircleOutline } from 'react-icons/io'
import  { IoMdRefresh } from 'react-icons/io'
import './Ideas.css'
import AddJobButton from '../components/buttons/AddJobButton/AddJobButton';
import PrimaryButton from '../components/buttons/PrimaryButton/PrimaryButton';
import ProceedButton from '../components/buttons/ProceedButton/ProceedButton';

const Ideas = () => {
    return (
        <div className="idea">
            <FooterButton UserIcon={ IoIosAddCircleOutline } text="Add Idea" goto="/Articles"/>
            <FooterButton UserIcon={ IoIosAddCircleOutline } text="Add Event" goto="/TeamPlan"/>
            <FooterButton UserIcon={ IoMdRefresh } text="Load more Employees" goto="/Articles"/>
            <FooterButton UserIcon={ IoMdRefresh } text="Load more Articles" goto="/Articles"/>
            <AddJobButton text="Add Job" goto="/Dashboard"/>
            <PrimaryButton text="Primary" goto="/Articles"/>
            <ProceedButton text="Convert to Article" goto="/Articles" />
        </div>
    );
};

export default Ideas;