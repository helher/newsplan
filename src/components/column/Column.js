import React, {useState} from 'react';
import './Column.css';

function Column({data}) {

    const [list, setList] = useState(data);

    const handleDragStart = (event) => {
        console.log('drag starting')
    }

    return (
        <section className="drag-and-drop-container">
            <div className="drag-and-drop">
                {list.map((group, groupIndex) => (
                    <div key={group.title} className="drag-and-drop-group">
                        <div className="drag-and-drop-group-title">{group.title}</div>
                        {group.items.map((item, itemIndex) => (
                            <div draggable onDragStart={handleDragStart} key={item} className="drag-and-drop-item">
                                {item}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Column;