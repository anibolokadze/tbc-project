"use client";
import { useState } from "react";
import BlogCreateForm from "./BlogCreateForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import style from "./CreateBlog.module.scss";
import { useTranslation } from "react-i18next";

const BlogCreateButton = () => {
  const [openModal, setOpenModal] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <button onClick={() => setOpenModal(!openModal)} className={style.button}>
        <FontAwesomeIcon icon={faAdd} className="mr-3" />
        {t("add_blog")}
      </button>
      {openModal ? <BlogCreateForm setOpenModal={setOpenModal} /> : ""}
    </>
  );
};

export default BlogCreateButton;
