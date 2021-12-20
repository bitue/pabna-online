import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const ProductComponent = () => {
    const [products , setProducts] = useState([]);
    useEffect(()=> {
        fetch('./fake.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
          setProducts(data)
        })
    },[])
    return (
        <div className='grid grid-cols-4 '>
            {
                products.map(product => <SingleProduct key={product.key} data = {product}></SingleProduct>)
            }
            
            
        </div>
    );
};

export default ProductComponent;