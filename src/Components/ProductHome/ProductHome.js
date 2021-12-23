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
        <h1 className='text-2xl font-semibold text-2xl text-center'>Our Products </h1>
        <div className='flex justify-center space-x-5 '>

            <button className={state==='laptop' ? 'bg-red-500 px-4 py-1 rounded-2xl font-semibold my-3 ' : 'bg-gray-100 px-4 py-1 rounded-2xl font-semibold my-3 ' } onClick={()=> setState('laptop')}>Laptop</button>
            <button className={state==='android' ? 'bg-red-500 px-4 py-1 rounded-2xl font-semibold my-3 ' : 'bg-gray-100 px-4 py-1 rounded-2xl font-semibold my-3 ' }onClick={()=> setState('android')}>Mobile</button>
            <button className={state==='camera' ? 'bg-red-500 px-4 py-1 rounded-2xl font-semibold my-3 ' : 'bg-gray-100 px-4 py-1 rounded-2xl font-semibold my-3 ' } onClick={()=> setState('camera')}>camera</button>

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