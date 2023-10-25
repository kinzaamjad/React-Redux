import React, { useState, useEffect } from "react";
import "./index.css";
import { Network, Url } from "../../config";
import { useDispatch } from "react-redux";
import ProductCard from "../../components/cards/ProductCard";

function ProductList() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await Network.get(Url.getProducts);
      setProducts(response?.data?.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div>
      <section className="section m-4 p-0">
        <div className="container-fluid border">
          <div className="row m-2 p-2 text-center">
            {products.map((product, i) => (
              <ProductCard
                key={i}
                product={product}
                style={{ marginBottom: "16px" }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductList;
