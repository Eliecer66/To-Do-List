import React from 'react';

export default function EditButton({setItems, itemId}) {
    
     const toggleState = (() => {
         setItems((prevItems) => {
            return prevItems.map((item) => {
                if (item.id === itemId) {
                    item.isEditing = true;
                }
                return item;
            })
        })
    });

    return (
        <button 
            className="button edit--button"
            onClick={toggleState}
            >Edit
        </button>
    );
}