import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const CheckoutComponent = () => {
    const products = useSelector((state)=> state.product.cartList)
    const history = useHistory()
    const reducer = (prev , curr) => {
        var total = prev + parseInt(curr.price) ;
        return total

    }
    const price = products.reduce(reducer , 0);
    console.log(price)
    console.log(products)
    return (
        <div>
            {
                products.map(pro => <div className='flex justify-evenly items-center h-64 bg-red-100 rounded-2xl border-2 w-9/12 mx-auto my-2 p-2'>
                    <div>
                        <img src={pro.img}/>
                    </div>
                    <div>
                        <div>
                           <h1>
                               {pro.name}
                           </h1>
                           <p>${pro.price}</p>
                        </div>
                    </div>
                </div>)
            }

            <div>
                <h1 className='font-bold text-2xl text-center'>Price : <span>${price}</span></h1>
                <h1 className='font-bold text-2xl text-center'>vat : <span>${parseInt(price*.15)}</span></h1>
                <h1 className='font-bold text-2xl text-center'>total : <span>${parseInt(price*.15 + price) }</span></h1>
                <button className='bg-red-500 px-3 py-1 rounded-2xl' onClick={()=> history.push('/payment')}>Payment Confirm</button>
            </div>

            <div>
                
            </div>
            
        </div>
    );
};

export default CheckoutComponent;