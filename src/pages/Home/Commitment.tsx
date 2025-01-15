import { title } from 'process';
import React from 'react';
import reliability from "../../../src/images/reliable.png";
const Commitment = () => {
    const excellences = [
        {id:1,
         title: 'Reliability',
         icon: reliability
        },
    ]
    return (
        <div className='bg-[#e8e4c1]  p-16'>
            <h1>Committed to Excellence</h1>
            <p>The significance of choosing the right products for construction is great. No compromise should be made in this case if we want a safe future. And we unfailingly work towards creating that safe future for you. With us, you will find:</p>
            <div className='w-[70%] mx-auto '>
                {excellences.map((item)=> (
                    <div key={item.id} className="flex gap-4 items-center">
                        <div> <img src={item.icon} alt="" /> </div>
                        <div> {item.title} </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Commitment;