import React from 'react';

import './Ideas.css'
import ProceedButton from '../components/buttons/ProceedButton/ProceedButton';


import TitleEdit from '../components/title-edit/TitleEdit';
import StatusbarList from '../components/statusbar/StatusbarList';
import CreatedBy from '../components/createdBy/CreatedBy';


const Ideas = () => {
    return (
        <div className="idea">
            <ProceedButton text="Convert to Article" goto="/Articles" />
            <TitleEdit />
            <CreatedBy/>
            {StatusbarList}

        </div>
    );
};

export default Ideas;