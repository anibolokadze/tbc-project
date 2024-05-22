import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../../constants";
import LoginForm from "../../components/LoginForm";

const LoginPage = async () => {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);

  let message: string | null = null;
  if (cookie?.value) {
    const cookieObject = JSON.parse(cookie.value);
    if (cookieObject?.message) {
      message = cookieObject?.message;
    }
  }

  return (
    <div className="bg-slate-50 dark:bg-darkBlue h-screen ">
      <LoginForm />
      {message && "error"}
    </div>
  );
};

export default LoginPage;
