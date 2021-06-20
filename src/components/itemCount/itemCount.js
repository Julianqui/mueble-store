import React, { useState } from 'react';
import './itemCount.css';
export const ItemCount = ({stock, inicial, onAdd}) => {

    const [count, setCount] = useState(inicial);

    const actualizaCantidad = (add) => {
        if ((stock >= count+add) && (0 <= count + add + add)) setCount(count+add)
    }

    return (

        <div className='margin'>

            <button className='agregar-button'>Agregar Al Carrito</button>

            <div className='count-contenedor'>

                <button onClick={() => actualizaCantidad(-1)}>-</button>

                <p className='number'>{count}</p>

                <button onClick={() => actualizaCantidad(1)}>+</button>

            </div>

        </div>
    )

}