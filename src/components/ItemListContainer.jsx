import listProducts from "./listProducts.json";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();
    
    useEffect(() => {
        const promise = new Promise ((resolve) => {
            setTimeout(() => {
                resolve (listProducts)
            }, 1000)
        });

        promise.then((data) => {
            if (id) {
                setItems(data.filter((item) => item.categoria === id))
            }else {
                setItems(data)
            }
        })
    }, [id]);   
    
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