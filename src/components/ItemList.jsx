import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Item from "./Item";

const ItemList = ({items}) => {
    return(
        <Container fluid>
            <Row className='justify-content-center'>
                {items.map(p => <Item
                key={p.id}
                id={p.id}
                titulo={p.titulo}
                imagen={p.imagen}
                precio={p.precio}
                marca={p.marca}
                />)}
            </Row>
        </Container>
    )
}

export default ItemList;