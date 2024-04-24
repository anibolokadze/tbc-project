export const handleLogout = async () => {
  const response = await fetch("http://localhost:3000/api/logout", {
    method: "POST",
  });
};
