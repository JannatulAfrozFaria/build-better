import React from 'react';
import Footer from '../shared/Footer/Footer';
import Banner from './Banner';
import Welcome from './Welcome';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Welcome />
        </div>
    );
};

export default Home;