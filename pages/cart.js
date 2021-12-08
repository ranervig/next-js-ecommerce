import { PayPalButtons } from "@paypal/react-paypal-js";
import Head from "next/head";
import { useEffect } from "react";
import { useCartDispatch, useCartState } from "../context/cart";

import commerce from "../lib/commerce";

const CartItem = ({ id, name, quantity, line_total }) => {
  const { setCart } = useCartDispatch();

  const handleUpdateCart = ({ cart }) => setCart(cart);

  const removeItem = () => {
    commerce.cart.remove(id).then(handleUpdateCart);
  };

  const decrementQuantity = () => {
    quantity > 1
      ? commerce.cart
          .update(id, { quantity: quantity - 1 })
          .then(handleUpdateCart)
      : removeItem();
  };

  const incrementQuantity = () => {
    commerce.cart.update(id, { quantity: quantity + 1 }).then(handleUpdateCart);
  };
  return (
    <div>
      <p>{name}</p>
      <p>{line_total.formatted_with_symbol}</p>
      <button onClick={decrementQuantity}>-</button>
      <span>{quantity}</span>
      <button onClick={incrementQuantity}>+</button>
    </div>
  );
};

const CartPage = () => {
  const { line_items, subtotal } = useCartState();

  const isEmpty = line_items.length === 0;

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: subtotal.formatted,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture();
  };

  const captureOrder = async () => {
    try {
      // Complete capturing the order.
      const order = await commerce.checkout.capture(checkoutTokenId, {
        ...orderDetails,
        // We have now changed the action to "capture" as well as included the "payment_id and "payer_id"
        payment: {
          gateway: "paypal",
          paypal: {
            action: "capture",
            payment_id: "PAY-51028384J84281644LGFZXJQ",
            payer_id: "VE57TQRTVER5Y",
          },
        },
      });

      // If we get here, the order has been successfully captured and the order detail is part of the `order` variable
      console.log(order);
      return;
    } catch (response) {
      // There was an issue capturing the order with Commerce.js
      console.log(response);
      alert(response.message);
      return;
    }
  };

  if (isEmpty) return <p>your cart is empty</p>;
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://www.paypalobjects.com/api/checkout.js"
        />
      </Head>
      <h1>Cart</h1>
      {line_items.map(item => (
        <CartItem key={item.id} {...item} />
      ))}

      <hr />

      <div>
        <strong>Sub total:</strong> {subtotal.formatted_with_symbol}
        <div className="checkout">
          <PayPalButtons
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
          />
        </div>
      </div>
    </>
  );
};

export default CartPage;
