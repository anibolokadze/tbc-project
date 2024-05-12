import { BASE_URL } from "../constants";

export const handleLogin = async (
  username: string,
  password: string
): Promise<void> => {
  try {
    const response = await fetch(`${BASE_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to login");
    }
  } catch (error: any) {
    console.error("Error logging in:", error.message);
  }
};
