import { BASE_URL } from "../constants";

export const handleLogin = async (
  username: string,
  password: string
): Promise<void> => {
  await fetch(`${BASE_URL}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });
};
