import { useEffect, useState  } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'
import Spinner from 'react-bootstrap/Spinner';
import { doc, getDoc} from "firebase/firestore"
import { db} from "../../firebase/config"

export const ItemDetailContainer = () => {

    const [item, setItem]  = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()

   
      
       useEffect(() => {
        setLoading(true)
           const docRef = doc(db, 'Productos', itemId)
           getDoc(docRef)
           .then((doc) =>{
            setItem({id: doc.id, ...doc.data()})

           })
           .finally( () => {
             setLoading(false)
           })
       }, [itemId])
   
       return(
           <div>
            {
                loading
                ?
                <Spinner animation="grow" role="status">
                    <span className=" p-5 col-sm-3">Cargando</span>
                </Spinner>
                :<ItemDetail item = { item }/>
            }
               
           </div>
       )
   
   }


