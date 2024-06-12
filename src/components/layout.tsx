"use client";
import { ChildrenProps } from "../types";
import Footer from "./Footer";
// import Header from "./HeaderOld";
import Header from "./Header";

const Layout = ({ children }: ChildrenProps) => {
  return (
    <>
      <div className="">
        <Header />
        <main className="">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
