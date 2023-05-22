//Item => recibe la prop de objeto y lo muestra, da pie a la navegacion dinamica al detalle del producto.
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Item = (props) => {
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
        <Button variant="primary">Ver Detalle</Button>
        </Card.Body>
        </Card>
        </Col>
    )
}

export default Item;