import { BASE_URL } from "../constants";

export const handleLogin = async (
  username: string,
  password: string
): Promise<void> => {
  const apiUrl = `${BASE_URL}/api/login`;

  await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });
};
