import React from 'react';
import './PopupIdea.css';

// icons
import { BiBrain } from 'react-icons/bi';

//components
import PrimaryButton from '../../buttons/PrimaryButton/PrimaryButton';
import ProceedButton from '../../buttons/ProceedButton/ProceedButton';
import DiscardButton from '../../buttons/DiscardButton/DiscardButton';

function PopupIdea() {
    return (
        <section className="idea-container">
            <div className="idea-flex-left">
                <div className="logo-and-id">
                    <BiBrain className="idea-icon"/>
                    <p className="createdby-text"><b>Idea</b> created by HH</p>
                </div>
                <h1>Title of idea</h1>
                <div className="rich-text-editor"><p className="placeholder-text">Rich text editor</p></div>
                <PrimaryButton text="Save" goto="/Dashboard"/>
                <ProceedButton text="Convert to Article" goto="/Dashboard" />
                <DiscardButton text="Discard" goto="Dashboard" />

            </div>

            <div className="idea-flex-right">
                <h3>Comments</h3>
            </div>
        </section>
    )
}

export default PopupIdea;
