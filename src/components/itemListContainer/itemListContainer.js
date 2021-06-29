import {useState, useEffect} from "react"
// import {ItemCount} from "../itemCount/itemCount";
import {ItemList} from "../itemList/itemList"
import {ItemDetailContainer} from "../itemDetailContainer/itemDetailContainer"

import './itemListContainer.css';
export const ItemListContainer = ({greeting}) => {
    const [catalogo, setCatalogo] = useState([])

    const product= [{
        id: '1',
        title: 'Mueble Carnaval',
        subtitle: 'Sublime',
        image: "",
        description: 'Estilo europe, madera rústica',
        price: '$10.000'
    },
        {
            id: '2',
            title: 'Mueble Stilson',
            subtitle: 'Premium',
            image: "",
            description: 'Estilo animalista y moderno',
            price: '$6000'
        },
        {
            id: '3',
            title: 'Mueble Roberson',
            subtitle: 'Premium Galaxy',
            image: "",
            description: 'Madera balza y concreto',
            price: '$2000'
        },
        {
            id: '4',
            title: 'Mueble Roberson',
            subtitle: 'Ultra',
            image: "",
            description: 'Moderno y minimalista',
            price: '$9000'
        },
        {
            id: '5',
            title: 'Mueble Marcos',
            subtitle: 'Asteroide',
            image: "",
            description: 'Salvaje y osado',
            price: '$20.000'
        },
        {
            id: '6',
            title: 'Mueble Peter',
            subtitle: 'Solar',
            image: "",
            description: 'Permanente y Locuas',
            price: '$3000'
        },
        {
            id: '7',
            title: 'Mueble Osval',
            subtitle: 'Astral',
            image: "",
            description: 'Soñado e innovador',
            price: '$11.000'
        },
        {
            id: '8',
            title: 'South Parque',
            subtitle: 'Magnificient',
            image: "",
            description: 'Fotogenico y atractivo',
            price: '$89.990'
        }]

    useEffect(()=>{

        const nuevaPromesa = new Promise((res, rej)=>{

            setTimeout(()=>{
                res(product)
            },2000)

        })

        nuevaPromesa.then((res)=>{
            console.log(res)
            setCatalogo(res)
        })

    },[])



    return (

        <div className="greeting-container">


            {/*<h1 className='greeting'>{greeting}</h1>*/}



            <ItemList items={catalogo}/>


            {/*<ItemCount inicial={0} stock={10}/>*/}

            
        </div>

    )

}