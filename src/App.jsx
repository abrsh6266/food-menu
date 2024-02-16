import { useState } from "react";
import data from "./data";
import Menu from "./Menu";
const App = () => {
  const [foods, setFoods] = useState(data);
  console.log(foods);
  return (
    <main>
      <Menu foods={foods} />
    </main>
  );
};
export default App;
