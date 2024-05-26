"use server";
import { revalidatePath } from "next/cache";
import { createAuthUser, createUser, deleteUser, updateUser } from "./api";
import { BASE_URL } from "./constants";

export async function createUserAction(formData: FormData) {
  const { name, email, age } = Object.fromEntries(formData);
  createUser(name as string, email as string, age as string);
  revalidatePath("/admin");
}

export async function deleteUserAction(id: number) {
  await deleteUser(id);
  revalidatePath("/admin");
}

export async function updateUserAction(formData: FormData) {
  const { id, name, email, age } = Object.fromEntries(formData);
  updateUser(id as string, name as string, email as string, age as string);
  revalidatePath("/admin");
}

// AUTH_USER

export async function createAuthUserAction(
  name: string,
  email: string,
  picture: string,
  user_id: string
) {
  await createAuthUser(
    name as string,
    email as string,
    picture as string,
    user_id as string
  );
  revalidatePath("/profile");
}

export async function getAuthUserAction(email: string) {
  const res = await fetch(BASE_URL + "/api/auth-user/get-auth-user", {
    method: "GET",
    headers: {
      Cookie: `email=${email}`,
    },
  });

  return await res.json();
}
