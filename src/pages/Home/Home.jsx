import React from 'react';
import Footer from '../shared/Footer/Footer';
import Banner from './Banner';
import Welcome from './Welcome';
import Commitment from './Commitment';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Welcome />
            <Commitment />
        </div>
    );
};

export default Home;