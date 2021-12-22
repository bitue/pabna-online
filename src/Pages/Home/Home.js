import React from 'react';
import Banner from '../../Components/Banner/Banner';
import ProductHome from '../../Components/ProductHome/ProductHome';
import Nav from '../../SharedComponents/Nav/Nav';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Banner></Banner>
            <ProductHome></ProductHome>
            
        </div>
    );
};

export default Home;