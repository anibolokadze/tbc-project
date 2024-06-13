"use client";
import { useEffect, useState } from "react";
import ProductDetails from "../../../../components/ProductDetails";

export const revalidate = 0;
const ProductDetailsPage = ({ params }: any) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/get-products/${params.productid}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data.product);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.productid]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found!</p>;
  }

  return <ProductDetails product={product} />;
};

export default ProductDetailsPage;
