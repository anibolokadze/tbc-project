import axios from "axios";
import Layout from "../../components/layout";

import SearchAndSort from "../(dashboard)/products/SearchAndSort";
const fetchProducts = async () => {
  try {
    const data = await axios.get("https://dummyjson.com/products");
    return data.data.products;
  } catch (error) {
    throw new Error("Error occurred while fetching products.");
  }
};

const page = async () => {
  const products = await fetchProducts();

  return (
    <Layout>
      <SearchAndSort products={products} />
    </Layout>
  );
};

export default page;
