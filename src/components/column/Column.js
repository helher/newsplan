import React, {useState, useRef} from 'react';
import './Column.css';

function Column({data}) {

    const [list, setList] = useState(data);
    const [dragging, setDragging] = useState(false);

    const dragItem = useRef();
    const dragNode = useRef();

    const handleDragStart = (event, params) => {
        console.log('drag starting', params)
        dragItem.current = params;
        dragNode.current = event.target;
        dragNode.current.addEventListener('dragend', handleDragEnd)
        setTimeout(() => {
            setDragging(true);
        }, 0)
    }

    const handleDragEnter = (event, params) => {
        console.log('entering drag', params);

        const currentItem = dragItem.current;

        if(event.target !== dragNode.current) {
            console.log('TARGET IS NOT THE SAME')

            setList(oldList => {
                let newList = JSON.parse(JSON.stringify(oldList));
                
                newList[params.groupIndex].items.splice(params.itemIndex, 0, newList[currentItem.groupIndex].items.splice(currentItem.itemIndex,1)[0])
                dragItem.current = params
                
                return newList; 
            })
        }
    }

    const handleDragEnd = () => {
        console.log('Ending Drag')
        setDragging(false);
        dragNode.current.removeEventListener('dragend', handleDragEnd)
        dragItem.current = null;
        dragNode.current = null;
    }

    const getStyles = (params) => {
        const currentItem = dragItem.current;
        if (currentItem.groupIndex === params.groupIndex && currentItem.itemIndex === params.itemIndex) {
            return 'current drag-and-drop-item';
        } 
        return 'drag-and-drop-item'
    }; 

    return (
        <section className="drag-and-drop-container">
            <div className="drag-and-drop">
                {list.map((group, groupIndex) => (
                    <div 
                        key={group.title} 
                        className="drag-and-drop-group"
                        onDragEnter={dragging && !group.items.length 
                            ? (event) => handleDragEnter(event, {groupIndex, itemIndex:0})
                            : null
                        }
                    >

                        <div className="drag-and-drop-group-title">{group.title}</div>
                        {group.items.map((item, itemIndex) => (
                            <div 
                                draggable 
                                onDragStart={(dragEvent) => {handleDragStart(dragEvent, {groupIndex, itemIndex})}}
                                onDragEnter={dragging
                                    ? (event) => {handleDragEnter(event, {groupIndex, itemIndex})}
                                    : null
                                } 
                                key={item} 
                                className={dragging 
                                    ? getStyles({groupIndex, itemIndex}) 
                                    : "drag-and-drop-item"
                                }
                            >
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