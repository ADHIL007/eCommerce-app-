import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ProductCard({ data }: any) {
  const handleAddToCart = () => {
    console.log('Product added to cart:', data.title);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${data.id}`} className="product-link">
        <img className="product-image" src={data.images[0]} alt={data.title} />
        <div className="product-details">
          <h3 className="product-title">{data.title}</h3>
          <p className="product-price">${data.price}</p>
        </div>
      </Link>
      <Button
        variant="contained"
        color="primary"
        startIcon={<ShoppingCartIcon />}
        onClick={handleAddToCart}
        className="add-to-cart-button"
      >
        Add to Cart
      </Button>
    </div>
  );
}

export default ProductCard;
