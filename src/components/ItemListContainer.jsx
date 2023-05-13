import {Link} from  "react-router-dom";

function ItemListContainer(){
    return(
        <div>
            <h1>esto es una prueba</h1>
            <Link to="/cart">
                <button>ir carrito</button>
            </Link>
        </div>
    );
}

export default ItemListContainer;