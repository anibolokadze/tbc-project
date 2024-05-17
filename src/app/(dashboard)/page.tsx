"use client";

import { useState } from "react";
import Products from "../../components/Products";
import Search from "../../components/Search";
import Layout from "../../components/layout";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Layout>
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
