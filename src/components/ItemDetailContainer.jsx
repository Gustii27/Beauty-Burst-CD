import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loader from "./Loader";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(()=>{
        const db = getFirestore();
        const itemRef = doc(db, "items", id);

        getDoc(itemRef).then((snapshot) => {
            if(snapshot.exists()) {
                setItem( { id: snapshot.id, ...snapshot.data() })
                setLoading(false)
            }
        }).catch((error) => console.log({ error }));
    }, [])

    return (
            <div>
                {loading ? (<Loader />) : (
                    <div className="container d-flex justify-content-center align-items-center mt-5">
                    <div className="row">
                        <ItemDetail item={item} />
                    </div>
            </div>)}
            </div>
    )
}

export default ItemDetailContainer;