import React from 'react';
import Footer from '../shared/Footer/Footer';
import Banner from './Banner';
import Welcome from './Welcome';
import Commitment from './Commitment';
import Benifits from './Benifits';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Welcome />
            <Commitment />
            <Benifits />
        </div>
    );
};

export default Home;