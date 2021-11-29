import React, { useState } from "react";
import suggestData from "./DataLabel";
import './InputTag.css'; 

function InputTag() {

  const [tags, selectedTags] = useState([])
  const [input, selectedInputs] = useState("")
  const [suggestions, selectedSuggestions] = useState([])

  const handleChange = (text) => {
    selectedInputs(text.target.value)
    handleSuggestion();
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 9) {
      e.preventDefault();
    }
    
    const text = suggestions.length ? suggestions[0] : input;
    if ([9, 13].includes(e.keyCode) && text) {
        selectedTags([...tags, text])
        selectedInputs("")
      };
    }
  

  const handleSuggestion = () => {
    const suggestFilterInput = suggestData.filter(suggest =>   
      suggest.text.toLowerCase().includes(input.toLowerCase())
    );

    const suggestFilterTags = suggestFilterInput.filter(
      suggest => !tags.includes(suggest.text)
    );

    selectedSuggestions(
        suggestFilterTags
      )
  };

  const handleDelete = (i) => {
    const newTags = tags.filter((tag, j) => i !== j);
    selectedTags (newTags)

  };

  const AddTags = (text) => {
    selectedTags ([...tags, text])
    selectedInputs("")
    
  };


    return (
      <>
      <h5>Section </h5>
      <div className="tags-content">
        {tags.map((tag, i) => (
          <div key={i} className="tag">
            {tag}
            <div className="remove-tag" onClick={() => handleDelete(i)}>
              ×
            </div>
          </div>
        ))}
        <div className="tags-input">
          <input
            type="text"
            value = {input}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Add a new section"
          />
          {input && Boolean(suggestions.length) && (
            <div className="tags-suggestions">
              {suggestions.map(suggest => (
                <div
                  className="suggestion-item"
                  onClick={() => AddTags(suggest.text)}
                >
                  {suggest.text}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      </>
    )
}

export default InputTag;