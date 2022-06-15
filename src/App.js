import "./styles.css";

export default function App() {
  const filterList = [
    "Banana",
    "Orange",
    "Pinapale",
    "Apple",
    "Chikoo",
    "Grapes",
    "Mango",
    "Pomegranate"
  ];

  const seachFilter = (val) => {
    console.log("test", val);
  };

  return (
    <div className="App">
      <h1>Search Filter From Lists</h1>
      <h3>Keep going or go home</h3>

      <input
        type="text"
        name="query"
        onChange={(e) => seachFilter(e.target.value)}
      />

      <ul>
        <li>Banana</li>
      </ul>
    </div>
  );
}
