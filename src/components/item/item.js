

export const Item = () => {


    const solicitarPlato = new Promise((resolve, reject) => {
        console.log('Recibi tu pedido')
        console.log('Estoy llevando tu pedido a la cocina')
        setTimeout( () =>{
            resolve(['Lucas','Flavio', 'Daniel', 'Martin', 'Pilar'])
            //reject(['rata'], 'perro')
        }, 3000)

        console.log('Charlando')
    })

    solicitarPlato.then(
        (plato)=>{

            const tenemosDosPizzas = plato[0].length === 2
            if (tenemosDosPizzas) {
                console.log(`Recibimos nuestro plato con ${plato[0]} y ${plato[1]}`)
                return 'Todo salio bien'
            } else {
                throw new Error(`Te pedimos dos porciones`)
            }

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
            {/*<p>{producto}</p>*/}

        </div>
    )

}