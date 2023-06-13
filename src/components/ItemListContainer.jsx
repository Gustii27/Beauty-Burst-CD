import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Loader from "./Loader";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    
    useEffect(() =>{
        const fetchItems = async () => {
            try {
                const db = getFirestore();
                const collectionRef = collection(db, "items");
                
                let queryRef = query(collectionRef);
                if (id) {
                    queryRef = query(collectionRef, where("categoria", "==", id));
                }

                const querySnapshot = await getDocs(queryRef);
                const fetchedItems = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
                setItems(fetchedItems);
                setLoading(false);
            } catch(error) {console.log({ error })};
        }

        fetchItems();        
    }, [id]);
    
    return(
        <div>
            {loading ? (<Loader />) : (
                <div className="container">
                <div className="row">
                    <ItemList items={items} />
                </div>
            </div>)}
        </div>
    );
}

export default ItemListContainer;