"use client";
import { useState } from "react";
import BlogCreateForm from "./BlogCreateForm";

const BlogCreateButton = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="w-fit bg-blue-600 dark:bg-blue-500 rounded-[100px] py-2 lg:py-auto px-7 font-small lg:font-medium cursor-pointer transition-all transform duration-300 ease-linear"
      >
        Add Post
      </button>
      {openModal ? <BlogCreateForm setOpenModal={setOpenModal} /> : ""}
    </>
  );
};

export default BlogCreateButton;
