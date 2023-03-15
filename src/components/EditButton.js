import React from 'react';

export default function EditBox(props) {
    
     const toggleState = ((id) => {
         props.setItems((prevItems) => {
            return prevItems.map((item) => {
                if (item.id === id) {
                    item.edit = true;
                }
                return item;
            })
        })
    });

    return (
        <button 
            className="button edit--button"
            onClick={() => toggleState(props.id)}
            >Edit
        </button>
    );
}