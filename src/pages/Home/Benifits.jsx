import React from "react";

const Benifits = () => {
  const Benifits = [
    {
      id: 1,
      title: "Reduction inConstruction Cost",
      decription:
        "In the production of bricks, massive land and resources are wasted which consequently drives up construction cost. In such a case, manufacturing and utilizing concrete blocks significantly reduces cost and saves natural resources. Each block can save approximately 25% more natural resources than a brick.",
    },
    {
      id: 2,
      title: "Reduction in Manitenece Cost",
      decription:
        "Concrete blocks offer sustainable advantages over other structures as it requires minimal maintenance and strengthens over time. An example would be of termites and moisture, which can undermine other building materials through rust or rot; has no weakening effect on concrete.",
    },
    {
      id: 3,
      title: "Longevity and Durability",
      decription:
        "Concrete is one of the most durable materials on Earth and unquestionably the most practical home building material. Concrete homes are far less likely to suffer damage in the event of a fire and earthquake and can be reinforced to protect against high winds or earth tremors. If damage does occur, the structural integrity of the home typically remains intact, allowing for easier rebuilding. Your home retains its curb appeal and its value beautifully.",
    },
    {
      id: 4,
      title: "Energy Saving Properties",
      decription:
        "The release of energy from simultaneous heating and cooling from structures lead 80% or more of the greenhouse gases to be generated. This is however, not the case with concrete products as insulated wall systems provide high R-value and thermal mass with low air infiltration providing superior thermal efficiency and optimal energy performance over the long life of the building. Additionally, heating and cooling bills can be lowered by 25% as the insulated concrete walls are not subject to large daily temperature fluctuations. Heating, ventilating and air-conditioning can also be designed with smaller-capacity equipment for additional savings.",
    },
    {
      id: 5,
      title: "Design Flexibility",
      decription:
        "Another advantage of using concrete blocks is its flexibility as a building material. Concrete blocks can be used to build any type of housing feature, columns, archways and other intricate designs. The construction material caters to every need and home requirement.",
    },
  ];
  return (
    <div>
      <h1>Benifits of Concrete Block</h1>
      <div>
        {Benifits.map((item)=>(
            <div key={item.id}>
                <div className="flex justify-between text-white">
                <h1 className="bg-black text-white p-4" > {item.title} </h1>
                <button> + </button>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Benifits;
