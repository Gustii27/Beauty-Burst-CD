import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import Card from 'react-bootstrap/Card';
import { CartContext } from "./CartContext";

const ItemDetail = ({item}) => {
  const {addToCart} = useContext(CartContext);
  const onAdd = (quantity) => {
    addToCart(item, quantity);
  }
    
  return (
    <Card className="product-card">
      <div className="product-image">
        <img src={item.imagen} alt={item.titulo} />
      </div>
    <Card.Body>
      <div className="product-details">
        <h5 className="product-name">{item.titulo}</h5>
        <p className="product-price">${item.precio}</p>
      </div>
      <div className="detail-item">
        <ItemCount stock = {item.stock} onAdd = {onAdd}/>
      </div>
    </Card.Body>
    </Card>
    )
}

export default ItemDetail;