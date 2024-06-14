import { Blog } from "../../types";
import Layout from "../layout";

interface Props {
  blog: Blog;
}

export default function BlogDetails({ blog }: Props) {
  return (
    <Layout>
      <p>{blog.title}</p>
      <p>{blog.description}</p>
    </Layout>
  );
}
