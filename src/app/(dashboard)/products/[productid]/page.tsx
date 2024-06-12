"use client";
import { useEffect, useState } from "react";
import Layout from "../../../../components/layout";
import Image from "next/image";
import { useCartContext } from "../../../../context/CartContext";

const ProductDetails = ({ params }: any) => {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { addItem } = useCartContext(); // Access the addItem method from the CartContext

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

  const handleAddToCart = () => {
    // Add the current product to the cart
    addItem({
      id: product.id, // Assuming product has an id
      title: product.title,
      price: parseFloat(product.price), // Assuming product has a price
      image: product.thumbnail_link, // Assuming product has image_links
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <Layout>
      <article>
        <h1>{product.title}</h1>
        <p>Brand: {product.brand}</p>
        <p>Category: {product.category}</p>
        <p>Description: {product.description}</p>
        <p>Rating: {product.rating}</p>
        <p>reviews</p>
        {product.reviews.split(",").map((review: string, index: number) => (
          <p key={index}>USER: {review}</p>
        ))}
        {product.image_links.split(",").map((image: string, index: number) => (
          <Image
            height={500}
            width={500}
            style={{ width: "auto", height: "208px" }}
            key={index}
            src={image}
            alt={product.title}
          />
        ))}
        <button onClick={handleAddToCart}>Add to Cart</button>{" "}
      </article>
    </Layout>
  );
};

export default ProductDetails;
