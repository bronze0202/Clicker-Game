import React from "react";

const UpgradeButton = ({ name,cost,buy }) => (
  <div className="UpgradeButton">
    <h3>{name}</h3>
    <p>{cost}</p>
   <button className="buy" onClick={buy(name, cost)} >{`Buy ${name}`}</button>
  </div>
);

export default UpgradeButton;