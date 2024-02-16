import { useState } from "react";
import data from "./data";
import Menu from "./Menu";
import Title from "./Title";
import Categories from "./Categories";
import menu from "./data";

const tempSet = ["all", ...new Set(data.map((f) => f.category))];
const App = () => {
  const [foods, setFoods] = useState(data);
  const [categories, setCategories] = useState(tempSet);
  const filterItems = (category) => {
    category == "all"
      ? setFoods(menu)
      : setFoods(menu.filter((f) => f.category == category));
  };
  return (
    <main>
      <section className="menu">
        <Title text={"Our Menu"} />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu foods={foods} />
      </section>
    </main>
  );
};
export default App;
