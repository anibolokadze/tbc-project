"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import ProfileImage from "./ProfileImage";
import Layout from "./layout";
import { AuthUser } from "../types";
import { useEffect, useState } from "react";
import Image from "next/image";
import clock from "../../public/clock.png";
import ProfileSkeletonLoading from "./ProfileSkeletonLoading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export const revalidate = 0;

const Profile = ({ authUser }: { authUser: AuthUser }) => {
  const { user, error, isLoading } = useUser();
  const { t } = useTranslation();
  const [formattedDate, setFormattedDate] = useState<string | null>(null);

  useEffect(() => {
    if (user && user.updated_at) {
      const formattedDate = user.updated_at.slice(0, 10);
      setFormattedDate(formattedDate);
    }
  }, [user]);

  if (error) return <div>{error.message}</div>;

  return (
    <Layout>
      {isLoading ? (
        <ProfileSkeletonLoading />
      ) : (
        <div className="mb-[250px] mt-[14em] transition duration-300 max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative  mx-auto ">
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
                    sid={user.sub}
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
                  {t("email")}
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
                  {t("name")}
                  <p className="font-medium">{user.nickname}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <p className="italic">{t("modified")}:</p>
              </div>
              <div className="flex items-center gap-1 mb-[50px] !mt-2">
                <Image src={clock} width={20} height={20} alt="clock" />
                <p className="text-xs ">{formattedDate}</p>
              </div>

              <a
                href="/api/auth/logout"
                className="flex justify-center items-center gap-2 !mx-auto w-[20vw]  text-white bg-red-500 hover:bg-red-600 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-500  focus:outline-none "
              >
                <FontAwesomeIcon icon={faRightFromBracket} />
                {t("logout")}
              </a>
            </>
          )}
        </div>
      )}
    </Layout>
  );
};

export default Profile;
