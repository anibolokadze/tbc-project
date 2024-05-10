export const handleLogout = async () => {
  let apiUrl;
  if (process.env.NODE_ENV === "production") {
    apiUrl = "https://tbc-project-two.vercel.app/api/logout";
  } else {
    apiUrl = "http://localhost:3000/api/logout";
  }

  await fetch(apiUrl, {
    method: "POST",
  });
};
