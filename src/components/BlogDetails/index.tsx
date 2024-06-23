import React from "react";
import Layout from "../layout";
import { Blog } from "../../types";

interface Props {
  blog: Blog;
}

const BlogDetails = ({ blog }: Props) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Layout>
      <div className="bg-white mb-[100px] dark:bg-[#121212] py-8  px-4 mx-auto max-w-screen-xl lg:py-16 lg:h-full lg:px-6 lg:flex lg:justify-center">
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 lg:w-1/2">
          <div className="flex justify-between items-center mb-10 text-gray-500">
            <span className="text-sm">{formatDate(blog.time_added)}</span>
          </div>
          <h2 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {blog.title}
          </h2>
          <p className="mb-10 font-light text-gray-500 dark:text-gray-400 leading-8">
            {blog.description}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img
                className="w-7 h-7 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="Jese Leos avatar"
              />
              <span className="font-medium dark:text-white">
                {blog.author_name}
              </span>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default BlogDetails;
