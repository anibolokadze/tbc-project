"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "@/components/layout";
import data from "@/data";

const BlogDetails = ({ params }) => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState();
  const [blogError, setBlogError] = useState("");

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/posts/${params.blogid}`
        );
        setDetails(response.data);
        setLoading(false);
      } catch (error) {
        setBlogError("Error occurred while fetching Blog Details.");
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
              <h1>{details.title}</h1> <p>{details.body}</p>
              <p>👍 {details.reactions}</p>
              <p>
                {details.tags.map((tag, index) => (
                  <span key={index}>#{tag} </span>
                ))}
              </p>
            </article>
          ) : (
            <div>{blogError}</div>
          )}
        </>
      )}
    </Layout>
  );
};

export default BlogDetails;
