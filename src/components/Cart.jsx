import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { getFirestore, collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";

function Cart() {
    const { productsAdded, removeItem } = useContext(CartContext);
    const db = getFirestore();

    function updateOrder(id, finalStock) {
        const itemRef = doc(db, "items", id);
        updateDoc(itemRef, { stock: finalStock }).catch((error) => console.log({ error }));
    }

    function sendOrder() {
        const collectionRef = collection(db, "orders");
        const total = productsAdded.reduce((acc, product) => acc + product.quantity * product.precio, 0);

        const order = {
            buyer: { name: "Gustavo", email: "ejemplo@gmail.com", phone: "00000" },
            items: productsAdded.map((product) => ({
                categoria: product.categoria,
                stock: product.stock,
                imagen: product.imagen,
                precio: product.precio,
                titulo: product.titulo,
            })),
            total,
        };

        addDoc(collectionRef, order)
            .then(() => {
                productsAdded.forEach((product) => {
                    const finalStock = product.stock - product.quantity;
                    updateOrder(product.id, finalStock);
                });
            })
            .catch((error) => console.log({ error }));
    }

    return (
        <Container className="d-flex justify-content-center align-items-center mt-5">
            <Card style={{ width: "30rem" }}>
                <Card.Body>
                    <Card.Title>Productos en el carrito</Card.Title>
                    <ListGroup>
                        {productsAdded.map((product) => (
                            <ListGroup.Item key={product.id} className="d-flex justify-content-between align-items-center">
                                <div>
                                    <div>
                                        <span>Nombre del Producto: {product.titulo}</span>
                                    </div>
                                    <div>
                                        <span>Cantidad Productos: {product.quantity}</span>
                                    </div>
                                </div>
                                <div>
                                    <Button variant="danger" onClick={() => removeItem(product.id)}><i className="bi bi-trash3"></i></Button>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <div className="d-flex justify-content-between mt-3">
                        <Button variant="primary" onClick={sendOrder} style={{ color: "black", backgroundColor: "#d8b4fe", borderColor: "#d8b4fe" }}>Pagar</Button>
                        <Link to="/" className="btn btn-outline-primary" style={{ color: "black", backgroundColor: "#d8b4fe", borderColor: "#d8b4fe" }}>Ir a los productos</Link>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Cart;