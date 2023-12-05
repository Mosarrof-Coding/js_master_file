import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CounterApp></CounterApp>
      <CounterApp></CounterApp>
      <Main></Main>
      <Burgar></Burgar>
    </div>
  );
}
// let count = 10;
// function handleCount() {
//   count += 1;
// }

function CounterApp() {
  const [count, setCount] = useState(1);
  function handleCount() {
    setCount(count + 1);
  }
  function handleCount2() {
    setCount(count - 1);
  }
  return (
    <section>
      <div className="header">
        <h2>useState(count +1, -1) = V{count}</h2>
        <div className="btnDIv">
          <button onClick={handleCount}>Increase</button>
          <button onClick={handleCount2}>Decrease</button>
        </div>
      </div>
    </section>
  );
}

function Main() {
  return (
    <section>
      <div className="react2">
        <h1>Props, useState:</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
          assumenda quas explicabo quos error dicta suscipit mollitia animi,
          odio officiis.Lorem ipsum dolor sit amet, consectetur adipisicing
          elit.<br></br> Enim assumenda quas explicabo quos error dicta suscipit
          mollitia animi, odio officiis.
        </p>
      </div>
    </section>
  );
}

const burgurMenu = [
  {
    id: 1,
    name: "chicken burgur",
    descroption: "We fried, tried, and tasted tyle Chicken Patty burgar.",
    price: 4.9,
  },
  {
    id: 2,
    name: "meat burgur",
    descroption:
      "We fried, tried, and tasted tyle Chicken meat.tried, and tasted",
    price: 4.9,
  },
  {
    id: 3,
    name: "beef burgur",
    descroption: "We fried, tried, and tasted tyle beef.",
    price: 1.8,
  },
  {
    id: 4,
    name: "owl burgur",
    descroption: "We fried, tried, and tasted tyle oand tasted tyle owl.",
    price: 5.4,
  },
  {
    id: 5,
    name: "pecock burgur",
    descroption:
      "We fried, tried, and tassted tyle oand tasted tyle owlted tyle oand tasted tyle owl.",
    price: 8,
  },
  {
    id: 6,
    name: "hen burgur",
    descroption: "Weand tasted tyle owlted tyle oand tasted tyle owl.",
    price: 11,
  },
  {
    id: 7,
    name: "fish burgur",
    descroption:
      "fish tasted tyle owlted tyle oand tasted tyle owl. tyle oand tasted tyle ",
    price: 3,
  },
  {
    id: 8,
    name: "google burgur",
    descroption:
      "google tasted tyle owlted tyle oand tasted tyle owl. tyle oand tasted tyle ",
    price: 23,
  },
  {
    id: 9,
    name: "react burgur",
    descroption: "raeale owl. tyle oand tasted tyle ",
    price: 2,
  },
  {
    id: 10,
    name: "props burgur",
    descroption:
      "props owl. tyle oand tasted tyle tyle oand tasted tyletyle oand tasted tyletyle oand tasted tyle",
    price: 12,
  },
];

function Burgar() {
  const burgarList = burgurMenu;
  return (
    <section>
      <div className="burgarBox">
        {burgarList.map((burgar) => (
          <div className="burdarMenu">
            <BurgarMenu burgar={burgar} key={burgar.id}></BurgarMenu>
          </div>
        ))}
      </div>
    </section>
  );
}

function BurgarMenu({ burgar }) {
  console.log(burgar);
  const { id, name, descroption, price } = burgar;
  return (
    <div className=" burgarItem">
      <h2>{id}</h2>
      <h1>{name}</h1>
      <p className="p">{descroption}</p>
      <h3>Price: ${price}</h3>
    </div>
  );
}
export default App;
