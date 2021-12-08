import React from "react";
import commerce from "../lib/commerce";
import ProductList from "../components/ProductList";
import CategoryList from "../components/CategoryList";

export async function getStaticProps() {
  const merchant = await commerce.merchants.about();
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: { merchant, categories, products },
  };
}

export default function StorePage({ merchant, categories, products }) {
  return (
    <React.Fragment>
      <h1 style={{ margin: "auto" }}>Store</h1>
      <CategoryList categories={categories} />
      <ProductList products={products} />
    </React.Fragment>
  );
}
