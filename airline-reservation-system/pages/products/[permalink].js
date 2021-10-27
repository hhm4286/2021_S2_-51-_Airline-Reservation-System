import React from "react";
import commerce from "../../lib/commerce";
import { useCartDispatch } from "../../context/cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'

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
  const { data: products } = await commerce.products.list(); //uses commerce api to pull in products

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
    commerce.cart.add(product.id).then(({ cart }) => setCart(cart));
    // alert(product.name + product.variant.price + " has been added to your bookings!") 
    console.log(product.name + " " + product.id.image)


  return (
    <>
    <React.Fragment>
      <Head><title>{product.name} - Skyhub</title></Head>
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
            <a className = "nav-link" href = "/product">SERVICES</a>
          </li>  
          <li className = "nav-item">
                <a className = "nav-link position-static" href = "/cart">Cart</a>
          </li>  
        </ul>  
      </div>
      </nav>
    </div>
    <div>
        
    <div className="d-flex align-items-center justify-content-center p-3 mb-2 bg-light text-dark" style = {{ height: "100vh" }}>
        <div className = "row">
          <div className = "col-sm">
            <div className = "card text-center">
              <div className = "card-body">
                <h5 className = "card-title">{product.name}</h5>
                <p className = "card-text">{product.price.formatted_with_symbol}</p>
                </div>
              </div>
              <p>ㅤ</p>
              <div className = "d-flex container-fluid justify-content-center">

              <button className = "btn btn-primary" onClick = {addToCart}>Add to Cart</button>
            </div>
            </div>
          </div>
   
      </div>
      
      <div className = "d-flex align-items-center justify-content-center p-3 mb-2 bg-light text-black">
        <div class = "container-fluid fixed-bottom justify-content-center">
        <p class = "text-center"></p><p class = "text-center"><a className = "btn btn-primary text-decoration-none" href="/product" role="button">Back to Flights</a>
</p>
          <p class = "text-center"></p><p class = "text-center">© 2021 Skyhub</p>
        </div>
    </div>
     
   
</div>
    </React.Fragment>
    </>
  );
}

