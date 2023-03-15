import React from 'react';
import CheckBox from './CheckBox';
import EditBox from './EditBox';
import EditButton from './EditButton';
import DeleteItem from './DeleteItem';

export default function Items({items, setItems}) {

    // Adding Items to the list.
    const listItems = items.map((item) => {
        return (
            <li className='list--item' key={item.id}>
                <CheckBox 
                    setItems={setItems}
                    completed={item.completed}
                    itemId={item.id}
                />

                <div className='item--name'>
                    {item.item}
                </div>
                
                {
                    item.isEditing ? (
                        <EditBox 
                            setItems={setItems}
                            itemId={item.id}
                        />
                    ) : (
                        <EditButton 
                            setItems={setItems}
                            itemId={item.id}
                        />
                    )
                }
                
                <DeleteItem
                    setItems={setItems}
                    itemId={item.id}
                />
            </li>
        );
    });

    return (
        <div className='list--items'>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}