import {Item} from "../item/item"
import './itemList.css';
export const ItemList =({items})=>{


    return(
        <>
               <div className='card-contenedor'>


                {items.map(item=> <Item key={item.id} item={item}/>)   }
               </div>
        </>
    )

}