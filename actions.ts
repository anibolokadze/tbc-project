"use server";
import { revalidatePath } from "next/cache";
import { BASE_URL } from "./constants";
import { createAuthUser, createBlog, updateBlog } from "./api";

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

// export async function updateUserAction(formData: FormData) {
//   const { id, name, email, age } = Object.fromEntries(formData);
//   updateUser(id as string, name as string, email as string, age as string);
//   revalidatePath("/admin");
// }

export async function updateBlogAction(formData: FormData) {
  const { id, title, description, author_name, author_email } =
    Object.fromEntries(formData);
  await updateBlog(
    id as string | number,
    title as string,
    description as string,
    author_name as string,
    author_email as string
  );
  revalidatePath("/blogs"); // Assuming you want to revalidate the "/blogs" path after updating
}
// AUTH_USER

export async function createAuthUserAction(
  name: string,
  email: string,
  picture: string,
  user_id: string
) {
  console.log(user_id);

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
