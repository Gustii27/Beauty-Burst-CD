import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ onAdd, stock }) =>{
    const [counter, setCounter] = useState(1);

    const incrementStock = () =>{
        if(counter < stock) {
            setCounter(counter + 1);
        }
    };

    const decrementStock = () => {
        if(counter > 1) {
            setCounter(counter - 1);
        }
    };

    const handleAddToCart = () => {
        onAdd(counter);
    };

    return (
        <div className="container">
          <div className="btn-group d-flex justify-content-center" role="group" aria-label="Basic outline example">
            <button type="button" className="btn btn-outline-primary" onClick={decrementStock} style={{ color: "black", backgroundColor: "#d8b4fe", borderColor: "#6d28d9" }}>
              -
            </button>
            <button type="button" className="btn btn-outline-primary" style={{ color: "black", backgroundColor: "#d8b4fe", borderColor: "#6d28d9" }}>
              {counter}
            </button>
            <button type="button" className="btn btn-outline-primary" onClick={incrementStock} style={{ color: "black", backgroundColor: "#d8b4fe", borderColor: "#6d28d9" }}>
              +
            </button>
          </div>
          <div className="row mt-3 justify-content-center">
            <div className="col-6">
              <button type="button" className="btn btn-outline-primary btn-block" onClick={handleAddToCart} style={{ color: "white", backgroundColor: "#6d28d9", borderColor: "#6d28d9" }}>
                Agregar al carrito
              </button>
            </div>
            <div className="col-6 d-flex justify-content-center">
          <Link
            to="/"
            className="btn btn-outline-primary"
            style={{ color: "black", backgroundColor: "#d8b4fe", borderColor: "#6d28d9", width: "100%" }}
          >
            <span className="align-items-center" style={{ height: "100%" }}>
              Volver al listado
            </span>
          </Link>
            </div>
          </div>
        </div>
      );
}

export default ItemCount;