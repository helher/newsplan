import React from 'react'
import './TitleEdit.css'

const TitleEdit = ({title, setTitle}) => {

    function newTitle(e) {
        setTitle(e.target.value)
    }

    return (
        <input 
        className = "text-input"
        placeholder = "Add a title here.."
        type="text"
        value={title}
        onChange={newTitle}
      />
    )
}

export default TitleEdit