import React from "react";

const Welcome = () => {
  const services = [
    { id: 1, service: "Construction", image: "https://i.ibb.co/tCTMGvx/cons.jpg" },
    { id: 2, service: "Manufacturing", image: "https://i.ibb.co/cQt2kHL/manu.jpg" },
    { id: 3, service: "Service & Maintenance", image: "https://i.ibb.co/8xFfZJg/serv2.jpg" },
  ];
  return (
    <div className="w-[90%] mx-auto mb-8">
      <div className="text-center w-1/2 mx-auto">
      <h1 className="font-bold text-2xl md:text-4xl">Welcome to Build Better Limited</h1>
      <p className="my-4 text-gray-500">
        A legacy of almost 4 decades, we stepped into manufacturing building
        products in hopes to deliver materials that will be a game-changer in
        the construction sector. Since 2014, our building products have earned a
        much-deserved reputation for being one of the best in the country for
        being safer, stronger, and more durable than others in the industry.
      </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {services.map((item) => (
          <div key={item.id}>
            <div className="card card-compact bg-base-100 w-full shadow-xl">
              <figure>
                <img
                  src={item.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.service}</h2>
                {/* <p className="font-medium">{item.service}</p> */}
                <div className="card-actions justify-start">
                  <button className="btn btn-success text-yellow-400 px-8 text-xl">Details</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
