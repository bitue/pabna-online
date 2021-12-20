import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return ( 
        <div className='flex justify-between items-center bg-red-500 py-3 px-5 '>
             <div>
                <h1 className='font-semibold text-2xl '>Pabna-Shop</h1>
             </div>

             <div className='font-semibold space-x-2'>
                 <NavLink to='/'>Home</NavLink>
                 <NavLink to='/products'>Products</NavLink>
                 <NavLink to='/dashboard'>Dashboard</NavLink>
             </div>

        </div>
       


    );
};

export default Nav;