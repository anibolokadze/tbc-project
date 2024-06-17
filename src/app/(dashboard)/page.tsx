"use client";
import Layout from "../../components/layout";
import Cover from "../../components/Cover";
import Category from "../../components/Category";
import Brands from "../../components/Brands/Home";
const Home = () => {
  return (
    <Layout>
      <Cover />
      <Category />
      <h2>choose brands</h2>
      <div className="bg-red-500">
        <Brands />
      </div>
    </Layout>
  );
};

export default Home;
