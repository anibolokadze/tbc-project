"use client";
import { useEffect, useState } from "react";
import Layout from "../../../../components/layout";
import BlogDetails from "../../../../components/BlogDetails";
import { Blog, BlogParams } from "../../../../types";
import Loading from "../../../../components/Loading/Spin/index";

export const revalidate = 0;

interface BlogDetailsPageProps {
  params: BlogParams;
}

const BlogDetailsPage = ({ params }: BlogDetailsPageProps) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog | null>(null);
  const [error, setError] = useState<string | null>(null);

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
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [params.blogid]);

  if (loading) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <p>Error: {error}</p>
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
