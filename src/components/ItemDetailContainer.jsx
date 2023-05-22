//ItemDetailContainer => recibe el id por el param y busca dinamicamente el item en la promesa y lo guarda en un estado. Le pasa la prop al componente ItemDetail.
import listProducts from "./listProducts.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect (() => {
        const promise = new Promise((resolve) => {
            setTimeout (() => {
                resolve(listProducts.find(item => item.id === id))
            }, 2000)
        }, []);

        promise.then((data) => {
            setItem(data);
        })
    }, [id]);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <ItemDetail item={item} />
                </div>
            </div>
        </div>
    )

}

export default ItemDetailContainer;