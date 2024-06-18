"use client";
import Layout from "../../components/layout";
import Cover from "../../components/Cover";
import Category from "../../components/Category";
import Brands from "../../components/Brands";

const Home = () => {
  return (
    <Layout>
      <Cover />
      <Category />
      <Brands />
    </Layout>
  );
};

export default Home;
