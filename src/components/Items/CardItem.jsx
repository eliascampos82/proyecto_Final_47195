/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CardItem = ({ item  }) => {
    return (
        <Card style={{ width: '14rem', alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column" }} className='mx-2 mt-4'>

            <Card.Img variant="top" src={item.img}  style={{ height: '20%' }} />
            <Card.Body >
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    precio:$ {item.price}.
                </Card.Text>
                <Card.Text>
                    Stock: {item.stock}
                </Card.Text>
                <Card.Text>
                    Category: {item.category}
                </Card.Text>
                <Link style={{alignItems: "center", justifyContent: "center", display: "flex"}}
                 to={`/detalle/${item.id}`}>
                    <Button variant="primary"  >Ver detalles</Button>
                </Link>
            </Card.Body>
        </Card>
        
    );
}

export default CardItem