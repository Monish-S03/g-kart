import React from "react";
import { useParams } from "react-router-dom";
import allProducts from "./allProductsData";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = allProducts.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div style={{ padding: "30px" }}><h2>Product not found!</h2></div>;
  }

  return (
    <div style={{ padding: "30px", maxWidth: "800px", margin: "auto" }}>
      <img src={product.image} alt={product.name} style={{ width: "100%", maxWidth: "400px" }} />
      <h2>{product.name}</h2>
      <p>Original Price: ₹{product.price}</p>
      <p>Discount: {product.discount}%</p>
      <p style={{ fontWeight: "bold", color: "green" }}>
        Price After Discount: ₹{product.priceAfterDiscount}
      </p>
      <p style={{ marginTop: "20px" }}>
        📄 <strong>Full specifications</strong> of {product.name} will be shown here. You can list technical details, materials, usage instructions, etc.
      </p>
    </div>
  );
};

export default ProductDetails;
