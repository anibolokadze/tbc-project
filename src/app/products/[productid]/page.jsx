"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../../components/layout";
import data from "../../../data";

const ProductDetails = ({ params }) => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState();
  const [productError, setProductError] = useState("");

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${params.productid}`
        );
        setDetails(response.data);
        setLoading(false);
      } catch (error) {
        setProductError("Error occurred while fetching Product Details.");
        setLoading(false);
      }
    };

    fetchDetails();
  }, []);

  return (
    <Layout header={data.header} footer={data.footer}>
      {loading ? (
        <p>loading ... </p>
      ) : (
        <>
          {details ? (
            <article>
              <h1>{details.title}</h1>
              <p>{details.brand}</p>
              <p>{details.category}</p>
              <p>{details.description}</p>
              <p>{details.rating}</p>
              {/* {details.images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index}`} />
              ))} */}
              <img src={details.images[0]} alt={details.title} />
              <button>დამატება კარტაში</button>
            </article>
          ) : (
            <div>{productError}</div>
          )}
        </>
      )}
    </Layout>
  );
};

export default ProductDetails;
