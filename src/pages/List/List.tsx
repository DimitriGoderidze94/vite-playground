import React, { useState } from 'react';

const List: React.FC = () => {
    const [list, setList] = useState([
        { item: 'item2', id: 2 },
        { item: 'item3', id: 3 },
        { item: 'item4', id: 4 },
        { item: 'item5', id: 5 },
        { item: 'item6', id: 6 },
        { item: 'item7', id: 7 },
        { item: 'item8', id: 8 },
    ]);

    const [draggedItemIndex, setDraggedItemIndex] = useState<number | null>(null);

    const handleDragStart = (index: number) => {
        setDraggedItemIndex(index);
    };

    const handleDragOver = (index: number) => {
        if (draggedItemIndex === null) return;

        // Prevent default to allow drop
        const items = Array.from(list);
        const [movedItem] = items.splice(draggedItemIndex, 1);
        items.splice(index, 0, movedItem);
        setList(items);
        setDraggedItemIndex(index);
    };

    const handleDragEnd = () => {
        setDraggedItemIndex(null);
    };

    return (
        <div className="flex flex-col space-y-2">
            {list.map(({ item, id }, index) => (
                <div
                    key={id}
                    draggable
                    onDragStart={() => handleDragStart(index)}
                    onDragOver={() => handleDragOver(index)}
                    onDragEnd={handleDragEnd}
                    className={`border border-solid p-2 bg-white shadow rounded ${draggedItemIndex === index ? 'opacity-50' : ''
                        }`}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};

export default List;
