import React from 'react';
import '../index.css'; // Add mole-specific styles here

function Mole({ active, onClick }) {
  return (
    <div className="hole" onClick={onClick}>
      <div className={`mole ${active ? 'active' : ''}`}></div>
    </div>
  );
}

export default Mole;
