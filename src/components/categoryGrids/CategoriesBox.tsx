import React from 'react';
import './Category.css';
function CategoriesBox({ data }: any) {
  return (
    <div className="category-card">
      <img className="category-image" src={data.image} alt={data.name} />
      <div className="category-name">{data.name}</div>
    </div>
  );
}

export default CategoriesBox;
