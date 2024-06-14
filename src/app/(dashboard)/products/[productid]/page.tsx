"use client";
import { useEffect, useState } from "react";
import ProductDetails from "../../../../components/ProductDetails";
import Layout from "../../../../components/layout";
import Loading from "../../../../components/Loading";
import { Product, ProductParams } from "../../../../types";

export const revalidate = 0;

interface ProductDetailsPageProps {
  params: ProductParams;
}

const ProductDetailsPage = ({ params }: ProductDetailsPageProps) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<Product | null>(null);

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
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }

  if (!product) {
    return <p>Product not found!</p>;
  }

  return <ProductDetails product={product} />;
};

export default ProductDetailsPage;
