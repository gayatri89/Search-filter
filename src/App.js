import { useState } from "react";
import "./styles.css";

export default function App() {
  const list = [
    "Banana",
    "Orange",
    "Pinapale",
    "Apple",
    "Chikoo",
    "Grapes",
    "Mango",
    "Pomegranate"
  ];

  const [filterList, setFilterList] = useState();

  const seachFilter = (event) => {
    if (event.target.value === "") {
      setFilterList(list);
      return;
    }

    /**
     * Item convert into lowercase;
     * indexOf will help you to check position/charchter using input
     */
    const filterValues = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filterValues);
    console.log(filterValues);
  };

  return (
    <div className="App">
      <h1>Search Filter From Lists</h1>
      <h3>Keep going or go home</h3>

      <input type="text" name="query" onChange={seachFilter} />

      <ul>
        {filterList &&
          filterList.map((item, index) => (
            <li key={index}>{item}</li> //Display each item
          ))}
      </ul>
    </div>
  );
}
