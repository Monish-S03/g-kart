import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SearchResults.css";
import { useCart } from "./CartContext";
import allProducts from "./allProductsData";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
  const query = useQuery().get("query")?.toLowerCase() || "";
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [sortAsc, setSortAsc] = useState(true);

  // Get maximum price
  const prices = allProducts.map(p => p.priceAfterDiscount);
  const maxAvailable = Math.max(...prices);
  const [priceCap, setPriceCap] = useState(maxAvailable);

  // Filter products based on search query and price cap
  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().startsWith(query) &&
    product.priceAfterDiscount <= priceCap
  );

  // Sort filtered products by price
  const sortedProducts = [...filteredProducts].sort((a, b) =>
    sortAsc
      ? a.priceAfterDiscount - b.priceAfterDiscount
      : b.priceAfterDiscount - a.priceAfterDiscount
  );

  return (
    <div className="productes-grid">
      {/* Top bar with back and sort buttons */}
      <div className="top-bar">
        <button className="back-button" onClick={() => navigate("/")}>
          ← Back to Products
        </button>

        <button className="sort-button" onClick={() => setSortAsc(!sortAsc)}>
          Sort by Price: {sortAsc ? "Low to High" : "High to Low"}
        </button>
      </div>

      {/* Price range filter */}
      <div className="price-filter">
        <label>Show products below ₹{priceCap}</label>
        <input
          type="range"
          min="0"
          max={maxAvailable}
          value={priceCap}
          step="100"
          onChange={e => setPriceCap(Number(e.target.value))}
        />
      </div>

      {/* Product cards */}
      <div className="products-card-container">
        {sortedProducts.length > 0 ? (
          sortedProducts.map(product => (
            <div className="products-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>
                <span className="original-price">₹{product.price}</span>
                <span className="discount">{product.discount}% off</span>
                <span className="final-price">₹{product.priceAfterDiscount}</span>
              </p>
              <button className="add-to-cart" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="no-results">
            No results found for "<strong>{query}</strong>" below ₹{priceCap}
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
