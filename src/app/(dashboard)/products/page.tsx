import { Product } from "../../../types";
import Products from "../../../components/Products";

interface ProductsPageProps {
  products: Product[];
}

const ProductsPage = ({ products }: ProductsPageProps) => {
  return (
    <>
      <Products products={products} />
    </>
  );
};

export default ProductsPage;
