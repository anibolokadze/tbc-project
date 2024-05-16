"use client";
import { useState } from "react";
import UserEditForm from "./UserEditForm";
import { User } from "../types";

const UserEditButton = ({ user }: { user: User }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button onClick={() => setOpenModal(!openModal)}>edit</button>
      {openModal ? (
        <UserEditForm setOpenModal={setOpenModal} user={user} />
      ) : (
        ""
      )}
    </>
  );
};

export default UserEditButton;
