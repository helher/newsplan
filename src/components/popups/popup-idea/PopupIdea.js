import React, { useState } from 'react';
import './PopupIdea.css';

// icons
import { BiBrain } from 'react-icons/bi';

//components
import PrimaryButton from '../../buttons/PrimaryButton/PrimaryButton';
import ProceedButton from '../../buttons/ProceedButton/ProceedButton';
import DiscardButton from '../../buttons/DiscardButton/DiscardButton';
import CloseWindow from '../../buttons/CloseWindow/CloseWindow';
import DropdownVisibility from '../../dropdowns/DropdownVisibility/DropdownVisibility';

function PopupIdea(props) {
    const [visibilitySelected, setVisibilitySelected] = useState("Select")


    return (props.trigger) ? (
        <div className="popup-page">
            <div className="popup">
                <section className="idea-container">

                    {/* LEFT-COLUMN */}
                    <div className="idea-flex-left">
                        {/* Logo, id and title */}
                        <div className="logo-and-id">
                            <BiBrain className="idea-icon"/>
                            <p className="createdby-text"><b>Idea</b> created by HH</p>
                        </div>
                        <h1>Title of idea</h1>

                        {/* Rich-text-editor placeholder*/}
                        <div className="rich-text-editor"><p className="placeholder-text">Rich text editor</p></div>
                        
                        {/* Dropdowns */}
                        <DropdownVisibility visibilitySelected={visibilitySelected} setVisibilitySelected={setVisibilitySelected}/>

                        {/* Buttons */}
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

                    {/* RIGHT-COLUMN */}
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
