"use client";

import type { PutBlobResult } from "@vercel/blob";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { createAuthUserAction } from "../../actions";
import edit from "../../public/edit.svg";
import close from "../../public/close.svg";

const ProfileImage = ({
  picture,
  name,
  email,
  sid,
}: {
  picture: string;
  name: string;
  email: string;
  sid: unknown;
}) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [isEdited, setIsEdited] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onPictureEditClickHandler = () => {
    setIsEdited(true);
  };
  const onCloseEditClickHandler = () => {
    setIsEdited(false);
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputFileRef.current?.files) {
      setError("No file selected");
      return;
    }

    const file = inputFileRef.current.files[0];

    try {
      const response = await fetch(`/api/avatar/upload?filename=${file.name}`, {
        method: "POST",
        body: file,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const newBlob = (await response.json()) as PutBlobResult;

      setBlob(newBlob);
      setIsEdited(false);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    if (blob !== null) {
      createAuthUserAction(name, email, blob.url, sid as string);
    }
  }, [blob]);

  return (
    <>
      {isEdited && (
        <form
          onSubmit={submitHandler}
          className="absolute -top-[76px] -left-[115px]"
        >
          <input
            name="file"
            ref={inputFileRef}
            type="file"
            required
            className="py-2.5 pl-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          />
          <div className="flex ">
            <button
              type="submit"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Upload
            </button>
            <p className="mt-1 text-gray-500 dark:text-gray-300 text-xs italic">
              SVG, PNG, or JPG (MAX. 4.5 MB)
            </p>
          </div>
          {error && (
            <p className="mt-2 text-red-500 dark:text-red-400 text-sm">
              {error}
            </p>
          )}
          <button
            type="button"
            onClick={onCloseEditClickHandler}
            className="absolute top-0 right-[10px] bg-transparent border-none"
          >
            <Image src={close} width={20} height={20} alt="close icon" />
          </button>
        </form>
      )}
      <div className="relative max-w-[80px] group">
        <div className="relative">
          <Image
            src={blob ? blob.url : picture}
            alt={name}
            width={80}
            height={80}
            className="rounded-full group-hover:brightness-50 transition duration-300 "
          />
          <button
            onClick={onPictureEditClickHandler}
            className="absolute inset-0 flex items-center justify-center bg-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <Image src={edit} alt="edit icon" width={24} height={24} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileImage;
