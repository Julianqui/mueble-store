import React from 'react'
import './itemCount.css'
import {useState} from 'react'

export const ItemCount = ({stock, initial, onAdd}) => {

    const [counter, setCounter] = useState (initial)

    const [newStock, setStock] = useState (stock)

    const subtract = ()=>{
        if (counter > 1){
            setCounter(counter - 1)
            setStock(newStock + 1)
        }
    }

    const add = () => {
        if(newStock !== 0){
            setCounter(counter +1)
            setStock(newStock -1)
        }
    }


    return(
        <div className="margin bg-gray-50 md:w-48 md:h-22 mx-auto">
            <div className="count-contenedor button-margin">

                    <button className="agregar-restar" onClick={subtract}>-</button>
                    <span className="">{counter}</span>
                    <button className="agregar-restar" onClick={add}>+</button>

                <div className="">
                    <button className="agregar-button" id="itemDetailBuy" onClick={onAdd} value={counter}>Agregar</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount