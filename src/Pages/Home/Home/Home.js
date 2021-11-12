import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import BannerHome from '../BannerHome/BannerHome';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <BannerHome></BannerHome>
            <Products></Products>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;