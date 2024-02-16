import { useState } from "react";
import data from "./data";
import Menu from "./Menu";
import Title from "./Title";

const tempSet = ["all", ...new Set(data.map((f) => f.category))];
const App = () => {
  const [foods, setFoods] = useState(data);
  const [categories, setCategories] = useState(tempSet);
  return (
    <main>
      <section className="menu">
        <Title text={"Our Menu"} />
        <Menu foods={foods} />
      </section>
    </main>
  );
};
export default App;
