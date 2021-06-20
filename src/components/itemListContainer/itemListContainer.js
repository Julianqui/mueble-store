import React, {useState} from 'react'
import {ItemCount} from "../itemCount/itemCount";
import './itemListContainer.css';
export const ItemListContainer = ({greeting}) => {
    const [initial, setInitial] = useState(1);
    const [stock, setStock] = useState(10);

    return (

        <div className="greeting-container">


            <h1 className='greeting'>{greeting}</h1>


            <ItemCount initial={initial} setInitial={setInitial} stock={10} setStock={setStock}/>


        </div>

    )

}