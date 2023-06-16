import { createContext, useState } from "react";
import React from "react";

export const CartContext = createContext();

export function CustomProvider({ children }) {
    const [productsAdded, setProductsAdded] = useState([]);

    function addToCart(product, quantity) {
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
        const updatedProducts = productsAdded.map((productAdded) => {
          if (productAdded.id === itemId) {
            return {
              ...productAdded,
              quantity: productAdded.quantity - 1,
            };
          }
          return productAdded;
        });
    
        setProductsAdded(updatedProducts.filter((productAdded) => productAdded.quantity > 0));
      }

    function clear() {
        setProductsAdded([]);
    }

    function isInCart(product) {
        return productsAdded.some((productAdded) => productAdded.id === product.id);
    }
    console.log(productsAdded);
    return (
        <CartContext.Provider value={{ productsAdded, addToCart, removeItem, clear, isInCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default CustomProvider;