"use client";
import BlogPost from "@/components/BlogPost";
import Layout from "@/components/layout";
import data from "@/data";
import axios from "axios";
import { useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogError, setBlogError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/posts");
        setBlogs(response.data.posts);
      } catch (error) {
        setBlogError("Error occurred while fetching Blogs.");
      }
    };

    fetchBlogs();
  }, []);

  return (
    <Layout header={data.header} footer={data.footer}>
      {blogError && <p>{blogError}</p>}

      <section className="flex flex-col max-w-lg mx-auto gap-y-8">
        {blogs.map((blog) => (
          <BlogPost
            key={blog.id}
            title={blog.title}
            reactions={blog.reactions}
            tags={blog.tags}
          />
        ))}
      </section>
    </Layout>
  );
};

export default Blog;
