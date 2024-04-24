import axios from "axios";
import Layout from "../../../../components/layout";

export const generateStaticParams = async () => {
  const response = await axios.get("https://dummyjson.com/posts");
  const paths = response.data.posts.map((post) => ({
    params: {
      id: `posts/${post.id}`,
    },
  }));

  return paths;
};

const fetchPostDetails = async (postid) => {
  try {
    const response = await axios.get(`https://dummyjson.com/posts/${postid}`);
    return response.data;
  } catch (error) {
    throw new Error("Error occurred while fetching post details.");
  }
};

const PostDetails = async ({ params }) => {
  const postDetails = await fetchPostDetails(params.postid);

  return (
    <Layout>
      <>
        <article>
          <h1>{postDetails.title}</h1> <p>{postDetails.body}</p>
          <p>👍 {postDetails.reactions}</p>
          <p>
            {postDetails.tags.map((tag, index) => (
              <span key={index}>#{tag} </span>
            ))}
          </p>
        </article>
      </>
    </Layout>
  );
};

export default PostDetails;
