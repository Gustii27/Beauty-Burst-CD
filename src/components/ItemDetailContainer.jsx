import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        const db = getFirestore();
        const itemRef = doc(db, "items", id);

        getDoc(itemRef).then((snapshot) => {
            if(snapshot.exists()) {
                setItem( { id: snapshot.id, ...snapshot.data() })
            }
        }).catch((error) => console.log({ error }));
    }, [])

    return (
            <div className="container">
                <div className="row">
                    <ItemDetail item={item} />
                </div>
            </div>
    )

}

export default ItemDetailContainer;