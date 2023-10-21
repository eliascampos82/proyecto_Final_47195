
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import {doc, getDoc, getFirestore} from "firebase/firestore"
import { useContext } from 'react';

import CartContext from '../../context/CartContext';




// eslint-disable-next-line react/prop-types
const ItemDetailContainer = ( { id }) => {
  
    

   const [item, setItem] = useState(null);

   


    const onAdd =(q)=>{
        addItem(item,q)
       
    }
    const {addItem} =useContext(CartContext);



    useEffect( () =>{

        const db = getFirestore();

        const itemRef = doc(db, "zapas",id)

        getDoc(itemRef)
            .then( (snapshot) => {
                console.log(snapshot.exists())
                if (snapshot.exists()){

                    setItem({
                        id: snapshot.id,
                        ...snapshot.data()
                       
                })
            }
            })
            .catch((err)=> console.log(err))
        

    },[id])
    


    return (
        <>
            {
                item !== null &&
                <ItemDetail item={item} onAdd={onAdd} />

            }
        </>
    )
}

export default ItemDetailContainer