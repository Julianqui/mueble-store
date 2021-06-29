import {useState, useEffect} from "react"

import {ItemDetail} from "../itemDetail/itemDetail"


export const ItemDetailContainer = () => {
    const [item, setItem] = useState([])


     useEffect(() => {
         const getItem = () => {
             return {

        id: '1',
        title: 'Detalle',
        subtitle: 'Sublime',
        image: "",
        description: 'Estilo europe, madera rústica',
        price: '$10.000'
    }
             }

         setTimeout(()=> {
             const item = getItem()
             setItem(item)
         }, 2000)
      })




    return (

        <div>

            <ItemDetail item={item}/>

        </div>

    )

}