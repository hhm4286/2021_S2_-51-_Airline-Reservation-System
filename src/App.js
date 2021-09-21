// import Feature from "./components/features/Feature";
// import Header from "./components/header/Header";
// import Destinations from "./components/destinations/Destinations";
// import Register from "./components/registration/Register";
// import Footer from "./components/footer/Footer";
// import Stuffs from "./components/stuffs/Stuffs";
// import Sidebar from './components/sidebar/Sidebar';
// import Topbar from "./components/topbar/Topbar";
// import About from "./pages/about/About";
// import Contact from './pages/contact/Contact';
// import Flight from './pages/booking/Booking';
// import Home from './components/header/Header';
import RegisteredCustomer from "./pages/registeredCustomer/RegisteredCustomer";
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  /* behavior, whether our menu open or not */
  // const [menuOpen, setMenuOpen] = useState(false) // useState used  

  return (
    <>
      <div className="app">
        <Router>
          {/* <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
          <div className="sections">
            <Switch>
              {/* <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/flight" exact component={Flight} /> */}
            </Switch>
            {/* <Header />
            <Feature />
            <Register />
            <Destinations />
            <Stuffs />
            <Footer /> */}
            <RegisteredCustomer />

          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
