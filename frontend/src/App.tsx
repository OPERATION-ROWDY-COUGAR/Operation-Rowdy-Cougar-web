import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  };

  return (
    <Router>
      <div className="grid-container">
        <header>
          <div className="grid-container">
            <header className="header">
              <div className="brand">
                <button onClick={openMenu}>&#9776;</button>
                <Link to="/">Operation Rowdy Cougar</Link>
              </div>
              <div className="header-links">
                <Link to="/">Home</Link>
                <Link to="/products">Catalog</Link>
              </div>
            </header>
          </div>
        </header>

        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul>
            <li>
              <a href="index.html">Pants</a>
            </li>
            <li>
              <a href="index.html">Shirts</a>
            </li>
          </ul>
        </aside>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>

        <footer>&copy; 2022 Operation Rowdy Cougar</footer>
      </div>
    </Router>
  );
}

export default App;