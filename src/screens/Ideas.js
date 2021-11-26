import React from 'react';
import FooterButton from '../components/buttons/FooterButton/FooterButton'

import './Ideas.css'
import AddJobButton from '../components/buttons/AddJobButton/AddJobButton';
import ProceedButton from '../components/buttons/ProceedButton/ProceedButton';

// Icons
import { IoIosAddCircleOutline } from 'react-icons/io'
import { IoMdRefresh } from 'react-icons/io'
import TitleEdit from '../components/title-edit/TitleEdit';

const Ideas = () => {
    return (
        <div className="idea">
            <FooterButton UserIcon={ IoIosAddCircleOutline } text="Add Idea" goto="/Articles"/>
            <FooterButton UserIcon={ IoIosAddCircleOutline } text="Add Event" goto="/TeamPlan"/>
            <FooterButton UserIcon={ IoMdRefresh } text="Load more Employees" goto="/Articles"/>
            <FooterButton UserIcon={ IoMdRefresh } text="Load more Articles" goto="/Articles"/>
            <AddJobButton text="Add Job" goto="/Dashboard"/>
            <ProceedButton text="Convert to Article" goto="/Articles" />
            < TitleEdit />
        </div>
    );
};

export default Ideas;