import {Link} from  "react-router-dom";
import React from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";

function CartWidget(){
    return(
        <>
            <RiShoppingCart2Fill className="fs-5"/>
            <span>1</span>
        </>
    )
}

export default CartWidget;