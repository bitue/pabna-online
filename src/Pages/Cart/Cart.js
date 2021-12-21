import React from 'react';
import CartComponent from '../../Components/CartComponent/CartComponent';
import Nav from '../../SharedComponents/Nav/Nav';

const Cart = () => {
    return (
        <div>
            <Nav></Nav>
            <CartComponent></CartComponent>
        </div>
    );
};

export default Cart;