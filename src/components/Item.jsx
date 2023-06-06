//Item => recibe la prop de objeto y lo muestra, da pie a la navegacion dinamica al detalle del producto.
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import "./item.css";

const Item = (props) => {
    return(
      <Card className="product-card">
        <div className="product-image">
          <img src={props.image} alt={props.titulo} />
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