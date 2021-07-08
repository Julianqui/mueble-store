import {useState, useEffect} from "react"
import {ItemDetail} from "../itemDetail/itemDetail"
import {useParams} from "react-router-dom";

import {ItemList} from "../itemList/itemList";



export const ItemDetailContainer = () => {
    const {id} = useParams()
    const [item, setItem] = useState([])

    useEffect(() =>{

        const promise = new Promise ((resolve, reject) => {

            setTimeout(() => {
                const getItem = () => {
                    return id ? ITEMS.find((item) => item.id == id) : ITEMS
                }

                const item = getItem()
                setItem(item)
                resolve(item)
            }, 2000)

        })

        promise.then((resolve) =>{
            setItem(resolve)
        })

    }, [id])



    /*useEffect(() => {
        console.log('GEITEMS');


        const getItem = () => {
            return id ? ITEMS.filter((item) => item.id === id) : ITEMS



        }
        console.log('comprobacion')
        console.log(id)
        setTimeout(()=> {
            const item = getItem()
            console.log('SETTIEO OUT');
            setItem(item)
        }, 2000)
    }, [id])*/



    const ITEMS= [{
        id: 1,
        title: 'Mueble Carnaval',
        subtitle: 'Sublime',
        image: "",
        description: 'Estilo europe, madera rústica',
        price: '$10.000',
    },
        {
            id: 2,
            title: 'Mueble Stilson',
            subtitle: 'Premium',
            image: "",
            description: 'Estilo animalista y moderno',
            price: '$6000',
        },
        {
            id: 3,
            title: 'Mueble Roberson',
            subtitle: 'Premium Galaxy',
            image: "",
            description: 'Madera balza y concreto',
            price: '$2000',
        },
        {
            id: 4,
            title: 'Mueble Roberson',
            subtitle: 'Ultra',
            image: "",
            description: 'Moderno y minimalista',
            price: '$9000',
        },
        {
            id: 5,
            title: 'Mueble Marcos',
            subtitle: 'Asteroide',
            image: "",
            description: 'Salvaje y osado',
            price: '$20.000',
        },
        {
            id: 6,
            title: 'Mueble Peter',
            subtitle: 'Solar',
            image: "",
            description: 'Permanente y Locuas',
            price: '$3000',
        },
        {
            id: 7,
            title: 'Mueble Osval',
            subtitle: 'Astral',
            image: "",
            description: 'Soñado e innovador',
            price: '$11.000',
        },
        {
            id: 8,
            title: 'South Parque',
            subtitle: 'Magnificient',
            image: "",
            description: 'Fotogenico y atractivo',
            price: '$89.990',
        }]

    /*useEffect(()=>{

        const nuevaPromesa = new Promise((res, rej)=>{

            setTimeout(()=>{
                res(ITEMS)
            },2000)

        })

        nuevaPromesa.then((res)=>{
            console.log(res)
            setItem(res)
        })

    },[])
*/



    return (

        <div>

            {item.length === 0 ? <h2>Cargando</h2> : <ItemDetail key={id} item={item}/>}



        </div>

    )

}