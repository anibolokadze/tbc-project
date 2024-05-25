import { BASE_URL } from "./constants";

export async function getUsers() {
  const response = await fetch(BASE_URL + "/api/get-users");
  const { users } = await response.json();
  return users.rows;
}

export async function createUser(name: string, email: string, age: string) {
  return await fetch(BASE_URL + "/api/create-user", {
    method: "POST",
    body: JSON.stringify({ name, email, age }),
  });
}

export async function deleteUser(id: number) {
  "use server";
  await fetch(`${BASE_URL}/api/delete-user/${id}`, {
    method: "DELETE",
  });
}

export async function updateUser(
  id: string,
  name: string,
  email: string,
  age: string
) {
  return await fetch(BASE_URL + "/api/edit-user", {
    method: "PUT",
    body: JSON.stringify({ id, name, email, age }),
  });
}

// AUTH_USER

export async function createAuthUser(
  name: string,
  email: string,
  picture: string,
  user_id: string
) {
  return await fetch(BASE_URL + "/api/auth-user/create-auth-user", {
    method: "POST",
    body: JSON.stringify({ name, email, picture, user_id }),
    cache: "no-store",
  });
}

export async function updateAuthUser(picture: string, user_id: string) {
  return await fetch(BASE_URL + "/api/auth-user/update-auth-user", {
    method: "PUT",
    body: JSON.stringify({ picture, user_id }),
    cache: "no-store",
  });
}
