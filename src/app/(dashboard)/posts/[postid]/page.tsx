// import axios from "axios";
// import { Params } from "../../../../types";
// import Layout from "../../../../components/layout";

// export const generateStaticParams = async () => {
//   const response = await axios.get("https://dummyjson.com/posts");
//   const paths = response.data.posts.map((post: { id: number }) => ({
//     params: {
//       id: `posts/${post.id}`,
//     },
//   }));

//   return paths;
// };

// const fetchPostDetails = async (postid: number) => {
//   try {
//     const response = await axios.get(`https://dummyjson.com/posts/${postid}`);
//     return response.data;
//   } catch (error) {
//     throw new Error("Error occurred while fetching post details.");
//   }
// };

// const PostDetails = async ({ params }: { params: Params }) => {
//   const postDetails = await fetchPostDetails(params.postid);

//   return (
//     <Layout>
//       <>
//         <article>
//           <h1>{postDetails.title}</h1> <p>{postDetails.body}</p>
//           <p>👍 {postDetails.reactions}</p>
//           <p>
//             {postDetails.tags.map((tag: string, index: number) => (
//               <span key={index}>#{tag} </span>
//             ))}
//           </p>
//         </article>
//       </>
//     </Layout>
//   );
// };

// export default PostDetails;

import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
