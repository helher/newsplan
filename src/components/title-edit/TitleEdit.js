import React, { useState } from 'react'
import './TitleEdit.css'

const TitleEdit = ({titleSelected, setTitleSelected}) => {

    function newTitle(e) {
        setTitleSelected(e.target.value)
    }

    return (
        <input 
        className = "text-input"
        placeholder = "Add a title here.."
        type="text"
        value={titleSelected}
        onChange={newTitle}
      />
    )
}

export default TitleEdit