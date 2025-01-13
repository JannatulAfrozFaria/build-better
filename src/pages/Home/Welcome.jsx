import React from 'react';

const Welcome = () => {
    const services = [
        {id:1,
         service: 'Construction'
        }
    ]
    return (
        <div>
            <h1>Welcome to
           Build Better Limited.</h1>
            <p>A legacy of almost 4 decades, we stepped into manufacturing building products in hopes to deliver materials that will be a game-changer in the construction sector. Since 2014, our building products have earned a much-deserved reputation for being one of the best in the country for being safer, stronger, and more durable than others in the industry.</p>
            <div className="flex gap-6 items-center"></div>
        </div>
    );
};

export default Welcome;