/* eslint-disable react/prop-types */
import { Col } from 'react-bootstrap';

import CardItem from './CardItem';



const ItemList = ({ items, titulo}) => {
    return (
        <>
        
        <h2>{titulo}</h2>
            {
                
                    items.map((item) => (
                    
                        <Col justify-content="center" aling-items="center"  md={4} lg={3} sm={12} key={item.id} >

                        <CardItem item={item} />
                        
                        </Col>
                    
                ))
            }
        </>
    )
}

export default ItemList