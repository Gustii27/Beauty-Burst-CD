import { createContext, useState } from "react";
import React from "react";

export const CartContext = createContext();

export function CustomProvider({ children }) {
    const [productsAdded, setProductsAdded] = useState([]);

    function onAdd(product, quantity) {
        const isAlreadyAdded = isInCart(product);

        if (isAlreadyAdded) {
            const productToModify = productsAdded.find((productAdded) => productAdded.id === product.id);

            const productToModified = {
                ...productToModify,
                quantity: productToModify.quantity + quantity,
            };

            setProductsAdded((prevState) =>
                prevState.map((productAdded) =>
                    productAdded.id === product.id ? productToModified : productAdded
                )
            );
        } else {
            setProductsAdded((prevState) => prevState.concat({ ...product, quantity }));
        }
    }

    function removeItem(itemId) {
        setProductsAdded((prevState) => prevState.filter((productAdded) => productAdded.id !== itemId));
    }

    function clear() {
        setProductsAdded([]);
    }

    function isInCart(product) {
        return productsAdded.some((productAdded) => productAdded.id === product.id);
    }

    return (
        <CartContext.Provider value={{ productsAdded, onAdd, removeItem, clear, isInCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default CustomProvider;