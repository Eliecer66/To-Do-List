import React,{useState} from 'react';

export default function Add(props) {
    // Adding a hook to get the input and stores it.
    const [input, setInput] = useState('');
    
    // Function that add items to the list
    const addItem = () => {
        if (!input) return null;
        props.setItems((prevItems) => {
            return [
                ...prevItems, 
                {
                    id: Math.floor(Math.random() * 10000),
                    item: input,
                    completed: false,
                    edit: false
                }
            ]
        })
        setInput('');
    }
    return (
        <div className='add--section'>
            <input
                className='add--input' 
                type="text" 
                value={input} 
                onChange={(event) => setInput(event.target.value)}
            />
            <button
                className="button add--button" 
                onClick={addItem}
            >
                Add
            </button>
        </div>
    );
}