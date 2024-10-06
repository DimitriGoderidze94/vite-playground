import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';

const List: React.FC = () => {
    const [list, setList] = useState([
        { item: 'item2', id: '2' },
        { item: 'item3', id: '3' },
        { item: 'item4', id: '4' },
        { item: 'item5', id: '5' },
        { item: 'item6', id: '6' },
        { item: 'item7', id: '7' },
        { item: 'item8', id: '8' },
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
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable-list">
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="flex flex-col space-y-2 p-4 bg-gray-100 rounded-lg shadow-md"
                    >
                        {list.map(({ item, id }, index) => (
                            <Draggable key={id} draggableId={id} index={index}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className={`border-2 border-blue-500 p-3 rounded-md transition-all duration-300 ease-in-out transform ${snapshot.isDragging ? 'bg-blue-500 text-white shadow-lg scale-105' : 'bg-blue-100'
                                            }`}
                                    >
                                        {item}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default List;
