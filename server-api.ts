import { BASE_URL } from "./constants";

export async function deleteUser(id: number) {
  "use server";
  await fetch(`${BASE_URL}/api/delete-user/${id}`, {
    method: "DELETE",
  });
}
