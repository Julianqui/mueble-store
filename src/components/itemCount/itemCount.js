import React, { useState } from 'react';
import './itemCount.css';
export const ItemCount = ({stock, inicial, onAdd}) => {

    const [count, setCount] = useState(inicial);
    const [stocks, setStocks] = useState(inicial);


    const actualizaCantidad = (add) => {
        if ((stock >= count+add) && (0 <= count + add + add))
            setCount(count+add);
            setStocks(count+add)

    }

    function agrega() {
        if(stocks > 0) {
            alert(`Agregaste al carrito ${stocks} items`)

        } else {
            alert(`No se acepta!! No agregaste nada. No podes agregar ${stocks} items.`)
        }
    }



    return (

        <div className='margin'>

            <button className='agregar-button' onClick={() => agrega()}>Agregar Al Carrito</button>

            <div className='count-contenedor'>

                <button onClick={() => actualizaCantidad(-1)}>-</button>

                <p className='number'>{count}</p>

                <button onClick={() => actualizaCantidad(1)}>+</button>

            </div>

        </div>
    )

}