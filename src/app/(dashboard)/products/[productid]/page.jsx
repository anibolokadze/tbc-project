import axios from "axios";
import Layout from "../../../../components/layout";

const fetchProductDetails = async (productId) => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products/${productId}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error occurred while fetching product details.");
  }
};

const ProductDetails = async ({ params }) => {
  const productDetails = await fetchProductDetails(params.productid);

  return (
    <Layout>
      <article>
        <h1>{productDetails.title}</h1>
        <p>Brand: {productDetails.brand}</p>
        <p>Category: {productDetails.category}</p>
        <p>Description: {productDetails.description}</p>
        <p>Rating: {productDetails.rating}</p>
        <img src={productDetails.images[0]} alt={productDetails.title} />
        <button>Add to Cart</button>
      </article>
    </Layout>
  );
};

export default ProductDetails;
