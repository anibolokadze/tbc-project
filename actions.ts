"use server";

import { deleteUser } from "./api";
import { BASE_URL } from "./constants";

// export async function createUserAction(formData: FormData) {
//   const { name, email } = Object.fromEntries(formData);

//   return createUser(name as string, email as string);

// }

export default async function createUser(formData: FormData) {
  const { name, email, age } = Object.fromEntries(formData);

  const response = await fetch(BASE_URL + "/api/create-user", {
    method: "POST",
    body: JSON.stringify({ name, email, age }),
  });
  console.log("response", response);
}

export async function deleteUserAction(id: number) {
  await deleteUser(id);
}

export async function editUserAction(
  id: number,
  name: string,
  email: string,
  age: number
) {
  try {
    const response = await fetch(`${BASE_URL}/api/edit-user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, age }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error editing user");
  }
}
