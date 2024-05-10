import { BASE_URL } from "../constants";

export const handleLogout = async (): Promise<void> => {
  const apiUrl = `${BASE_URL}/api/logout`;

  await fetch(apiUrl, {
    method: "POST",
  });
};
