import React from "react";
import Image from "next/image";
import apple from "../../../../public/icons8-apple-logo.svg";
import hp from "../../../../public/icons8-hp.svg";
import xiaomi from "../../../../public/icons8-xiaomi.svg";
import Link from "next/link";

const index = () => {
  return (
    <Link href="/brands" className="bg-red-500">
      <Image src={apple} alt="" height={50} width={50} />
      <Image src={xiaomi} alt="" height={50} width={50} />
      <Image src={hp} alt="" height={50} width={50} />
    </Link>
  );
};

export default index;
