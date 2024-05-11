export const handleLogout = async () => {
  await fetch("http://localhost:3000/api/logout", {
    method: "POST",
  });
};
