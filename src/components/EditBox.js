import React,{useState} from 'react';

export default function EditBox(props) {
    // State that store the info to edit.
    const [newInput, setNewInput] = useState('');
    // function that edit the list element desired
    const editItem = (id) => {
        props.setItems((prevItems) => {
            return prevItems.map((element) => {
                if (element.id === id) {
                    element.edit = !(element.edit);
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
                onClick={() => editItem(props.id)}
                >Change
            </button>     
        </div>
    );
}