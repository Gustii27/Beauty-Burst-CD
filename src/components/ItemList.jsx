// COMPONENTE DE CADA TARJETA DE PRODUCTOS, DEPENDIENTO DE LA CATEGORÍA //
import listaProductos from "./listProducts.json";

const ItemList = ({item}) => {
    return(
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <img src={item.image} className="img-fluid" alt={item.title}/>
                <h1>{item.title}</h1>
                <p>$ {item.precio}</p>
            </div>
        </div>
    )
}

export default ItemList;