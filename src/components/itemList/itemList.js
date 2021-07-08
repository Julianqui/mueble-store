import {Item} from "../item/item"
import './itemList.css';
export const ItemList =({item})=>{
    return(
        <>
               <div className='card-contenedor'>


                {item.map(item=> <Item key={item.id} item={item}/>)   }
               </div>
        </>
    )

}