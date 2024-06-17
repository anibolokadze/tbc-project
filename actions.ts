"use server";
import { revalidatePath } from "next/cache";
import { BASE_URL } from "./constants";
import { createAuthUser, createBlog } from "./api";

export async function createBlogAction(formData: FormData) {
  const { title, description, author_name, author_email } =
    Object.fromEntries(formData);
  createBlog(
    title as string,
    description as string,
    author_name as string,
    author_email as string
  );
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

export async function getAuthUserAction(user_id: string) {
  const res = await fetch(BASE_URL + "/api/auth-user/get-auth-user", {
    method: "GET",
    headers: {
      Cookie: `user_id=${user_id}`,
    },
  });

  return await res.json();
}
