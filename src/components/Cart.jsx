import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { getFirestore, collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { Container } from "react-bootstrap";

function Cart() {
    const { productsAdded } = useContext(CartContext);
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
        <Container>
            {productsAdded.map((product) => (
                <div key={product.id}>
                    <span>Nombre: {product.titulo}</span>
                    <br />
                    <span>Cantidad: {product.quantity}</span>
                </div>
            ))}

            <button onClick={sendOrder}>Pagar</button>
        </Container>
    );
}

export default Cart;