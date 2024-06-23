"use client";
import { useState } from "react";
import BlogCreateForm from "./BlogCreateForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import style from "./CreateBlog.module.scss";

const BlogCreateButton = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button onClick={() => setOpenModal(!openModal)} className={style.button}>
        <FontAwesomeIcon icon={faAdd} className="mr-3" />
        Add Your Post
      </button>
      {openModal ? <BlogCreateForm setOpenModal={setOpenModal} /> : ""}
    </>
  );
};

export default BlogCreateButton;
