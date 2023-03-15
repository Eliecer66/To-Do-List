import React from 'react';

export default function Checkbox({setItems, completed, itemId}) {

    const changeCompleted = () => {
        setItems((prevItem) => {
            return prevItem.map((item) => {
                if (item.id === itemId) {
                    item.completed = !item.completed;
                }
                return item;
            });
        })
    };
    
    return (
        <input 
            className="checkbox--item" 
            type="checkbox" 
            value={completed}
            onChange={changeCompleted}
        />
    );
}