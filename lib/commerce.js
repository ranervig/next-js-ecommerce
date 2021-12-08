import ComerceSDK from "@chec/commerce.js";

const client = new ComerceSDK(process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY);

export default client;
