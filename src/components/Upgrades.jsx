import React from 'react'
import UpgradeButton from './Upgrade.jsx'
import information from "../gameInfo";


function Upgrades ({ buy }) {
  

  const upgradeListItems = information.upgrades.map((up, i) => 
    <UpgradeButton click={buy} name={up.name} cost={up.cost} key={i} />
  )

  return(
    <div className="upgrades-container">{upgradeListItems}</div>
  )

}

export default Upgrades;