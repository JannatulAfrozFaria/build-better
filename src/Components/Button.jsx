import React from 'react';

const Button = ({text,link}) => {
    return (
        <div>
            <button className=' px-6 py-2 text-white text-xl btn btn-outline outline-white'> <a href={link}> {text} </a> </button>
        </div>
    );
};

export default Button;