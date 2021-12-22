import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  {fetchProduct}  from '../../redux/slices/productSlice'
import SingleProduct from '../SingleProduct/SingleProduct';



const ProductHome = () => {
    const dispatch = useDispatch();
    const [state , setState] = useState('laptop')

    useEffect(()=> {
        dispatch(fetchProduct(state))
        
    }, [state])

    const products = useSelector((state) => state.product.discover)
    return (
        <>
        <div>
            <button onClick={()=> setState('laptop')}>Laptop</button>
            <button onClick={()=> setState('android')}>Mobile</button>
            <button onClick={()=> setState('camera')}>camera</button>

        </div>
        <div className='grid grid-cols-4 px-3 '>
            {
                products.map(product => <SingleProduct key={product.key} data = {product} state={'discover'}></SingleProduct>)
            }
            
            
        </div>
        </>
    );
};

export default ProductHome;