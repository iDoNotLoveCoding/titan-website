import React from "react";

function Shoes({ shoeData }) {
  return (
    <div className="ShoeContainer">
      {shoeData.map((shoe, index) => (
        <div key={index} className="ShoeCard">
          <img src={shoe.image} alt={shoe.brand} />
          <div className="ShoeBrand">
            <p className="ShoeBrandP">{shoe.brand}</p>
          </div>
          <div className="ShoeModel">
            <p className="ShoeModelP">{shoe.model}</p>
          </div>
          <div className="ShoePrice">
            <p className="ShoePriceP">{shoe.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shoes;
