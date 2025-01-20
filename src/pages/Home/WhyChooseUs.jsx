import React from 'react';

const WhyChooseUs = () => {
    const USP = [
        {id:1, number:1, title: 'Financial Capability', details: 'As derived from its operations and activities involving foreign trade, economic and technology cooperation, PDL’s sterling reputation for enabling healthy economic profit and ensuring quality work has gained it access to credit, capital and loan support from numerous notable financial institutions.' },
        {id:2, number:2, title: 'PDL enjoys constant and stable business and working relationships with its strategic partners for design, construction and equipment supply.' },
        {id:3, number:3, title: 'Information Advantage', details: 'PDL’s business staff, spread all over the world, has extensive channels of information acquisition and the capacity for fast information feedback and processing.' },
        {id:4, number:4, title: 'Expert Team', details: 'PDL outstanding team is made up of young, ambitious, quality and capable staff numbers' },
    ]
    return (
        <div className='bg-green-900 text-neutral-content my-12'>
            <div className='w-[90%] mx-auto pt-24 pb-36'>
            <h1 className='text-4xl font-bold text-center' >Why Choose us</h1>
            <hr className='border-2 border-gray-300 w-1/3  mx-auto my-6' />
            <div className="grid grid-cols-2 gap-12">
                {USP.map((item)=>(
                    <div key={item.id} className='flex items-start gap-6' >
                        <div className='border-2 border-gray-300 rounded-full py-2 px-5 text-3xl'> {item.number} </div>
                        <div>
                            <p> {item.title} </p>
                            <p>{item.details} </p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;