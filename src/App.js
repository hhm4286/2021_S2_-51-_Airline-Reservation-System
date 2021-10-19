import Feature from "./components/features/Feature";
import Header from "./components/header/Header";
import Destinations from "./components/destinations/Destinations";
import Register from "./components/registration/Register";
import Footer from "./components/footer/Footer";
import Stuffs from "./components/stuffs/Stuffs";
import Sidebar from './components/sidebar/Sidebar';
import Topbar from "./components/topbar/Topbar";
// import Contact from './pages/contact/Contact';
import Home from './components/header/Header';
import Cart from "./pages/cart/Cart";
import Product from "./pages/product/Product";
import Categories from "./pages/categories/Categories";
import Flight from './pages/booking/Booking';
// import RegisteredCustomer from "./pages/registeredCustomer/RegisteredCustomer";
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  /* behavior, whether our menu open or not */
  const [menuOpen, setMenuOpen] = useState(false) // useState used  

  return (
    <>
      <div className="app">
        <Router>
          <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <div className="sections">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/product" exact component={Product} />
              <Route path="/categories" exact component={Categories} />
              <Route path="/flight" exact component={Flight} />
            </Switch>
            {/* <Header />
            <Feature />
            <Register />
            <Destinations />
            <Stuffs />
            <Footer /> */}
            {/* <RegisteredCustomer /> */}

          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
