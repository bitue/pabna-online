import React from 'react';
import CheckoutComponent from '../../Components/CheckoutComponent/CheckoutComponent';
import Nav from '../../SharedComponents/Nav/Nav';

const Checkout = () => {
    return (
        <div>
            <Nav></Nav>
            <CheckoutComponent></CheckoutComponent>
        </div>
    );
};

export default Checkout;