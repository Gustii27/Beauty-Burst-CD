import React, { useContext } from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { CartContext } from "./CartContext";

function CartWidget() {
    const { productsAdded } = useContext(CartContext);

    const totalItems = productsAdded.reduce((total, product) => total + product.quantity, 0);

    return (
        <>
            <RiShoppingCart2Fill className="fs-5" />
            <span> {totalItems} </span>
        </>
    );
}

export default CartWidget;