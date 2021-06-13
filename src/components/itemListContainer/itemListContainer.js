import React from 'react'
import './itemListContainer.css';
export const ItemListContainer = ({greeting}) => {
    return (

        <div className="greeting-container">

            <h1 className='greeting'>{greeting}</h1>

        </div>
    )

}