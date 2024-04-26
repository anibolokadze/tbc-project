"use client";
import { ChildrenProps } from "../types";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: ChildrenProps) => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex-1 overflow-y-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
