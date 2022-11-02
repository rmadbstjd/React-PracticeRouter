import React from 'react';
import {useParams} from 'react-router-dom';
const ProductDetail = () => {
    const {id} = useParams();
    console.log("params",id);
    return (
        <div>
            <h1>Product DetaiL!!!</h1>
        </div>
    );
};

export default ProductDetail;