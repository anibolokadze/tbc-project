// pages/product/[id].jsx
import { useRouter } from "next/router";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch product details based on the id parameter
  // Render the product details

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      {/* Render other product details here */}
    </div>
  );
};

export default ProductPage;
