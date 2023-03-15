import React,{useState} from 'react';

export default function EditBox({setItems, itemId}) {
    // State that store the info to edit.
    const [newInput, setNewInput] = useState('');
    // function that edit the list element desired
    const editItem = () => {
        setItems((prevItems) => {
            return prevItems.map((element) => {
                if (element.id === itemId) {
                    element.isEditing = !(element.isEditing);
                    element.item = newInput;
                }
                return element;
            })
        })
    };
    
    return (
        <div className='edit--box'>
            <input 
                className='edit--input'
                type="text" 
                onChange={(event) => setNewInput(event.target.value)}
            />
            <button
                className='button button--input--edit'
                onClick={editItem}
                >Change
            </button>
        </div>
    );
}