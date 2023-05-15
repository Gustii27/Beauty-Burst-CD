// COMPONENTE DE CADA TARJETA DE PRODUCTOS, DEPENDIENTO DE LA CATEGORÍA //
import listProducts from "./listProducts.json";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Item from "./Item";
import { useEffect, useState } from "react";

const ItemList = () => {
    const [products, setProducts] = useState([])

    const getProducts = async () =>{
        const response = await fetch(listProducts)
        const data = await response.json()
        setProducts(data.categoria)
    }   
    
    useEffect(() =>{
        getProducts()
    }, [])
    
    return(
        <Container fluid>
            <Row>
                {products.map(p => <Item
                key={p.id}
                nombre={p.titulo}
                image={p.image}
                />)}
            </Row>
        </Container>
    )
}

export default ItemList;