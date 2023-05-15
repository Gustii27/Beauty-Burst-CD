//toma la prop que le pasa ItemListContainer y hace un map,
//recorre el array de productos y por cada objeto crea un componnete Item.
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Item from "./Item";

const ItemList = ({items}) => {
    return(
        <Container fluid>
            <Row>
                {items.map(p => <Item
                key={p.id}
                titulo={p.titulo}
                image={p.image}
                precio={p.precio}
                />)}
            </Row>
        </Container>
    )
}

export default ItemList;