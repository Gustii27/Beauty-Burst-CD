import React from "react";
import { useState } from "react";

const ItemCount = ({ onAdd, stock }) =>{
    const [counter, setCounter] = useState(1);

    const incrementStock = () =>{
        if(counter < stock) {
            setCounter(counter + 1);
        }
    };

    const decrementStock = () => {
        if(counter > stock) {
            setCounter(counter - 1);
        }
    };

    const handleAddToCart = () => {
        onAdd(counter);
    };

    return (
        <div className="container">
            <div className="row mb-3">
                <div className="co-md-2">
                    <div className="btn-group" role="group" aria-label="Basic outline example">
                        <button type="button" className="btn btn-outline-primary" onClick={decrementStock}>-</button>
                        <button type="button" className="btn btn-outline-primary">{counter}</button>
                        <button type="button" className="btn btn-outline-primary" onClick={incrementStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <button type="button" className="btn btn-outline-primary" onClick={handleAddToCart}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;