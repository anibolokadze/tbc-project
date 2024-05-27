import axios from "axios";
import { Params } from "../../../../types";
import Layout from "../../../../components/layout";
import Image from "next/image";

// export const generateStaticParams = async () => {
//   const response = await axios.get("https://dummyjson.com/products");
//   const paths = response.data.products.map((product: { id: number }) => ({
//     params: {
//       id: `/products/${product.id}`,
//     },
//   }));

//   return paths;
// };

const fetchProductDetails = async (productid: number) => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products/${productid}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error occurred while fetching product details.");
  }
};

const ProductDetails = async ({ params }: { params: Params }) => {
  const productDetails = await fetchProductDetails(params.productid);

  return (
    <Layout>
      <article>
        <h1>{productDetails.title}</h1>
        <p>Brand: {productDetails.brand}</p>
        <p>Category: {productDetails.category}</p>
        <p>Description: {productDetails.description}</p>
        <p>Rating: {productDetails.rating}</p>
        {productDetails.images.map((image: string, index: number) => (
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
