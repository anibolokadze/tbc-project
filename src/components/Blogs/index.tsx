"use client";
import React, { useState } from "react";
import Link from "next/link";
import Layout from "../layout";
import BlogCreateButton from "../Create Blog/BlogCreateButton";
import { useDebounce } from "../../hooks";
import { Blog } from "../../types";
import Search from "../Search";

interface Props {
  blogs: Blog[];
}

const Blogs = ({ blogs }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 1000);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const truncateDescription = (description: string) => {
    const firstPeriodIndex = description.indexOf(".");
    if (firstPeriodIndex !== -1) {
      const truncatedText = description.substring(0, firstPeriodIndex + 1);
      return truncatedText.trim() + "...";
    }
    return description;
  };

  const filteredBlogs = blogs.filter(
    (blog: Blog) =>
      blog.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
      blog.author_name
        .toLowerCase()
        .includes(debouncedSearchQuery.toLowerCase()) ||
      blog.author_email
        .toLowerCase()
        .includes(debouncedSearchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="mt-[8em]">
        <Search
          setSearchQuery={setSearchQuery}
          sortProducts={() => {}}
          currentSortOrder="price-ascending"
          showSortButton={false}
        />
        <div className="flex flex-col items-center">
          <BlogCreateButton />
        </div>
      </div>

      <div className="bg-white dark:bg-[#121212] py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        {filteredBlogs.length === 0 ? (
          <p className="h-[80vh] mx-auto my-0 pt-[5em] text-center">
            No blogs found
          </p>
        ) : (
          <div className="grid gap-8 lg:grid-cols-2">
            {filteredBlogs.map((blog: Blog) => (
              <article
                key={blog.id}
                className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-between items-center mb-5 text-gray-500">
                  <span className="text-sm">{formatDate(blog.time_added)}</span>
                </div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {blog.title}
                </h2>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                  {truncateDescription(blog.description)}
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
                  <Link
                    href={`/blogs/${blog.id}`}
                    className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  >
                    Read more
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Blogs;
