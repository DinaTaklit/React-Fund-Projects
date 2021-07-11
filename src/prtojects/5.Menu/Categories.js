import React from 'react';

const Categories = ({categories}) => {
  return (
    <div className="btn-container">
      {
        categories.map((category, index) => {
          return (
            <button 
              key={index} 
              className="filter-btn" 
              onClick={() => {
                console.log(category);
            }}>{category}</button>
          );
        })
      }
    </div>
  );
};

export default Categories;