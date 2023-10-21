import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { collection , getDocs, getFirestore, query, where} from "firebase/firestore";
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';




const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [titulo, setTitulo] = useState("Todos los Productos");

    const category= useParams().category;

    
    const [isLoading, setIsLoading] = useState(true); 


    useEffect ( () =>{
        const db = getFirestore();
        const itemCollection = collection(db, "zapas");
        

        
    const q = category ? 
    query(itemCollection, where("category", "==", category)) : itemCollection;
    
    setIsLoading(true);  
   
     

        getDocs(q)
            .then(snapshot =>{
            const allData =  snapshot.docs.map( document =>({id: document.id, ...document.data()}))
            if(category){
                setTitulo(`Esta es la Sección ${category}`);
            }else{
                setTitulo("Estos son todos nuestros Productos");
            }
            
            setItems(allData);
            
        })
        .finally(() => setIsLoading(false));
        

    },[category])
    
    return (
        <Container className='productos'>
            <Row >
            
            {isLoading ? (
                <Spinner /> 
            ) : (
                items.length > 0 && <ItemList items={items} titulo={titulo} />
            )}
            </Row>
        </Container>
    );
}

export default ItemListContainer