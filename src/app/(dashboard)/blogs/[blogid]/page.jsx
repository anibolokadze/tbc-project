import axios from "axios";
import Layout from "../../../../components/layout";

const fetchBlogDetails = async (blogid) => {
  try {
    const response = await axios.get(`https://dummyjson.com/posts/${blogid}`);
    return response.data;
  } catch (error) {
    throw new Error("Error occurred while fetching blog details.");
  }
};

const BlogDetails = async ({ params }) => {
  const blogDetails = await fetchBlogDetails(params.blogid);

  return (
    <Layout>
      <>
        <article>
          <h1>{blogDetails.title}</h1> <p>{blogDetails.body}</p>
          <p>👍 {blogDetails.reactions}</p>
          <p>
            {blogDetails.tags.map((tag, index) => (
              <span key={index}>#{tag} </span>
            ))}
          </p>
        </article>
      </>
    </Layout>
  );
};

export default BlogDetails;
