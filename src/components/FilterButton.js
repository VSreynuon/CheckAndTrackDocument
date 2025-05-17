import React from 'react';
import { MdFilterAlt } from 'react-icons/md';
import '../styles/filterbutton.css'; 

const FilterButton = () => {
  return (
    <button className="filter-button">
      <MdFilterAlt className="filter-icon" />
      <span className="filter-text">Filter</span>
    </button>
  );
};

export default FilterButton;
