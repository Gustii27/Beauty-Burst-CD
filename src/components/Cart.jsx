import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { getFirestore, collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { Container } from "react-bootstrap";

function Cart() {
    const { productsAdded } = useContext(CartContext);
    const db = getFirestore();

    function updateOrder(productId, finalStock) {
        const itemRef = doc(db, "items", productId);
        updateDoc(itemRef, { stock: finalStock }).catch((error) => console.log({ error }));
    }

    function sendOrder() {
        const collectionRef = collection(db, "orders");
        const total = productsAdded.reduce((acc, product) => acc + product.quantity * product.price, 0);

        const order = {
            buyer: { name: "Gustavo", email: "ejemplo@gmail.com", phone: "00000" },
            items: productsAdded,
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
                    <span>Name: {product.title}</span>
                    <br />
                    <span>Quantity: {product.quantity}</span>
                </div>
            ))}

            <button onClick={sendOrder}>Pagar</button>
        </Container>
    );
}

export default Cart;