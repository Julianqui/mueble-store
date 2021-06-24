import React from 'react'

export const Item = () => {


    const productos = new Promise((resolve, reject) => {

        console.log('Recibi tu pedidos')
        console.log('Estoy llevando tu pedido a la cocina')
        setTimeout( () =>{
            alert('Desde promise' +  ['Mueble Europe','Mueble Moderno', 'Mueble Vintage'])
            resolve(['Mueble Europe','Mueble Moderno', 'Mueble Vintage', 'Martin', 'Pilar'])
            //reject(['rata'], 'perro')
        }, 2000)

        console.log('Charlando')
    })

    productos.then(
        (muebles)=>{

            /*const tenemosDosPizzas = plato[0].length === 2
            if (tenemosDosPizzas) {*/
                console.log(`Desde promise ${muebles[0]},  ${muebles[1]}, ${muebles[2]}`)
                return 'Todo salio bien'
            /*} else {*/
                throw new Error(`Te pedimos dos porciones`)
            /*}*/

            //console.log(`Recibi mi plato con ${plato[0]} y ${plato[1]}`)
        }, (error) => {
            console.log(`Esto no es lo que pedimos ${error[0]} y ${error[1] }`)
        }
    ).catch(
        (error) => {
            console.log(error)
        }
    ).then((mensaje) => {
        if (mensaje === 'Todo salio bien'){
            console.log('Te vamos a dejar mucha propina')
        }
    })

    return (

        <div className='margin'>


        </div>
    )

}