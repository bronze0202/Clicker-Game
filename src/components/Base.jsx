import React from 'react'

const Base = ({ clicked }) => (
  <div className="base">
    <img className="button"
        onClick={clicked} 
        src="../public/cwlogo1.png" />
  </div>
)

export default Base;