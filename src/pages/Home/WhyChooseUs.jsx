import React from 'react';

const WhyChooseUs = () => {
    const USP = [
        {id:1,title: 'Financial Capability', details: 'As derived from its operations and activities involving foreign trade, economic and technology cooperation, PDL’s sterling reputation for enabling healthy economic profit and ensuring quality work has gained it access to credit, capital and loan support from numerous notable financial institutions.' },
        {id:2,title: 'PDL enjoys constant and stable business and working relationships with its strategic partners for design, construction and equipment supply.' },
        {id:3,title: 'Information Advantage', details: 'PDL’s business staff, spread all over the world, has extensive channels of information acquisition and the capacity for fast information feedback and processing.' },
        {id:4,title: 'Expert Team', details: 'As derived from its operations and activities involving foreign trade, economic and technology cooperation, PDL’s sterling reputation for enabling healthy economic profit and ensuring quality work has gained it access to credit, capital and loan support from numerous notable financial institutions.' },
    ]
    return (
        <div className='bg-green-900 text-neutral-content'>
            <h1>Why Choose us</h1>
            <hr />
        </div>
    );
};

export default WhyChooseUs;