import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';


const Item = (props) => {
    return(
      <Card className="product-card">
        <div className="product-image">
          <img src={props.imagen} alt={props.titulo} />
        </div>
      <Card.Body>
        <div className="product-details">
          <h5 className="product-name">{props.titulo}</h5>
          <p className="product-price">${props.precio}</p>
        </div>
        <Button variant="primary" as={NavLink} to={`/item/${props.id}`} className="product-button">
          Ver detalle
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;