import React from 'react';
import CheckBox from './CheckBox';
import EditBox from './EditBox';
import EditButton from './EditButton';
import Delete from './Delete';

export default function Items(props) {

    // Adding Items to the list.
    const listItems = props.items.map((item) => {
        return (
            <li className='list--item' key={item.id}>
                <CheckBox 
                    completed={item.completed} 
                    id={item.id}
                    setItems={props.setItems}
                />

                <div className='item--name'>{item.item}</div>
                
                {
                    item.edit            
                    ?
                    <EditBox 
                        setItems={props.setItems}
                        id={item.id}
                    />                
                    :
                    <EditButton 
                        setItems={props.setItems}
                        id={item.id}
                    />
                }
                
                <Delete 
                    setItems={props.setItems}
                    id={item.id}
                />
            </li>
        );
    });

    return (
        <div className='list--items'>
            {listItems}
        </div>
    );
}