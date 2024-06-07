import { Params } from "../../../../types";
import Layout from "../../../../components/layout";
import Image from "next/image";
import { getProduct } from "../../../../../api";

export const revalidate = 0;

const ProductDetails = async ({ params }: { params: Params }) => {
  const productDetails = await getProduct(params.productid);

  if (!productDetails) {
    return (
      <Layout>
        <p>Product not found !</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <article>
        <h1>{productDetails.title}</h1>
        <p>Brand: {productDetails.brand}</p>

        <p>Category: {productDetails.category}</p>
        <p>Description: {productDetails.description}</p>
        <p>Rating: {productDetails.rating}</p>

        <p>reviews</p>
        {productDetails.reviews
          .split(",")
          .map((review: string, index: number) => (
            <p key={index}>USER: {review}</p>
          ))}

        {productDetails.image_links
          .split(",")
          .map((image: string, index: number) => (
            <Image
              height={500}
              width={500}
              style={{ width: "auto", height: "208px" }}
              key={index}
              src={image}
              alt={productDetails.title}
            />
          ))}
        <button>Add to Cart</button>
      </article>
    </Layout>
  );
};

export default ProductDetails;
