import {useState, useEffect} from "react"
import {ItemDetail} from "../itemDetail/itemDetail"
import {useParams} from "react-router-dom";


export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [item, setItem] = useState([])

    console.log('Desde ITEMS');
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



    const ITEMS= [{



        id: '1',
        title: 'Mueble Carnaval',
        subtitle: 'Sublime',
        image: "",
        description: 'Estilo europe, madera rústica',
        price: '$10.000',
        categoryId: 'Carnaval'
    },
        {
            id: '2',
            title: 'Mueble Stilson',
            subtitle: 'Premium',
            image: "",
            description: 'Estilo animalista y moderno',
            price: '$6000',
            categoryId: 'Stilson'
        },
        {
            id: '3',
            title: 'Mueble Roberson',
            subtitle: 'Premium Galaxy',
            image: "",
            description: 'Madera balza y concreto',
            price: '$2000',
            categoryId: 'Roberson'
        },
        {
            id: '4',
            title: 'Mueble Roberson',
            subtitle: 'Ultra',
            image: "",
            description: 'Moderno y minimalista',
            price: '$9000',
            categoryId: 'Roberson'
        },
        {
            id: '5',
            title: 'Mueble Marcos',
            subtitle: 'Asteroide',
            image: "",
            description: 'Salvaje y osado',
            price: '$20.000',
            categoryId: 'Marcos'
        },
        {
            id: '6',
            title: 'Mueble Peter',
            subtitle: 'Solar',
            image: "",
            description: 'Permanente y Locuas',
            price: '$3000',
            categoryId: 'Peter'
        },
        {
            id: '7',
            title: 'Mueble Osval',
            subtitle: 'Astral',
            image: "",
            description: 'Soñado e innovador',
            price: '$11.000',
            categoryId: 'Osval'
        },
        {
            id: '8',
            title: 'South Parque',
            subtitle: 'Magnificient',
            image: "",
            description: 'Fotogenico y atractivo',
            price: '$89.990',
            categoryId: 'Parque'
        }]


    useEffect(() => {
        console.log('GEITEMS');
        const getItem = () => {
            return id ? ITEMS.filter(item => item.categoryId == id) : ITEMS;


        }
        setTimeout(()=> {
            const item = getItem()
            console.log('SETTIEO OUT');
            setItem(item)
        }, 2000)
    }, [id])


    // useEffect(() => {
    //      const getItem = () => {
    //          return {
    //
    //     id: '1',
    //     title: 'Detalle',
    //     subtitle: 'Sublime',
    //     image: "",
    //     description: 'Estilo europe, madera rústica',
    //     price: '$10.000'
    // }
    //          }
    //
    //      setTimeout(()=> {
    //          const item = getItem()
    //          setItem(item)
    //      }, 2000)
    //   })




    return (

        <div>

            <ItemDetail item={item}/>

        </div>

    )

}