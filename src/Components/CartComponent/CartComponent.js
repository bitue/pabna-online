import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SingleProduct from '../SingleProduct/SingleProduct';

const CartComponent = () => {
    const products = useSelector((state)=> state.product.cartList)
    const history = useHistory()
    return (
        <>
        <div className='grid grid-cols-4 '>
            {
                products.map(product => <SingleProduct key={product.key} data = {product} state={'cart'}></SingleProduct>)
            }

           
            
            
        </div>
        <div className='bg-red-500 font-bold text-3xl p-5 flex justify-center items-center'>
                <button onClick={()=> history.push('/checkout')}>Checkout to buy</button>
            </div>
        </>
    );
};

export default CartComponent;