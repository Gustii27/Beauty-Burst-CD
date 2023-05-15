import listProducts from "./listProducts.json";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        const promise = new Promise ((resolve) => {
            setTimeout(() => {
                resolve (listProducts)
            }, 2000)
        });

        promise.then((data) => {
            setItems(data)
        })
    }, []);   
    
    return(
        <div>
            <div className="container">
                <div className="row">
                    <ItemList items={items} />
                </div>
            </div>
        </div>
    );
}

export default ItemListContainer;