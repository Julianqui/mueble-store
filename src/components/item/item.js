
import './item.css';
import {NavLink} from "react-router-dom";
export const Item = ({item})=>{
    const { id, title, price, pictureUrl } = item
    console.log(item)
    return (
        <>
        <NavLink to={`/item/${id}`}>
            <div className='contenedor'>


                <div className='card'>
                    <div className='card__header'>
                        <h2><span>{item.title}</span></h2>
                    </div>

                    <div className='card__body'>
                        <h3>{item.subtitle}</h3>
                        <p><span>{item.description} </span></p>
                        <span className='card__precio'>{item.price} </span>
                    </div>

                    <div className='card__footer'>

                    </div>
                </div>
            </div>

        </NavLink>
        </>
    )


}

