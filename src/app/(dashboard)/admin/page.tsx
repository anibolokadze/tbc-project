"use client";

import { useState, useEffect } from "react";
import Loading from "./loading";
import { User, getUsers } from "../../../../api";
import { deleteUserAction, editUserAction } from "../../../../actions";
import UserForm from "../../../components/Form";
import UserItem from "../../../components/User";

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedUsers = await getUsers();
        setUsers(fetchedUsers);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchData();
  }, []);

  const handleUserDeleted = async (id: number) => {
    try {
      setDeleting(true);
      await deleteUserAction(id);
      const updatedUsers = await getUsers();
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Error deleting user:", error);
    } finally {
      setDeleting(false);
    }
  };

  const handleUserEdited = async (
    id: number,
    name: string,
    email: string,
    age: number
  ) => {
    try {
      await editUserAction(id, name, email, age);
      const updatedUsers = users.map((user) => {
        if (user.id === id) {
          return { ...user, name, email, age };
        }
        return user;
      });
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };

  return (
    <>
      <div>
        <UserForm setUsers={setUsers} />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {deleting && <Loading />}
          {users.map((user: User) => (
            <UserItem
              key={user.id}
              user={user}
              onDelete={() => handleUserDeleted(user.id)}
              onEdit={handleUserEdited}
            />
          ))}
        </div>
      )}
    </>
  );
}
