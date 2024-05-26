"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import ProfileImage from "./ProfileImage";
import Layout from "./layout";
import { AuthUser } from "../types";
import { useEffect, useState } from "react";
import Image from "next/image";
import clock from "../../public/clock.png";
import ProfileSkeletonLoading from "./ProfileSkeletonLoading";

const Profile = ({ authUser }: { authUser: AuthUser }) => {
  const { user, error, isLoading } = useUser();

  // if (isLoading) return <ProfileSkeletonLoading />;
  if (error) return <div>{error.message}</div>;
  const [formattedDate, setFormattedDate] = useState<string | null>(null);

  useEffect(() => {
    if (user && user.updated_at) {
      const date = new Date(user.updated_at);
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const formattedDate = date.toLocaleString(undefined, options);
      setFormattedDate(formattedDate);
    }
  }, [user]);

  return (
    <Layout>
      {isLoading ? (
        <ProfileSkeletonLoading />
      ) : (
        <div className="hover:scale-105 transition duration-300 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative mt-32 mx-auto shadow-lg">
          {user && (
            <>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
              </div>

              <div>
                <p className="pt-9 text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {user.name}
                </p>

                <label
                  htmlFor="input-group-1"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Email
                </label>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <div className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition duration-300 hover:shadow-md hover:bg-gray-100 dark:hover:bg-gray-600">
                    {user.email}
                  </div>
                </div>

                <div className="mb-5 text-sm font-medium text-gray-900 dark:text-white flex items-center justify-between">
                  Your nickname
                  <p className="font-medium">{user.nickname}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs ">
                <p className="italic">last modified at:</p>
              </div>
              <div className="flex items-center gap-1">
                <Image src={clock} width={20} height={20} alt="clock" />
                <p className="text-xs ">{formattedDate}</p>
              </div>
            </>
          )}
        </div>
      )}
    </Layout>
  );
};

export default Profile;
