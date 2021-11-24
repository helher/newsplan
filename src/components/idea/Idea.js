import React, { useState } from 'react';
import Parse from 'parse';
import {Button, Form} from 'react-bootstrap';

function Idea() {
    const [description, setDescription] = useState()

        async function saveNewIdea() {

        const idea = new Parse.Object("Idea");
            
        idea.set("description", description);

        try {
            let result = await idea.save()
            console.log('IDEA CREATED with objectId: ' + result.id);
            } catch(error) {
            console.log('FAILED to create new IDEA. Error: ' + error.message);
            }
        } 

        async function getIdea(objectId) {
            const query = new Parse.Query("Idea");
            
            try {
                const idea = await query.get(objectId);
                const description = idea.get("description");
            
                console.log(`Description: ${description}`);
                } catch (error) {
                alert(`FAILED to retrieve IDEA the object, with error: ${error.message}`);
            }
        }    

    return (
        <div>
            <>
            <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control 
                    type="text" 
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter description" />
            </Form.Group>
            </Form>
            </>
            <Button variant="primary" type="submit" onClick={async () => {await saveNewIdea()}}>
                Submit Idea
            </Button>
            <Button variant="primary" type="submit" onClick={async () => {await getIdea("l4xBtcPVOL")}}>
                Retrieve Idea
            </Button>
        </div>
    )
};

export default Idea;
