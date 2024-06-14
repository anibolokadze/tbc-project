"use client";
import React, { useState } from "react";
import BlogCreateButton from "../BlogCreateButton";
import { Blog } from "../../types";
import Search from "../Search";
import { useDebounce } from "../../hooks";
import Link from "next/link";

interface Props {
  blogs: Blog[];
}

const Blogs = ({ blogs }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 1000);

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
    <>
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isSorted={false}
        setIsSorted={() => {}}
      />

      <div className="h-full flex flex-col gap-10 max-w-full lg:max-w-[70%] mx-10 lg:mx-auto">
        <BlogCreateButton />

        <div className="flex flex-col">
          {filteredBlogs.length ? (
            <div className="grid grid-cols-5 border-b border-t gap-5 py-2 px-2 bg-blue-300 dark:bg-blue-500">
              <p>Email</p>
              <p>Name</p>

              <p>Title</p>
              <p>Action</p>
            </div>
          ) : (
            <p>No blogs found</p>
          )}

          {filteredBlogs.map((blog: Blog) => (
            <Link key={blog.id} href={`/blogs/${blog.id}`}>
              <div className="grid grid-cols-5 border-b gap-5 py-2 px-2 hover:bg-[#acc5f2] dark:hover:bg-blue-300/50 cursor-pointer">
                <p>{blog.author_email}</p>
                <p>{blog.author_name}</p>

                <p>{blog.title}</p>
                <p>See More</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
