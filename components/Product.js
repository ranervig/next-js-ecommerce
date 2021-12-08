import React from "react";
import productStyle from "../styles/Product.module.css";

const Product = ({ name, price, image }) => {
  console.log(image);
  return (
    <React.Fragment>
      <div className={productStyle.card}>
        <img src={image.url} alt={name} />
        <h4>{name}</h4>
        <p>{price.formatted_with_symbol}</p>
      </div>
    </React.Fragment>
  );
};

export default Product;
