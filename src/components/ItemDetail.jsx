//ItemDetail => recibe un objeto, imprime los datos y llama al componente contador.
import React from "react";
import ItemCount from "./ItemCount";
import Card from 'react-bootstrap/Card';

const ItemDetail = ({item}) => {
    const onAdd = (quantity) => {
        console.log("Ha agreado ${quantity} productos al carrito");
    }
    
    return (
        <Card className="product-card">
        <div className="product-image">
          <img src={item.image} alt={item.titulo} />
        </div>
      <Card.Body>
        <div className="product-details">
          <h5 className="product-name">{item.titulo}</h5>
          <p className="product-price">${item.precio}</p>
        </div>
        <div>
            <ItemCount stock = {item.stock} onAdd = {onAdd}/>
        </div>
      </Card.Body>
    </Card>
    )
}

export default ItemDetail;