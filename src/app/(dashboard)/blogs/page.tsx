import { getBlogs } from "../../../../api";
import BlogPosts from "../../../components/Blogs";
export const revalidate = 0;

const Blogs = async () => {
  const blogs = await getBlogs();

  return <BlogPosts blogs={blogs} />;
};

export default Blogs;
