import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Layout from "../components/Layout";
import { CartProvider } from "../context/cart";

import "../styles/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <CartProvider>
        <PayPalScriptProvider>
          <Component {...pageProps} />
        </PayPalScriptProvider>
      </CartProvider>
    </Layout>
  );
}
