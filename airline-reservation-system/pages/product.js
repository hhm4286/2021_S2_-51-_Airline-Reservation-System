import commerce from "../lib/commerce";
import ProductList from "../components/productlist";
import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

export async function getStaticProps() {
  const { data: products } = await commerce.products.list();
  const { data: categories } = await commerce.categories.list();

  return {
    props: {
      products,
      categories,
    },
  };
}

export default function ProductsPage({ products }) {
  return (
    <>
    <React.Fragment>
      <Head><title>Flights - Skyhub</title></Head>
      <div className = "d-flex align-items-center bg-light" >
            <nav className ="navbar navbar-expand-lg navbar navbar-light bg-light">
                <button className = "navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className = "navbar-toggler-icon"></span>
                </button>  
                <nav class="navbar navbar-light bg-light">
                ㅤ<a class="navbar-brand mb-0 h1" href = "/">Skyhub</a>
            </nav>
          
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="/">HOME</a>
              </li>
                <li class="nav-item">
                  <a class="nav-link" href="/product">SERVICES</a>
                </li>  
                <li class = "nav-item">
                  <a class = "nav-link position-static" href = "/cart"><img src = "cart.svg"></img></a>
                </li>  
            </ul>  
          </div>
        </nav>
      </div>

    <div className = "d-flex align-items-center justify-content-center p-3 mb-2 bg-light text-black" style = {{ height: "100vh" }}>
      <div class = "container-fluid fixed-bottom"><p class = "text-center"></p><p class = "text-center">© 2021 Skyhub</p>
    </div>

      <ProductList products = {products} />
    </div>

    </React.Fragment>
  </>
  );
}