import React from 'react';

export default function Checkbox(props) {
    // Function that change the checkbox state
    const changeCompleted = (id) => {
        props.setItems((prevItem) => {
            return prevItem.map((item) => {
                if (item.id === id) {
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
            value={props.completed}
            onChange={() => changeCompleted(props.id)}
        />
    );
}