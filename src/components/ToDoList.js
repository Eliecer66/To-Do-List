import React, {useState} from 'react';
import Items from './Items';
import AddItem from './AddItem';

// Parent component which is hosting the main state
export default function ToDoList() {
    // Main state
    const [items, setItems] = useState([]);

    return (
        <div className='toDoList--container'>
            <h1 className='header--section'>
                To Do List
            </h1>
            <AddItem
                setItems={setItems}
            />
            <h2 className='list--title'>
                List
            </h2>
            <Items 
                items={items} 
                setItems={setItems}
            />
        </div>
  )
}