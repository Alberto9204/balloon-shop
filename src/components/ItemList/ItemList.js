import { useEffect, useState  } from 'react'
import { PedirDatos } from '../../helpers/PedirDatos'
import { ListaDeComponentes } from '../ListaDeComponentes/ListaDeComponentes'



export const ItemList = () => {

 const [produ, setProdu]  = useState([])

    console.log(produ)
   
    useEffect(() => {
        PedirDatos()
        .then( (res) => {
            setProdu(res)

        })
        .finally( () => {
            console.log("Terminamos")
        })
    

    }, [])

    return(
        <div>
            <ListaDeComponentes produ={produ}/>
        </div>
    )

}