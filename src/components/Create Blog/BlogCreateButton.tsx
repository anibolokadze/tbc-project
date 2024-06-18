"use client";
import { useState } from "react";
import style from "./CreateBlog.module.scss";
import BlogCreateForm from "./BlogCreateForm";

const BlogCreateButton = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button onClick={() => setOpenModal(!openModal)} className={style.button}>
        Add Post
      </button>
      {openModal ? <BlogCreateForm setOpenModal={setOpenModal} /> : ""}
    </>
  );
};

export default BlogCreateButton;
