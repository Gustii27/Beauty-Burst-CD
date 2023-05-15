import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Item from "./Item";

const ItemList = (items) => {
    return(
        <Container fluid>
            <Row>
                {items.map(p => <Item
                key={p.id}
                nombre={p.titulo}
                image={p.image}
                />)}
            </Row>
        </Container>
    )
}

export default ItemList;