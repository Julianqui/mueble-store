import React, { useState } from 'react';
import './itemCount.css';
export const ItemCount = ({stock, initial, setInitial, onAdd}) => {

    const sum = () => {
        if (initial <= stock -1){
            let sumClicks = initial + 1;
            setInitial(sumClicks);
        }
    };


    const rest = () => {
        if (initial >= 1){
            let restClicks = initial - 1;
            setInitial(restClicks);
        }

    };

    return (

        <div className='margin'>

            <button className='agregar-button'>Agregar Al Carrito</button>
            <div className='count-contenedor'>

                <button onClick={() => rest()}>-</button>
                <p className='number'>{initial}</p>

                <button id='myBtn' onClick={() => sum()}>+</button>

            </div>


        </div>
    )

}