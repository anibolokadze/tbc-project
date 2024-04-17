"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import profile from "../../public/profile.png";
import LogOutButton from "./LogOutButton";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex justify-between">
          <li>
            <Link href="/">
              <Image src={logo} width={50} height={50} alt="logo" />
            </Link>
          </li>
          <div className="flex gap-x-5 items-center">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/profile">
                <Image src={profile} width={50} height={50} alt="profile" />
              </Link>
            </li>
            <li>
              <LogOutButton />
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
