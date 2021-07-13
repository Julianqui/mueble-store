import React from 'react';
import { ItemCount } from '../itemCount/itemCount'
import { Link} from 'react-router-dom'
import './itemDetail.css';
import { useState } from 'react'
export const ItemDetail = ({item}) =>{
    const {title, price, pictureURL, descripcion} = item
    const [purchasedAmount, setPurchasedAmount]  = useState(0)

    const onAdd = (quantityToAdd) => {

        setPurchasedAmount(quantityToAdd.target.value)

        document.getElementById("itemDetailBuy").style.display="none"
        document.getElementById("itemDetailBought").style.display="block"


    }

    return (
        <>

            <div className='contenedor'>
                { item.length === 0 ?
                    <i className="fa fa-square"></i> :
                    <div className='card'>
                        <div className='card__header'>
                            <h2><span> {item.title}</span></h2>
                        </div>

                        <div className='card__body'>
                            <h3>{item.subtitle}</h3>
                            <p><span>{item.description} </span></p>
                            <span className='card__precio'>{item.price} </span>
                        </div>


                        <div className="block border-box leading-8 static" id="itemDetailBuy">
                            <ItemCount initial={1} stock={9} onAdd={onAdd}/>
                        </div>
                        <div className="block border-box leading-8 static">
                            <span>{descripcion}</span>
                        </div>
                        <div style={{display: "none"}} className='count-contenedor' id="itemDetailBought" >
                            <p>Agregaste {purchasedAmount} Productos al carrito!</p>
                            <Link to={'/cart'}><button className="p-2 border-2 border-black rounded-md ml-2">Terminar Compra</button></Link>
                        </div>

                        <div className='card__footer'>

                        </div>
                    </div>

                    }
            </div>


        </>



    )



}