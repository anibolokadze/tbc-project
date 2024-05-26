"use client";

import type { PutBlobResult } from "@vercel/blob";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { createAuthUserAction } from "../../actions";

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
  const [isEdited, setIsEditied] = useState(false);

  const onPictureEditClickHandler = () => {
    setIsEditied(true);
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputFileRef.current?.files) {
      throw new Error("No file selected");
    }

    const file = inputFileRef.current.files[0];

    const response = await fetch(`/api/avatar/upload?filename=${file.name}`, {
      method: "POST",
      body: file,
    });

    const newBlob = (await response.json()) as PutBlobResult;

    setBlob(newBlob);
    setIsEditied(false);
  };

  useEffect(() => {
    if (blob !== null) {
      createAuthUserAction(name, email, blob.url, sid as string);
    }
  }, [blob]);

  return (
    <>
      {isEdited && (
        <>
          <form onSubmit={submitHandler}>
            <input name="file" ref={inputFileRef} type="file" required />
            <button type="submit">Upload</button>
          </form>
        </>
      )}
      <div className="relative max-w-[80px]">
        <Image
          src={blob ? blob.url : picture}
          alt={name}
          width={80}
          height={80}
          className="rounded-full"
        />
        <button
          onClick={onPictureEditClickHandler}
          className="absolute -top-2 -right-2 cursor-pointer"
        >
          edit
        </button>
      </div>
    </>
  );
};
export default ProfileImage;
