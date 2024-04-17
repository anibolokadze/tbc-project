import axios from "axios";
import Layout from "../../../components/layout";
import Link from "next/link";
import BlogPost from "../../../components/BlogPost";

const fetchBlogs = async () => {
  try {
    const data = await axios.get("https://dummyjson.com/posts");
    return data.data.posts;
  } catch (error) {
    throw new Error("Error occurred while fetching blogs.");
  }
};

const Blog = async () => {
  const blogs = await fetchBlogs();
  return (
    <Layout>
      <section className="flex flex-col max-w-lg mx-auto gap-y-8">
        {blogs.map((blog) => (
          <Link href={`blogs/${blog.id}`} key={blog.id}>
            <BlogPost
              key={blog.id}
              title={blog.title}
              reactions={blog.reactions}
              tags={blog.tags}
            />
          </Link>
        ))}
      </section>
    </Layout>
  );
};

export default Blog;
