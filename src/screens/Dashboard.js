import React from 'react';
import DragList from './../components/board/DragList'

import Column from '../components/column/Column';
import './Dashboard.css';
import Card from '../components/card/Card';

const data = [
    {
        title: 'group 1',
        items: ['1', '2', '3']
    },

    {
        title: 'group 2',
        items: ['4', '5']
    }
]

const Dashboard = () => {
    console.log('sup')    
    return (
        <div className="dashboard">
            <p>Dashboard Page</p>
            {/* <Column data={data}/> */}
            {/* <DragList/> */}
            <Card/>
        </div>
    );
};

export default Dashboard;