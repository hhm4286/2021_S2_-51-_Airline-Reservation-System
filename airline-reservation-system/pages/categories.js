import commerce from "../lib/commerce";
import CategoryList from "../components/CategoryList";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

export async function getStaticProps() {
  const { data: categories } = await commerce.categories.list();

  return {
    props: {
      categories,
    },
  };
}

export default function CategoriesPage({ categories }) {
  return (
  <React.Fragment>
    <>
    <Head><title>Our Services - Skyhub</title></Head>
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
        <div className = "d-flex align-items-center justify-content-center p-3 mb-2 bg-light text-dark" style = {{ height: "100vh" }}>
          <div className = "container">
            <div className = "row">
              <div className = "col-sm">
                <div className = "card">
                  <img src = "banner-flights.jpg" className = "card-img-top" alt = "Logo"/>
                  <div className = "card-body">
                    <h5 className = "card-title">Browse our Services</h5> Locations from Wellington, Christchurch, and more!
                    <hr className = "my-4"/>
                    <p className = "card-text"><CategoryList categories={categories}/></p>
                    </div>
                    <div className = "container-fluid fixed-bottom"><p className = "text-center"></p><p className = "text-center">© 2021 Skyhub</p>
                  </div>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </div>
      </>
    </React.Fragment>
  );
}