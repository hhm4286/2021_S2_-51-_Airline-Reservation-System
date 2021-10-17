import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from "./products";
import React from "react";

export default function ProductList({ products }) {
  if (!products) return null;

  return (
    <ul>
      <div className = "d-flex container p-3 mb-2 bg-light align-items-center align-self-stretch" >
      {products.map((product) => (
        <li key = {product.permalink} style ={{listStyle:'none'}}>
          <Link href={`/products/${product.permalink}`}>
            <p>
               <Product {...product} />
            </p>
          </Link>
        </li>
      ))}
      </div>
    </ul>
  );
}