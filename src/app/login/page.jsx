"use server";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../../constants";
import { redirect } from "next/navigation";
import { login } from "../actions";
import LoginForm from "../../components/LoginForm";

const page = async () => {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);

  if (cookie) {
    redirect("/");
  }

  const handleLogin = async (username, password) => {
    "use server";
    try {
      const success = await login(username, password);
      if (success) {
        redirect("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return <LoginForm handleLogin={handleLogin} />;
};

export default page;
