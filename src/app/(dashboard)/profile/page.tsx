"use client";

import Image from "next/image";
import Layout from "../../../components/layout";
import { useUser } from "@auth0/nextjs-auth0/client";

const Profile = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <Layout>
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
    </Layout>
  );
};

export default Profile;
