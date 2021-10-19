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
                  <div className = "card-body">
                    <link href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel = "stylesheet" integrity = "sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin = "anonymous"/>
                    <div id = "carouselExampleControls" className = "carousel slide" data-bs-ride = "carousel">
                      <div className = "carousel-inner">
                        <div className = "carousel-item active">
                          <img src = "banner-flights.jpg" className = "d-block w-100" alt = "..."/>
                        </div>
                        <div className = "carousel-item">
                          <img src = "test.jpg" className = "d-block w-100" alt = "..."/>
                        </div>
                        <div className = "carousel-item">
                          <img src = "banner-flights.jpg" className = "d-block w-100" alt = "..."/>
                        </div>
                      </div>
                    <button className = "carousel-control-prev" type = "button" data-bs-target = "#carouselExampleControls" data-bs-slide = "prev">
                      <span className = "carousel-control-prev-icon" aria-hidden = "true"></span>
                      <span className = "visually-hidden">Previous</span>
                    </button>
                    <button className = "carousel-control-next" type = "button" data-bs-target = "#carouselExampleControls" data-bs-slide = "next">
                      <span className = "carousel-control-next-icon" aria-hidden="true"></span>
                      <span className = "visually-hidden">Next</span>
                      </button>
                    </div>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
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