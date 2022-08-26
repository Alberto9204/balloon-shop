import { producto } from '../Data/Item/Item'

export const PedirDatos = () => { 
    return new Promise ( (resolve, reject) =>{
        setTimeout(() => {
            resolve(producto)
        }, 2000)
} )

}