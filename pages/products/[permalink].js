import React from "react";
import commerce from "../../lib/commerce";
import { useCartDispatch } from "../../context/cart";
import { useRouter } from "next/router";

import productStyle from "../../styles/ProductPage.module.css";
import { PayPalButtons } from "@paypal/react-paypal-js";

export async function getStaticProps({ params }) {
  const { permalink } = params;
  const product = await commerce.products.retrieve(permalink, {
    type: "permalink",
  });

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const { data: products } = await commerce.products.list();

  return {
    paths: products.map(product => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
}

const ProductPage = ({ product }) => {
  const { setCart } = useCartDispatch();

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: product.price.formatted,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(alert("Transaction Complete"));
  };

  const addToCart = () => {
    commerce.cart.add(product.id).then(({ cart }) => setCart(cart));
  };

  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={productStyle.main}>
      <h1>{product.name}</h1>
      <img src={product.image.url} />
      <p>{product.price.formatted_with_symbol}</p>
      <button onClick={addToCart}>Add to Cart</button>
      <PayPalButtons
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      ></PayPalButtons>
    </div>
  );
};

export default ProductPage;
