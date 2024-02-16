import { useState } from 'react';
import data from './data'
const App = () => {
  const [foods,setFoods] = useState(data)
  console.log(foods)
  return <h2>Menu Starter</h2>;
};
export default App;
