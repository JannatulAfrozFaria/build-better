import React from "react";

const Welcome = () => {
  const services = [
    { id: 1, service: "Construction", image: "" },
    { id: 2, service: "Manufacturing", image: "" },
    { id: 3, service: "Service & Maintenance", image: "" },
  ];
  return (
    <div>
      <h1>Welcome to Build Better Limited.</h1>
      <p>
        A legacy of almost 4 decades, we stepped into manufacturing building
        products in hopes to deliver materials that will be a game-changer in
        the construction sector. Since 2014, our building products have earned a
        much-deserved reputation for being one of the best in the country for
        being safer, stronger, and more durable than others in the industry.
      </p>
      <div className="flex gap-6 items-center">
        {services.map((item) => (
          <div key={item.id}>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <h2 className="font-medium">{item.service} </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
