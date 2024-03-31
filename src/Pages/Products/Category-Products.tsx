import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';

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

function CategoryProducts() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [sortByPrice, setSortByPrice] = useState('All');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesResponse = await fetch('https://api.escuelajs.co/api/v1/categories');
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    const fetchProducts = async () => {
      try {
        const productsResponse = await fetch(
          `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`
        );
        const productsData = await productsResponse.json();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchCategories();
    if (categoryId) {
      fetchProducts();
    }
  }, [categoryId]);
  useEffect(() => {

    const selectedCategory = categories.find(cat => cat.id === Number(categoryId));
    if (selectedCategory) {
      setCategory(selectedCategory.name);
    }
  }, [categoryId, categories]);

  const applyFilters = (filteredProducts: Product[]) => {
    let sortedProducts = [...filteredProducts];

    if (sortByPrice === 'Low Price') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortByPrice === 'High Price') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    return sortedProducts;
  };

  const filteredProducts = products.length > 0 ? applyFilters(products) : [];

  return (
    <div>
      <h1 className="home-category-title">{category || 'All Products'}</h1>

      <div className="home-filters">
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
        {filteredProducts.length === 0 ? (
          <div className="no-products">
            <h3 className="no-products-message">No products match the selected category.</h3>
          </div>
        ) : (
          filteredProducts.map((product, index) => (
            <div key={index}>
              <ProductCard data={product} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CategoryProducts;
