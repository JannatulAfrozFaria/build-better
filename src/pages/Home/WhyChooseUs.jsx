import React from 'react';

const WhyChooseUs = () => {
    const USP = [
        {id:1, number:1, title: 'Financial Capability', details: 'As derived from its operations and activities involving foreign trade, economic and technology cooperation, PDL’s sterling reputation for enabling healthy economic profit and ensuring quality work has gained it access to credit, capital and loan support from numerous notable financial institutions.' },
        {id:2, number:2, title: 'PDL enjoys constant and stable business and working relationships with its strategic partners for design, construction and equipment supply.' },
        {id:3, number:3, title: 'Information Advantage', details: 'PDL’s business staff, spread all over the world, has extensive channels of information acquisition and the capacity for fast information feedback and processing.' },
        {id:4, number:4, title: 'Expert Team', details: 'PDL outstanding team is made up of young, ambitious, quality and capable staff numbers' },
    ]
    return (
        <div className='bg-green-900 text-neutral-content mt-12 mb-48 '>
            <div className='w-[90%] mx-auto pt-24 pb-48'>
            <h1 className='text-4xl font-bold text-center' >Why Choose us</h1>
            <hr className='border-2 border-gray-300 w-1/3  mx-auto my-6' />
            <div className="grid grid-cols-2 gap-12 relative">
                {USP.map((item)=>(
                    <div key={item.id} className='flex items-start gap-6' >
                        <div className='border-2 border-green-500 rounded-full p-2 text-3xl bg-green-600'> 
                            <div className='bg-green-500 py-2 px-5 rounded-full font-semibold'>
                                {item.number}
                            </div> 
                        </div>
                        <div>
                            <p> {item.title} </p>
                            <p>{item.details} </p>
                        </div>
                    </div>
                ))}
                <div className="absolute -bottom-60 bg-gray-300 p-16 w-full">
                        <h1 className='text-green-800 text-center text-3xl'>Build Better At A Glance</h1>
                        <div className="grid grid-cols-4-gap-6"></div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;