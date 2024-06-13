"use client";
import { useEffect, useState } from "react";
import Layout from "../../../../components/layout";
import Image from "next/image";
import { useCartContext } from "../../../../context/CartContext";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import Head from "next/head";

export const revalidate = 0;
const ProductDetails = ({ params }: any) => {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { addItem } = useCartContext();

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
    addItem({
      id: product.id,
      title: product.title,
      price: parseFloat(product.price),
      image: product.thumbnail_link,
    });
  };

  const shareUrl = window.location.href;

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <Layout>
      <Head>
        <title>{product.title}</title>
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.thumbnail_link} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="product" />
      </Head>
      <article>
        <h1>{product.title}</h1>
        <p>Brand: {product.brand}</p>
        <p>Category: {product.category}</p>
        <p>Description: {product.description}</p>
        <p>Rating: {product.rating}</p>
        <p>Reviews:</p>
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
        <FacebookShareButton
          url={shareUrl}
          title={product.title}
          hashtag={"#tech"}
        >
          <FacebookIcon size={36} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={shareUrl}
          title={product.title}
          hashtags={["tech"]}
        >
          <TwitterIcon size={36} round />
        </TwitterShareButton>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </article>
    </Layout>
  );
};

export default ProductDetails;
