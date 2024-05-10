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

          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Age
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: User) => (
                <UserItem
                  key={user.id}
                  user={user}
                  onDelete={() => handleUserDeleted(user.id)}
                  onEdit={handleUserEdited}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
