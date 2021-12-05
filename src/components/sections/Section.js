import React from 'react'
import './Section.css'
import Parse from 'parse'


const Section = ({
        text,
        color
    }) => {


    async function readSections () {
        // Reading parse objects is done by using Parse.Query
        const parseQuery = new Parse.Query('Section')
        try {
            let sections = await parseQuery.find()
            console.log(sections)
            return true
        } catch (error) {
            // Error can be caused by lack of Internet connection
            alert(`Error! ${error.message}`)
            return false;
        }
    }

    function Colors(props) {
        return (
            <div className="colors" style={{backgroundColor: props.color}}>{props.children}</div>
            );
        }

    return (
        <Colors color={color}>{text}</Colors>
    )
}

export default Section