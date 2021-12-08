import Link from "next/link";

import Product from "./Product";

import pList from "../styles/Product.module.css";

const ProductList = ({ products }) => {
  if (!products) return null;
  return (
    <div className={pList.grid}>
      {products.map(product => (
        <div key={product.id}>
          <Link href={`/products/${product.permalink}`}>
            <a>
              <Product {...product} />
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
