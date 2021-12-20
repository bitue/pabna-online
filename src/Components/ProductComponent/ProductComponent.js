import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../redux/slices/productSlice';

import SingleProduct from '../SingleProduct/SingleProduct';

const ProductComponent = () => {
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(fetchProduct())
        
    }, [])

    const products = useSelector((state) => state.product.discover)
   
    // const [products , setProducts] = useState([]);
    // useEffect(()=> {
    //     fetch('./fake.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //       setProducts(data)
    //     })
    // },[])
    return (
        <div className='grid grid-cols-4 '>
            {
                products.map(product => <SingleProduct key={product.key} data = {product}></SingleProduct>)
            }
            
            
        </div>
    );
};

export default ProductComponent;