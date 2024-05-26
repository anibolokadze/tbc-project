import React from "react";
import Profile from "../../../components/Profile";
import { getAuthUserAction } from "../../../../actions";
import { getSession } from "@auth0/nextjs-auth0";

const ProfilePage = async () => {
  const session = await getSession();
  const email = session?.user?.email;

  const auth_user = await getAuthUserAction(email);

  return <Profile authUser={auth_user?.auth_user.rows[0]} />;
};

export default ProfilePage;
