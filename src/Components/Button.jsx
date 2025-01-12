import React from 'react';

const Button = ({text,link}) => {
    return (
        <div>
            <button className=' p-2 text-white btn-outline outline-white'> <a href={link}> {text} </a> </button>
        </div>
    );
};

export default Button;