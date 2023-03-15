import React,{useState} from 'react';

export default function AddItem({setItems}) {

    const [input, setInput] = useState('');
    
    const onAddItem = () => {
        if (!input) return null;
        setItems((prevItems) => {
            return [
                ...prevItems,
                {
                    id: Math.floor(Math.random() * 10000),
                    item: input,
                    completed: false,
                    isEditing: false
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
                onClick={onAddItem}
            >
                Add
            </button>
        </div>
    );
}