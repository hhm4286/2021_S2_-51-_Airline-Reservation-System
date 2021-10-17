import React from "react";
import commerce from "../../lib/commerce";
import { useCartDispatch } from "../../context/cart";
import 'bootstrap/dist/css/bootstrap.min.css';

export async function getStaticProps({ params }) {
  const { permalink } = params;

  const product = await commerce.products.retrieve(permalink, {
    type: "permalink",
  });

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const { data: products } = await commerce.products.list();

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
}

export default function ProductPage({ product }) {
  const { setCart } = useCartDispatch();

  const addToCart = () =>
    commerce.cart.add(product.id, product.variantData).then(({ cart }) => setCart(cart));
    alert(product.name + " has been added to your bookings!") 

  return (
    <>
    <React.Fragment>
      <div className = "d-flex align-items-center bg-light" >
        <nav className = "navbar navbar-expand-lg navbar navbar-light bg-light">
          <button className = "navbar-toggler" type = "button" data-toggle = "collapse" data-target = "#navbarTogglerDemo03" aria-controls = "navbarTogglerDemo03" aria-expanded = "false" aria-label = "Toggle navigation">
            <span className = "navbar-toggler-icon"></span>
        </button>  
        <nav className = "navbar navbar-light bg-light">
        ㅤ<a className = "navbar-brand mb-0 h1" href = "/">Skyhub</a></nav>
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
        </ul>  
      </div>
      </nav>
    </div>
    <div>
        
    <div className="d-flex align-items-center justify-content-center p-3 mb-2 bg-light text-dark" style = {{ height: "100vh" }}>
      <div className = "container">
        <div className = "row">
          <div className = "col-sm">
            <div className = "card text-center">
              <div className = "card-body">
                [IMAGE] <img src = "covid.jpg" className = "card-img"/>
                <h5 className = "card-title">{product.name}</h5>
                <p className = "card-text">{product.price.formatted_with_symbol}</p>
                <button className = "btn btn-primary" onClick = {addToCart}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
    </>
  );
}