import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((c) => {
        return (
          <button
            key={c}
            type="button"
            className="btn"
            onClick={() => filterItems(c)}
          >
            {c}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
