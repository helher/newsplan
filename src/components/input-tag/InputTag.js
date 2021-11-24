import React from 'react';
import './InputTag.css'; 
import './MockData.js'; 

import { AiFillCloseCircle } from 'react-icons/ai';


const TagsInput = props => {

     /*We use React's use state hook to create local save for the tags input components  **/ 
    const [tags, setTags] = React.useState(["Børn", "Politik"]); 

    const removeTags = indexToRemove => {
        setTags(tags.filter((_, index) => index !== indexToRemove)); 
    }

     /*Define addTags function  **/ 
    const addTags = event => {
        if(event.target.value !== "") {
            setTags([...tags, event.target.value]); 
            props.selected([...tags, event.target.value]); 
            event.target.value= ""; 
        }
    }; 

    return (
        <div className="tags-user-input">
            <ul id="labels">
            {
                tags.map((tag, index) => <li key={index} className ="single-tag">
                <span className = "tag-name">{tag}</span>
                <i className="tag-close-icon" onClick = {() => removeTags(index)}> <AiFillCloseCircle/> </i>
            </li>)     
            }
            </ul>
                <input 
                placeholder="Type to add labels"
                type= "text"
                onKeyUp= {event => (event.key === "Enter" ? addTags(event) : null)}
            />
    </div>
    ); 
}; 


function InputTag() {

    const selected = tags => console.log(tags);     

    return (
        <div>
            <div className="dropdown-header">Section labels</div>
            <TagsInput selected= {selected}/>
        </div>
    )
}

export default InputTag;
