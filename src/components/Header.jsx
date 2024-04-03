"use client";
import Link from "next/link";
import Image from "next/image";

const Header = ({ about, contact, logo, profile }) => {
  return (
    <header>
      <nav>
        <ul className="flex justify-between">
          <li>
            <Link href="/">
              <Image src={logo} width={50} height={50} alt={logo} />
            </Link>
          </li>

          <div className="flex gap-x-5 items-center">
            <li>
              <Link href="/about">{about}</Link>
            </li>
            <li>
              <Link href="/contact">{contact}</Link>
            </li>

            <li>
              <Link href="/profile">
                <Image src={profile} width={50} height={50} alt={profile} />
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
