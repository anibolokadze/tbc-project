// import { cookies } from "next/headers";
// import { AUTH_COOKIE_KEY } from "../../../constants";
// import LoginForm from "../../components/LoginForm";

// const LoginPage = async () => {
//   const cookieStore = cookies();
//   const cookie = cookieStore.get(AUTH_COOKIE_KEY);

//   let message: string | null = null;
//   if (cookie?.value) {
//     const cookieObject = JSON.parse(cookie.value);
//     if (cookieObject?.message) {
//       message = cookieObject?.message;
//     }
//   }

//   return (
//     <div className="bg-slate-50 dark:bg-darkBlue h-screen ">
//       <LoginForm />
//       {message && "error"}
//     </div>
//   );
// };

// export default LoginPage;

"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function LoginPage() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <div>
        {user && (
          <div>
            {user.picture && user.name && (
              <Image
                src={user.picture}
                alt={user.name}
                width={30}
                height={30}
              />
            )}
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
          </div>
        )}
      </div>
      <div>
        {user ? (
          <a href="/api/auth/logout">Logout</a>
        ) : (
          <a href="/api/auth/login">Login</a>
        )}
      </div>
    </>
  );
}
