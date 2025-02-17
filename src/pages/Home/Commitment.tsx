import { title } from 'process';
import React from 'react';
import reliability from "../../../src/images/reliable.png";
import safety from "../../../src/images/safety.png";
import quality from "../../../src/images/quality.png";
import strength from "../../../src/images/strength.png";
import service from "../../../src/images/Service.png";
import money from "../../../src/images/money.png";
import eco from "../../../src/images/eco.png";
const Commitment = () => {
    const excellences = [
        {id:1,
         title: 'Reliability',
         icon: reliability
        },
        {id:2,
         title: 'Safety',
         icon: safety
        },
        {id:3,
         title: 'Unparalleled Quality',
         icon: quality
        },
        {id:4,
         title: 'Strength',
         icon: strength
        },
        {id:5,
         title: 'Extraordinary Service',
         icon: service
        },
        {id:6,
         title: 'ReliaGreat Value for Moneybility',
         icon: money
        },
        {id:7,
         title: 'Eco-friendly Building Solutions',
         icon: eco
        }
    ]
    return (
        <div className='bg-[#efefef]  p-16 mb-16'>
            <h1 className='text-center text-3xl font-semibold'>Committed to Excellence</h1>
            <p className='text-gray-600 text-lg w-3/4 mx-auto text-center my-6 ' >The significance of choosing the right products for construction is great. No compromise should be made in this case if we want a safe future. And we unfailingly work towards creating that safe future for you. With us, you will find:</p>
            <div className='w-[70%] mx-auto grid grid-cols-4 gap-8 items-center '>
                {excellences.map((item)=> (
                    <div key={item.id} className="flex gap-4 items-center">
                        <div> <img className='w-[200px]' src={item.icon} alt="" /> </div>
                        <div> {item.title} </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Commitment;