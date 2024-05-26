"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import ProfileImage from "./ProfileImage";
import Layout from "./layout";
import { AuthUser } from "../types";

const Profile = ({ authUser }: { authUser: AuthUser }) => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <Layout>
      <div>
        {user && (
          <div>
            {user.email && user.name && user.picture && (
              <ProfileImage
                picture={
                  authUser?.picture.length ? authUser.picture : user.picture
                }
                name={user.name}
                email={user?.email}
                sid={user.sid}
              />
            )}
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Profile;
