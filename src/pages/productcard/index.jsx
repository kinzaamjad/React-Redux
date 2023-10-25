import React, { useEffect, useState } from "react";
import { Network, Url } from "../../config";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    const response = await Network.get(Url.getProducts);
    console.log(response);
    setProducts(response?.data?.products);
  };
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-12 col-md-4 shadow p-3 mb-5 bg-white rounded">
        <div className="card p-4">
          <h1>Product List</h1>
          <div className="text-section justify-left">
            <Link
              to="/productlist"
              className="btn btn-success btn-sm float-end"
              onClick={fetchProducts}
            >
              ADD
            </Link>
            <ToastContainer /> 
          </div>
          <ul>
            {products?.map((product) => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Product;
