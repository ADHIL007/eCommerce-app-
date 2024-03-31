import React, { useEffect, useState } from "react";
import "./Home.css";
import CategoriesBox from "../../components/categoryGrids/CategoriesBox";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
  category: {
    id: number;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
  };
}

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortByPrice, setSortByPrice] = useState<string>("All Prices");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
        const productsData = await productsResponse.json();
        setProducts(productsData);

        const categoriesResponse = await fetch(
          "https://api.escuelajs.co/api/v1/categories"
        );
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log("Products:", products);
  console.log("Categories:", categories);

  const filteredProducts = products.filter((product) => {
    return (
      selectedCategory === "All" || product.category.name === selectedCategory
    );
  });

  const sortedProducts = filteredProducts.slice().sort((a, b) => {
    if (sortByPrice === "Low Price") {
      return a.price - b.price;
    } else if (sortByPrice === "High Price") {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  return (
    <div>
      <div className="home-carousel">
        <img
          className="home-carousel-image"
          src="https://placehold.co/1024x400/jpeg"
          alt="Ecommerce Banner"
        />
      </div>
      <h1 className="home-category-title">Categories</h1>
      <div className="home-categories">
        {categories.slice(0, 5).map((category, index) => (
          <Link to={`/category/${category.id}/products`} key={index}>
            <CategoriesBox data={category} />
          </Link>
        ))}
      </div>
      <h1 className="home-category-title">All Products</h1>

      <div className="home-filters">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <select
          value={sortByPrice}
          onChange={(e) => setSortByPrice(e.target.value)}
        >
          <option value="All Prices">All Prices</option>
          <option value="Low Price">Low Price</option>
          <option value="High Price">High Price</option>
        </select>
      </div>

      <div className="home-products">
        {sortedProducts.length === 0 ? (
          <div className="no-products">
            <h3 className="no-products-message">
              No products match the selected category.
            </h3>
          </div>
        ) : (
          sortedProducts.map((product, index) => (
            <div key={index}>
              <ProductCard data={product} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
