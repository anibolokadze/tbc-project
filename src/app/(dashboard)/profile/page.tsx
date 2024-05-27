import React from "react";
import Profile from "../../../components/Profile";
import { getAuthUserAction } from "../../../../actions";
import { getSession } from "@auth0/nextjs-auth0";

const ProfilePage = async () => {
  const session = await getSession();
  const user_id = session?.user?.sub;

  const auth_user = await getAuthUserAction(user_id);

  return <Profile authUser={auth_user?.auth_user.rows[0]} />;
};

export default ProfilePage;
