import React, { useState } from 'react';
import IdeaCard from './../components/kanban-cards/idea-card/IdeaCard';
import './Articles.css'

import Footer from '../components/footer/Footer';
import LoadButton from '../components/buttons/LoadButton/LoadButton';
import DropdownLength from '../components/dropdowns/DropdownLength/DropdownLength';

const Articles = () => {

//this line is needed to test the popup on article page
const [length, setLength] = useState()
    
return (

        <>
        <div className="article">
            {console.log("I am running")}
            <p>Articles Page</p>
            <IdeaCard />
            <DropdownLength length={length} setLength={setLength}/>
        </div>
        <div className="footer-container">
            <div className="footerarticle-btns">
                <LoadButton text="Load more Articles" />
            </div>
            <Footer/>
        </div>

        </>
        
    )
}

export default Articles;