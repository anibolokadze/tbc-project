import { NextResponse } from "next/server";
import { BASE_URL } from "../../../../constants";
import { Product } from "../../../types";
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const getActiveProducts = async () => {
  const checkProducts = await stripe.products.list();
  const availableProducts = checkProducts.data.filter(
    (product: Product) => product.active === true
  );
  return availableProducts;
};

export const POST = async (request: Request) => {
  const { products } = await request.json();
  const data = products;

  let activeProducts = await getActiveProducts();
  let stripeItems = [];

  try {
    for (const product of data) {
      let prod;

      const stripeProduct = activeProducts?.find(
        (stripeProduct: { name: string }) =>
          stripeProduct?.name?.toLowerCase() == product?.title?.toLowerCase()
      );

      if (stripeProduct == undefined) {
        prod = await stripe.products.create({
          name: product.title,
          description: product.description,
          unit_label: "unit",
        });

        activeProducts.push(prod);
      }

      stripeItems.push({
        price_data: {
          currency: "usd",
          unit_amount: product.price * 100,
          product_data: {
            name: product.title,
            description: product.description,
          },
        },
        quantity: product.quantity,
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: stripeItems,
      mode: "payment",
      success_url: `${BASE_URL}/success`,
      cancel_url: `${BASE_URL}/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
