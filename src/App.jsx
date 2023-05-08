/* eslint-disable react/jsx-key */
import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./Components/CoffeeCard/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <div className="m-20">
      <h1 className="text-6xl text-purple-600 mb-10 text-center">
        I have {coffees.length} in my store
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {coffees.map((coffee) => (
          <CoffeeCard coffee={coffee} coffees = {coffees} setCoffees = {setCoffees} key={coffee._id}></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
