"use client";

import { useRouter } from "next/navigation";
import { deleteAuthCookie } from "../app/actions";

const SignOutButton = () => {
  const router = useRouter();

  const handleLogOut = async () => {
    try {
      await deleteAuthCookie();
      router.push("/login");
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  return <button onClick={handleLogOut}>Log Out</button>;
};

export default SignOutButton;
