import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import BannerHome from '../BannerHome/BannerHome';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <BannerHome></BannerHome>
            <Products></Products>
        </div>
    );
};

export default Home;