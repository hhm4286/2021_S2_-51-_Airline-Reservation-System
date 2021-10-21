import Link from "next/link";
import Category from "./Category";

export default function CategoryList({ categories }) {
  if (!categories) return null;

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.slug} style ={{listStyle:'none'}}>
            <h5>
              <a className = "text-decoration-none text-black" href="/product" role="button" >Flights</a>
            </h5>
        </li>
      ))}
    </ul>
  );
}