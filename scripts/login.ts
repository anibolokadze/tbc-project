export const handleLogin = async (
  username: string,
  password: string
): Promise<void> => {
  await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });
};
