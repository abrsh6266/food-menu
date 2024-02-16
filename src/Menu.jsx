import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ foods }) => {
  return (
    <div className="section-center">
      {foods.map((f) => {
        return <MenuItem key={f.id} {...f} />;
      })}
    </div>
  );
};

export default Menu;
