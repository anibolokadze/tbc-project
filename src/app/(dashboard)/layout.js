"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { AUTH_COOKIE_KEY } from "../../../constants";

const RootLayout = async ({ children }) => {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);

  if (!cookie) {
    redirect("/login");
  }

  return <>{children}</>;
};

export default RootLayout;
