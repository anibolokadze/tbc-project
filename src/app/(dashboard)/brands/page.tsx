"use client";
import { useState, useEffect } from "react";
import { getProducts } from "../../../../api";
import ProductItem from "../../../components/ProductItemOld";
import { Product } from "../../../types";
import Layout from "../../../components/layout";

const Brands = () => {
  const [brands, setBrands] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [addedProductId, setAddedProductId] = useState<number | null>(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch("/api/brands");
        if (!response.ok) throw new Error("Failed to fetch brands");
        const data = await response.json();
        setBrands(data.brands);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchBrands();
  }, []);

  useEffect(() => {
    const fetchProductsByBrands = async () => {
      setLoading(true);
      try {
        const promises = selectedBrands.map((brand) =>
          getProducts(undefined, [brand])
        );
        const productsArrays = await Promise.all(promises);
        const mergedProducts = productsArrays.reduce(
          (accumulator, currentArray) => accumulator.concat(currentArray),
          []
        );
        setProducts(mergedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    if (selectedBrands.length > 0) {
      fetchProductsByBrands();
    } else {
      const fetchAllProducts = async () => {
        setLoading(true);
        try {
          const allProducts = await getProducts();
          setProducts(allProducts);
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchAllProducts();
    }
  }, [selectedBrands]);

  const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const brand = event.target.value;
    if (event.target.checked) {
      setSelectedBrands((prevSelectedBrands) => [...prevSelectedBrands, brand]);
    } else {
      setSelectedBrands((prevSelectedBrands) =>
        prevSelectedBrands.filter((selectedBrand) => selectedBrand !== brand)
      );
    }
  };

  const handleClick = (productId: number) => {
    console.log(`Product with id ${productId} clicked.`);
    setAddedProductId(productId);
    setTimeout(() => {
      setAddedProductId(null);
    }, 3000);
  };
  return (
    <Layout>
      <section className="mt-20">
        {addedProductId && <p>Product with ID {addedProductId} was added!</p>}
        <div className="brand-selection">
          <h2>Select a Brand</h2>

          {brands.map((brand) => (
            <div key={brand}>
              <input
                type="checkbox"
                id={brand}
                name={brand}
                value={brand}
                onChange={handleBrandChange}
              />
              <label htmlFor={brand}>{brand}</label>
            </div>
          ))}
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="product-list">
            {products.length === 0 ? (
              <p>No products found for this brand.</p>
            ) : (
              products.map((product) => (
                <ProductItem
                  key={product.id}
                  card={product}
                  handleClick={handleClick}
                />
              ))
            )}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Brands;
