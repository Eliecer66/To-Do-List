import React from 'react';
export default function Delete(props) {
    
    // Function that delete Items from the list
    const deleteItem = (id) => {
        props.setItems((prevItem) => {
            let newList = []
            prevItem.forEach((item) => {
                if (item.id !== id) {
                    newList.push(item);
                }
            });
            return newList;
        })
    };

    return (
        <button 
            className="button delete--button" 
            onClick={() => deleteItem(props.id)}
            >Delete
        </button>
    );
}