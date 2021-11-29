import React, { useState } from 'react'
import './TitleEdit.css'

const TitleEdit = ({titleSelected, setTitleSelected}) => {
    const [title, setTitle] = useState("Title of Idea")

    function newTitle(e) {
        setTitle(e.target.value)
    }

    return (
        <input 
        className = "text-input"
        type="text"
        value={title}
        onChange={newTitle}
      />
    )
}

export default TitleEdit