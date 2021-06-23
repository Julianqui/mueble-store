import {ItemCount} from "../itemCount/itemCount";

import './itemListContainer.css';
export const ItemListContainer = ({greeting}) => {



    return (

        <div className="greeting-container">


            <h1 className='greeting'>{greeting}</h1>


            <ItemCount inicial={0} stock={10}/>

            {/*<Item/>*/}

        </div>

    )

}