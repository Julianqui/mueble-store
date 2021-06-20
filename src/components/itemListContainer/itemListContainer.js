import React, {useState} from 'react'
import {ItemCount} from "../itemCount/itemCount";
import './itemListContainer.css';
export const ItemListContainer = ({greeting}) => {


    const inicial= '';
    const stock= '';

    return (

        <div className="greeting-container">


            <h1 className='greeting'>{greeting}</h1>


            <ItemCount inicial={1} stock={10}/>


        </div>

    )

}