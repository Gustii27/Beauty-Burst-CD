import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();
    
    useEffect(() =>{
        const db = getFirestore();
        const collectionRef = collection(db, "items");

        getDocs(collectionRef).then((snapshot) =>{
            setItems(()=> snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        }).catch((error) => console.log({ error }))
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