import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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

function ProductDetails() {
  const { productId } = useParams();
  const [productData, setProductData] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products/${productId}`
        );
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError(true);
      }
    };

    fetchData();
  }, [productId]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (productData) {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % productData.images.length
        );
      }
    }, 1500);

    return () => clearInterval(intervalId);
  }, [productData]);

  if (error) {
    return (
      <div className="error-message">
        <h1>Product Not found</h1>
        <p>Please check the product ID</p>
      </div>
    );
  }

  if (!productData) {
    return <div>Loading...</div>;
  }

  const { title, price, description, images } = productData;
  const currentImage = images[currentImageIndex];

  const handleAddToCart = () => {
    console.log("Product added to cart:", productData.title);
  };

  const handleBuyNow = () => {
    console.log("Product added to cart:", productData.title);
  };

  return (
    <div className="product-details-container">
      <div className="product-details-image">
        <img src={currentImage} alt={title} />
        <div className="product-details-thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              className={index === currentImageIndex ? "active" : ""}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className="product-details-info">
        <h2>{title}</h2>
        <p className="price">${price}</p>
        <p className="description">{description}</p>


        <Button
          variant="contained"
          color="primary"
          startIcon={<ShoppingCartIcon />}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
        <Button variant="contained" color="success" sx={{ marginLeft: "10px" }} onClick={handleBuyNow}>
          Buy now
        </Button>
      </div>
    </div>
  );
}

export default ProductDetails;
