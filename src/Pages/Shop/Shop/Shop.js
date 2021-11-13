import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import ShopProducts from '../ShopProducts/ShopProducts';

const Shop = () => {
    return (
        <div>
            <Navigation />
            <ShopProducts />
            <Footer />
        </div>
    );
};

export default Shop;