//ItemDetail => recibe un objeto, imprime los datos y llama al componente contador.
import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const onAdd = (quantity) => {
        console.log("Ha agreado ${quantity} productos al carrito");
    }
    
    return (
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <img src={item.image} className="img-fluid" alt={item.titulo}></img>
                <h1>{item.titulo}</h1>
                <p>${item.precio}</p>
            </div>

            <div>
                <ItemCount stockItems = {10} onAdd = {onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail;