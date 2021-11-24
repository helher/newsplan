import React from 'react';
import './PopupIdea.css';

// icons
import { BiBrain } from 'react-icons/bi';

//components
import PrimaryButton from '../../buttons/PrimaryButton/PrimaryButton';
import ProceedButton from '../../buttons/ProceedButton/ProceedButton';
import DiscardButton from '../../buttons/DiscardButton/DiscardButton';
import CloseWindow from '../../buttons/CloseWindow/CloseWindow';

function PopupIdea(props) {
    return (props.trigger) ? (
        <div className="popup-page">
            <div className="popup">
                <section className="idea-container">
                    <div className="idea-flex-left">
                        <div className="logo-and-id">
                            <BiBrain className="idea-icon"/>
                            <p className="createdby-text"><b>Idea</b> created by HH</p>
                        </div>
                        <h1>Title of idea</h1>
                        <div className="rich-text-editor"><p className="placeholder-text">Rich text editor</p></div>
                        <div className="align-bottons">
                            <DiscardButton text="Discard" goto="Dashboard" />
                                <div className="right-buttons">
                                    <div className="convert-button">
                                        <ProceedButton text="Convert to Article" goto="/Dashboard" />
                                    </div>
                                    <PrimaryButton text="Save" goto="/Dashboard"/>
                                </div>
                        </div>
                    </div>
                    <div className="idea-flex-right">
                        <div className="top-right">
                            <CloseWindow setTrigger={props.setTrigger}/>
                        </div>
                            
                        <h3>Comments</h3>
                    </div>
                </section>
                { props.children }
            </div>
        </div>
    ) : ""
}

export default PopupIdea;
