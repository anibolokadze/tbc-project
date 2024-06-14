import { getBlogs } from "../../../../api";
import BlogPosts from "../../../components/Blogs";
export const revalidate = 0;

const Blogs = async () => {
  const blogs = await getBlogs();

  return (
    // <div className="h-full flex flex-col gap-10 max-w-full lg:max-w-[70%] mx-10 lg:mx-auto">
    //   <BlogCreateButton />

    //   <div className="flex flex-col">
    //     {blogs.length ? (
    //       <div className="grid grid-cols-5 border-b border-t gap-5 py-2 px-2 bg-blue-300 dark:bg-blue-500">
    //         <p>email</p>
    //         <p>name</p>
    //         <p>description</p>
    //         <p>title</p>
    //       </div>
    //     ) : (
    //       ""
    //     )}

    //     {blogs.map((blog: Blog) => (
    //       <div
    //         key={blog.id}
    //         className="grid grid-cols-5 border-b gap-5 py-2 px-2 hover:bg-[#acc5f2] dark:hover:bg-blue-300/50 "
    //       >
    //         <p>{blog.author_email}</p>
    //         <p>{blog.author_name}</p>
    //         <p>{blog.description}</p>
    //         <p>{blog.title}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <BlogPosts blogs={blogs} />
  );
};

export default Blogs;
