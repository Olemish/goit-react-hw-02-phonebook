import React from 'react';
import '../phonebook/phonebook.css';
const Filter = ({ value, onChange }) => (
  <label className="filterName">
    Find contacts by name
    <input className="filter" type="text" value={value} onChange={onChange} />
  </label>
);
export default Filter;
