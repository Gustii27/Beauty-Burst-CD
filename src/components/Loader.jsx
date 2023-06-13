import React, { useEffect, useState } from "react";
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    }, [])

    if(loading) {
        return (
            <div style={styles.container}>
                <InfinitySpin 
                color= "#4fa94d"
                width= "200" />
            </div>
        );
    }

    return <Root />;
};

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    },
};

export default Loader;
