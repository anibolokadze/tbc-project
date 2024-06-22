"use client";
import React, { useState } from "react";

import { Blog } from "../../types";
import Search from "../Search";
import { useDebounce } from "../../hooks";
import Link from "next/link";
import Layout from "../layout";
import style from "./Blogs.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import BlogCreateButton from "../Create Blog/BlogCreateButton";

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
      <div>
        <Search
          setSearchQuery={setSearchQuery}
          sortProducts={() => {}}
          currentSortOrder="price-ascending"
          showSortButton={false}
        />

        <BlogCreateButton />
      </div>

      <div className={style.blogs}>
        {filteredBlogs.map((blog: Blog) => (
          <div className={style.blogItem}>
            <Link key={blog.id} href={`/blogs/${blog.id}`}>
              <div>
                <h3>{blog.title}</h3>
                <p className={style.description}>
                  {truncateDescription(blog.description)}
                </p>
                <div className={style.user}>
                  <div>
                    <FontAwesomeIcon
                      icon={faUserCheck}
                      className={style.icon}
                    />
                    <p>{blog.author_name}</p>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faClock} className={style.icon} />
                    <p>{formatDate(blog.time_added)}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Blogs;
