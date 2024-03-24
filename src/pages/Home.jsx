import React from "react";
import data from "../data";
import Content from "../Components/Product/Product";

const Home = () => {
  return (
    <>
      {data.content.map((content, index) => (
        <Content
          key={index}
          title={content.title}
          description={content.description}
          imageUrl={content.imageUrl}
          imageAlt={content.imageAlt}
        />
      ))}
    </>
  );
};

export default Home;
