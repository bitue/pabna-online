import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCartList} from '../../redux/slices/productSlice';

const SingleProduct = ({data, state}) => {
 
    const {img , key , price, name, seller , star , url , category} = data ;
    const dispatch = useDispatch();
    console.log(state)
    return (
        <div className='border-2'>
           <div className='p-3 rounded-2xl '>
               <div className='flex justify-center items-center'>
                   <img src={img}/>
               </div>
               <div className='items-center'>
                   <h1>
                       {name} 
                   </h1>
                   <div className='flex justify-evenly '>
                   <p>Category : {category}</p>
                   <p>seller: {seller}</p>

                   </div>
                   <div>
                       <p className="text-red-500 ">Price : ${price}</p>

                   </div>
                   
                 
                   <p>
                       {
                           [ ...Array(star).keys() ].map((ele) => <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                         </svg>)
                       }
                        {
                           [ ...Array(5-star).keys() ].map((ele) => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                         </svg>)
                       }
                   </p>


                   { state === 'discover' ? 
                        <div className='space-x-3'>
                        <button  onClick={()=> dispatch(addToCart(data))}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 inline text-red-500 " viewBox="0 0 20 20" fill="currentColor">
                                     <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                     </svg></button>
 
                               
                    </div> : (state ==='cart' ? <button onClick={ ()=> dispatch(removeFromCartList(data.key))}>Remove</button> : null)
                    

                   }

                   {
                       state=== 'cart' ?<div><p className='inline'>Quantity</p> <input title='add the quantity' className='bg-red-100 border-2 w-16 ' id='qty' defaultValue={1}  type='number' />  <button onClick={()=>document.getElementById('qty').value = document.getElementById('value')+1}>+</button></div> : null
                   }
                    
                   
               </div>
           </div>


            
        </div>
    );
};

export default SingleProduct;