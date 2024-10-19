import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { Tooltip } from 'react-tooltip';
import style from "./list.module.scss"

const List: React.FC = () => {
    const [list, setList] = useState([
        { item: 'item 1', id: '1' },
        { item: 'item 2', id: '2' },
        { item: 'item 3', id: '3' },
        { item: 'item 4', id: '4' },
        { item: 'item 5', id: '5' },
        { item: 'item 6', id: '6' },
        { item: 'item 7', id: '7' },
        { item: 'item 8', id: '8' },
    ]);

    const handleDragEnd = (result: DropResult) => {
        const { source, destination } = result;

        if (!destination || source.index === destination.index) return;

        const reorderedList = Array.from(list);
        const [movedItem] = reorderedList.splice(source.index, 1);
        reorderedList.splice(destination.index, 0, movedItem);

        setList(reorderedList);
    };

    return (
        <>

            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="droppable-list"
                >
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="flex flex-col space-y-2 p-4 bg-gray-100 rounded-lg shadow-md"
                        >
                            {list.map(({ item, id }, index) => (
                                <Draggable key={id} draggableId={id} index={index}>
                                    {(provided, snapshot) => (
                                        <div data-tooltip-id={`${id}-my-tooltip`} data-tooltip-content={item}
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className={`border-2 border-blue-500 p-3 rounded-md transition-all duration-300 ease-in-out transform 
                                            ${snapshot.isDragging ? 'bg-blue-500 text-white shadow-lg scale-105' : 'bg-blue-100 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:scale-105'}`}
                                        >
                                            open {item}
                                            <Tooltip id={`${id}-my-tooltip`}
                                                variant='info'
                                                openOnClick
                                                data-tooltip-place='right-end'
                                                className={style.tooltip}
                                                clickable />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>

        </>
    );
};

export default List;
