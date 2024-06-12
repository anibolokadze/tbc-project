"use client";

import { useState } from "react";
import Products from "../../components/Products";
import Layout from "../../components/layout";
import Search from "../../components/Search";
// import Spline from "../../components/Spline";
// import Parallax from "../../components/Parallax";
// import Slider from "../../components/Slider";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Layout>
      {/* <Spline /> */}
      {/* 
      <section className="mt-14">
        <Parallax />
      </section>

      <Slider /> */}

      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isSorted={false}
        setIsSorted={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Products searchQuery={searchQuery} />
    </Layout>
  );
};

export default Home;
