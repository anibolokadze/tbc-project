"use client";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, ...data }) => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header {...data.header} />
        <main className="flex-1 overflow-y-auto">{children}</main>
        <Footer {...data.footer} />
      </div>
    </>
  );
};

export default Layout;
