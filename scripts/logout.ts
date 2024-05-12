import { BASE_URL } from "../constants";

export const handleLogout = async () => {
  await fetch(`${BASE_URL}/api/logout`, {
    method: "POST",
  });
};
