import React, { useState } from 'react';

function IconDisplay({ iconFileName, altName }) {
  const [hoveredAlt, setHoveredAlt] = useState(null);
  const separator = <span>&nbsp;&nbsp;</span>;

  return (
    <div title={altName}>
      <img
        className="pierre-icon"
        src={require(`../assets/icons/resize100/${iconFileName}.png`)}
        alt={altName}
      />
      {separator}
    </div>
  );
}

export default IconDisplay;
