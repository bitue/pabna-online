import React from 'react';
import { useSelector } from 'react-redux';
import {  NavLink } from 'react-router-dom';

const Nav = () => {
    const {cartList ,wishList} = useSelector((state)=> state.product)
    return ( 
        <div className='flex justify-between items-center bg-red-500 py-3 px-5 '>
             <div>
                <h1 className='font-semibold text-2xl '> <NavLink to='/'>PabnaOnline</NavLink></h1>
             </div>

             <div className='font-semibold space-x-2'>

                
                 <NavLink to='/product'>Products</NavLink>
                 <NavLink to='/cart'>Cart <sup>{cartList.length}</sup></NavLink>
                 
                 <NavLink to='/dashboard'>Dashboard</NavLink>
             </div>

        </div>
       


    );
};

export default Nav;