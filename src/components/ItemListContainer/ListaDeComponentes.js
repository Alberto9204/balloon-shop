import { useEffect, useState  } from 'react'
import { ItemList } from '../ItemList/ItemList'
import './ListaDeComponentes.css'
import { useParams } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from '../../firebase/config'

export const ListaDeComponentes = () => {
 const [productos, setProductos]  = useState([])
 const [loading, setLoading] = useState(true)
 const { categoryId } = useParams()

   
    useEffect(() => {
        setLoading(true)
        const productosRef = collection(db, 'Productos')
        const q = categoryId
                  ?query(productosRef, where('category', '==', categoryId))
                  :productosRef  
        getDocs(q)
            .then((resp) => {
                const productosDB =resp.docs.map((doc)=> ({id: doc.id, ...doc.data()}))
                setProductos(productosDB)
            })
            .finally(() =>{
               setLoading(false)
            })
      
         

    }, [categoryId])

    return(
        <div>
            {
              loading 
              ?  
                  <Spinner animation="grow" role="status">
                    <span className=" p-5 col-sm-3">Cargando</span>
                  </Spinner>
              :<ItemList productos={productos}/>
              
            }

        </div>
    )

}
