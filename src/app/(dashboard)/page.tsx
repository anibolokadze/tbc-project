// "use client";

// import { useState } from "react";
// import Products from "../../components/Products";
// import Layout from "../../components/layout";
// import Search from "../../components/Search";
// import Cover from "../../components/Cover";
// // import Spline from "../../components/Spline";
// // import Parallax from "../../components/Parallax";
// // import Slider from "../../components/Slider";

// const Home = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   return (
//     <Layout>
//       {/* <Spline /> */}
//       {/*
//       <section className="mt-14">
//         <Parallax />
//       </section>

//       <Slider /> */}

//       <Cover />
//       <Search
//         searchQuery={searchQuery}
//         setSearchQuery={setSearchQuery}
//         isSorted={false}
//         setIsSorted={function (): void {
//           throw new Error("Function not implemented.");
//         }}
//       />
//       <Products searchQuery={searchQuery} />
//     </Layout>
//   );
// };

// export default Home;

"use client";
import Layout from "../../components/layout";
import Cover from "../../components/Cover";
import Category from "../../components/Category";

const Home = () => {
  // useEffect(() => {
  //   const fetchAllProducts = async () => {
  //     try {
  //       const products = await getProducts();
  //       const groupedProducts: { [key: string]: any[] } = products.reduce(
  //         (acc: any, product: any) => {
  //           if (!acc[product.category]) {
  //             acc[product.category] = [];
  //           }
  //           if (acc[product.category].length < 4) {
  //             acc[product.category].push(product);
  //           }
  //           return acc;
  //         },
  //         {}
  //       );
  //       setCategories(groupedProducts);
  //       setLoading(false);
  //     } catch (err) {
  //       console.error("Error fetching products:", err);
  //       setError("Failed to fetch products");
  //       setLoading(false);
  //     }
  //   };

  //   fetchAllProducts();
  // }, []);

  // if (loading) {
  //   return (
  //     <Layout>
  //       <p>Loading...</p>
  //     </Layout>
  //   );
  // }

  // if (error) {
  //   return (
  //     <Layout>
  //       <p>{error}</p>
  //     </Layout>
  //   );
  // }

  return (
    <Layout>
      <Cover />
      {/* <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isSorted={false}
        setIsSorted={() => {}}
      /> */}
      {/* <Category searchQuery={searchQuery} /> */}
      <Category />
    </Layout>
  );
};

export default Home;
