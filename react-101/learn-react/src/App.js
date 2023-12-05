import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <More />
    </div>
  );
}

const phones = [
  { name: "samsung", price: 658, color: "pink", stock: 23 },
  { name: "nokia", price: 40, color: "red", stock: 13 },
  { name: "pexels s3", price: 470, color: "blue", stock: 21 },
  { name: "huaye 23", price: 190, color: "white", stock: 231 },
  { name: "sony erricssion", price: 433, color: "silver", stock: 323 },
];

function Header() {
  return (
    <header>
      <nav>
        <h2>logo Component</h2>
        <div>
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Lohgin</li>
        </div>
      </nav>
    </header>
  );
}

function Main() {
  const allProducts = phones;
  return (
    <main>
      <h1>List of phones</h1>
      <div clssName="phoneMain">
        {allProducts.map((phone) => (
          <div>
            <h2>{phone.name}</h2>
            <h4>{phone.price}</h4>
            <h4>{phone.color}</h4>
            <h6>{phone.stock}</h6>
          </div>
        ))}
      </div>
    </main>
  );
}

function More() {
  return (
    <section>
      <div>
        <h2>Section Component.</h2>
        <li>span</li>
        <li>span</li>
        <li>span</li>
        <li>span</li>
      </div>
    </section>
  );
}

export default App;
