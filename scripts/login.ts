export const handleLogin = async (
  username: string,
  password: string
): Promise<void> => {
  let apiUrl;
  if (process.env.NODE_ENV === "production") {
    apiUrl = "https://tbc-project-two.vercel.app/api/login";
  } else {
    apiUrl = "http://localhost:3000/api/login";
  }

  await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });
};
