import { useCartDispatch, useCartState } from "../context/cart";
import React from 'react';
import commerce from "../lib/commerce";
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

function CartItem({ id, name, quantity, line_total }) {
  const { setCart } = useCartDispatch();

  const handleUpdateCart = ({ cart }) => setCart(cart);

  const removeItem = () => commerce.cart.remove(id).then(handleUpdateCart);

  const decrementQuantity = () => {
    quantity > 1
      ? commerce.cart
          .update(id, { quantity: quantity - 1 })
          .then(handleUpdateCart)
      : removeItem();
  };



  const incrementQuantity = () =>
    commerce.cart.update(id, { quantity: quantity + 1 }).then(handleUpdateCart);

  return (
  <div className = "d-flex align-items-center justify-content-center p-3 mb-2 bg-light text-white">
    <Head><title>Manage Your Bookings - Skyhub</title></Head>   
    <div className = "card text-black ">
      <div className = "card-body ">
        Flight Destination
        <input className = "form-control" type = "text" placeholder = {name} readOnly/>
        Price
        <input className = "form-control" type = "text" placeholder = {line_total.formatted_with_symbol} readOnly/>
        ㅤ
        <div>
          <button className = "btn btn-light text-dark" onClick={decrementQuantity}><strong>-</strong></button>⠀
          <button className = "btn btn-light text-dark"><strong>{quantity}</strong></button>⠀
          <button className = "btn btn-light text-dark" onClick={incrementQuantity}><strong>+</strong></button>‎‎‎⠀
          <button className = "btn btn-light text-dark" onClick={removeItem}><strong>REMOVE</strong></button>⠀
        </div>
      </div>
    </div>
  </div>
  );
}

export default function CartPage() {
  const { line_items, subtotal } = useCartState();

  const isEmpty = line_items.length === 0;

  if (isEmpty) return (
  <div>
    <div className = "d-flex align-items-center bg-light" >
      <nav className = "navbar navbar-expand-lg navbar navbar-light bg-light">
        <button className = "navbar-toggler" type = "button" data-toggle = "collapse" data-target = "#navbarTogglerDemo03" aria-controls = "navbarTogglerDemo03" aria-expanded = "false" aria-label = "Toggle navigation">
          <span className = "navbar-toggler-icon"></span>
        </button>  
                    <nav className = "navbar navbar-light bg-light">
                      ㅤ<a className = "navbar-brand mb-0 h1" href = "/">Skyhub</a>
                    </nav>
                
      <div className = "collapse navbar-collapse" id = "navbarTogglerDemo03">
        <ul className = "navbar-nav mr-auto mt-2 mt-lg-0">
          <li className = "nav-item active">
            <a className = "nav-link" href = "/">HOME</a>
          </li>
          <li className = "nav-item">
            <a className = "nav-link" href = "#">COVID-19</a>
          </li>
          <li className = "nav-item">
            <a className = "nav-link" href = "/product">SERVICES</a>
          </li>  
          <li className = "nav-item">
            <a className = "nav-link position-static" href = "/cart"><img src = "cart.svg"></img></a>
          </li>  
        </ul>  
      </div>
      </nav>
  </div>

  <div>
    <div className="d-flex align-items-center justify-content-center p-3 mb-2 bg-light text-dark" >
      <div className = "container p-3 mb-2 bg-light text-dark">
        <div className = "row">
          <div className = "col-sm">
            <div className = "card text-center">
              <div className = "card-body">
              <img class="card-img-top" src="618woUnsjeL_286x180.png" alt="Card image cap"/>

                <h5 className = "card-title">EMPTY CART!</h5>
                  <p className = "card-text">Looks like you do not currently have any bookings with us yet.</p>
                  <p className = "card-text">Get started by exploring your options below!</p>
                      <a className = "btn btn-primary" href = "/categories" role = "button">View Our Services</a>
                    </div>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </div>
  </div>
  )

  return (
  <div>
      <div className = "d-flex align-items-center bg-light" >
        <nav className = "navbar navbar-expand-lg navbar navbar-light bg-light">
          <button className = "navbar-toggler" type = "button" data-toggle = "collapse" data-target = "#navbarTogglerDemo03" aria-controls = "navbarTogglerDemo03" aria-expanded = "false" aria-label = "Toggle navigation">
            <span className = "navbar-toggler-icon"></span>
          </button>  
                    <nav className = "navbar navbar-light bg-light ">
                      ㅤ<a className = "navbar-brand mb-0 h1" href = "/">Skyhub</a>
                    </nav>
                
          <div className = "collapse navbar-collapse" id = "navbarTogglerDemo03">
            <ul className = "navbar-nav mr-auto mt-2 mt-lg-0">
              <li className = "nav-item active">
                <a className = "nav-link" href = "/">HOME</a>
              </li>
              <li className = "nav-item">
                <a className = "nav-link" href = "/covid">COVID-19</a>
              </li>
              <li className = "nav-item">
                <a className = "nav-link" href = "/product">SERVICES</a>
              </li>  
              <li className = "nav-item">
                <a className = "nav-link position-static" href = "/cart"><img src = "cart.svg"></img></a>
              </li>  
            </ul>  
          </div>
        </nav>
      </div>
   
   <div className = "container-fluid align-items-center p-3 mb-2 bg-light text-white"style = {{ height: "100vh" }} >
     <div className = "container-fluid align-items-center p-3 mb-2 bg-light text-white">
        {/* <h1 className="text-center text-dark">YOUR FLIGHTS</h1>  */}
        {line_items.map((item) => (
        <CartItem key={item.id} {...item} />
        ))}

      <hr />
      <h6 className = "text-center text-dark"><strong>SUB-TOTAL </strong>‎‎{subtotal.formatted_with_symbol}</h6>
      </div>
        <div className = "container p-3 mb-2 bg-light text-dark" >
          <div className ="row">
            <div className = "col text-center">
              <button className = "btn btn-dark">CHECKOUT</button>
            </div>
          </div>
        </div>
    </div>
    <div className = "d-flex container-fluid fixed-bottom justify-content-center p-3 mb-2 bg-light text-dark"><p className = "text-center"></p><p className = "text-center">© 2021 Skyhub</p></div>
  </div>
  );
}