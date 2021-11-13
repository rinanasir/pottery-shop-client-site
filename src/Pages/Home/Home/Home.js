import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import BannerHome from '../BannerHome/BannerHome';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Navigation />
            <BannerHome />
            <Products />
            <Reviews />
            <Subscribe />
            <Footer />
        </div>
    );
};

export default Home;