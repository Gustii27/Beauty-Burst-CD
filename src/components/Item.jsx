// COMPONENTE DE CADA TARJETA DE PRODUCTOS // 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const ItemList = (props) => {
    return(
        <Col lg={3}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
        <Card.Title>
            <h4>{props.titulo}</h4>
        </Card.Title>
        <Card.Text>
          <p>${props.precio}</p>
        </Card.Text>
        <Button variant="primary">Comprar</Button>
        </Card.Body>
        </Card>
        </Col>
    )
}

export default ItemList;