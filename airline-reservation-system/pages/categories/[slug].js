import commerce from "../../lib/commerce";
import ProductList from "../../components/productlist";
import React from "react";

export async function getStaticProps({ params }) {
  const { slug } = params;

  const category = await commerce.categories.retrieve(slug, {
    type: "slug",
  });

  const { data: products } = await commerce.products.list({
    category_slug: [slug],
  });

  return {
    props: {
      category,
      products,
    },
  };
}
export async function getStaticPaths() {
    const { data: categories } = await commerce.categories.list();
  
    return {
      paths: categories.map((category) => ({
        params: {
          slug: category.slug,
        },
      })),
      fallback: false,
    };
  }

  export default function CategoryPage({ products }) {
    return (
      <React.Fragment>
        <div className = "d-flex align-items-center bg-light" >
          <nav className ="navbar navbar-expand-lg navbar navbar-light bg-light">
            <button className = "navbar-toggler" type = "button" data-toggle = "collapse" data-target = "#navbarTogglerDemo03" aria-controls = "navbarTogglerDemo03" aria-expanded = "false" aria-label = "Toggle navigation">
              <span className = "navbar-toggler-icon"></span>
            </button>  
            <nav className = "navbar navbar-light bg-light">
              <a className = "navbar-brand mb-0 h1" href = "/">Skyhub</a>
            </nav>
        <div className = "collapse navbar-collapse" id = "navbarTogglerDemo03">
          <ul className = "navbar-nav mr-auto mt-2 mt-lg-0">
            <li className = "nav-item active">
              <a className = "nav-link" href = "/">HOME</a>
            </li>
            <li className = "nav-item">
              <a className = "nav-link" href = "#">COVID-19</a>
            </li>
            <li className= "nav-item">
              <a className = "nav-link" href = "/product">SERVICES</a>
            </li>  
          </ul>  
        </div>
          </nav>
        </div>
        <ProductList products={products} />
      </React.Fragment>
    );
  }