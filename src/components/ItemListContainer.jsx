import listProducts from "./listProducts.json";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [item, setItem] = useState([]);
    
    useEffect(() => {
        const promise = new Promise ((resolve) => {
            setTimeout(() => {
                resolve (id ? listProducts.filter(item => item.categoria === id) : listProducts)
            }, 2000)
        });

        promise.then((data) => {
            setItem(data)
        })
    }, [id]);   
    
    return(
        <div>
            <div className="container">
                <div className="row">
                    <ItemList item={item} />
                </div>
            </div>
        </div>
    );
}

export default ItemListContainer;