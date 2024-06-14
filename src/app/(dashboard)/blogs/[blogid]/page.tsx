"use client";
import { useEffect, useState } from "react";
import Layout from "../../../../components/layout";
import BlogDetails from "../../../../components/BlogDetails";
import { Blog, BlogParams } from "../../../../types";

export const revalidate = 0;

interface BlogDetailsPageProps {
  params: BlogParams;
}

const BlogDetailsPage = ({ params }: BlogDetailsPageProps) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/get-blogs/${params.blogid}`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog");
        }
        const data = await response.json();
        setBlog(data.blog);
        console.log("blog", data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [params.blogid]);

  if (loading) {
    return (
      <Layout>
        <p>loading</p>
      </Layout>
    );
  }

  if (!blog) {
    return (
      <Layout>
        <p>Blog not found!</p>
      </Layout>
    );
  }

  return <BlogDetails blog={blog} />;
};

export default BlogDetailsPage;
