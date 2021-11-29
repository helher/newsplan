import './CreatedBy.css'
import { BiBrain } from 'react-icons/bi';

function CreatedBy() {
    return (
        <div className="logo-and-id">
            <BiBrain className="idea-icon"/>
            <p className="createdby-text"><b>Idea</b> created by HH</p>
        </div>
    )
    
}

export default CreatedBy