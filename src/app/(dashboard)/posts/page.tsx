// import axios from "axios";
// import Link from "next/link";
// import Post from "../../../components/Post";
// import Layout from "../../../components/layout";
// import { Post as PostType } from "../../../types";

// const fetchPosts = async () => {
//   try {
//     const data = await axios.get("https://dummyjson.com/posts");
//     return data.data.posts;
//   } catch (error) {
//     throw new Error("Error occurred while fetching posts.");
//   }
// };

// const Posts = async () => {
//   const posts = await fetchPosts();
//   return (
//     <Layout>
//       <section className="flex flex-col max-w-lg mx-auto gap-y-8">
//         {posts.map((post: PostType) => (
//           <Link href={`posts/${post.id}`} key={post.id}>
//             <Post
//               key={post.id}
//               id={post.id}
//               title={post.title}
//               reactions={post.reactions}
//               tags={post.tags}
//             />
//           </Link>
//         ))}
//       </section>
//     </Layout>
//   );
// };

// export default Posts;

import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
