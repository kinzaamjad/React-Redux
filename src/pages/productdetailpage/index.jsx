import React, { useEffect, useState } from "react";
import { Network, Url } from "../../config";
import { useLocation } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/counterSlice";

import "./index.css";

function Productdetailpage() {
  const location = useLocation();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  navigate("/productdetailpage");

  const [productData, setProductData] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const fetchProduct = async () => {
    const response = await Network.get(
      `${Url.getProducts}/${location.state.id}`
    );
    setProductData(response?.data);
  };

  return (
    <div>
      <div className="container">
        {productData && (
          <div className="card shadow" height="40px" width="40px">
            <div className="container-fluid">
              <div className="wrapper row">
                <div className="preview col-md-6 ">
                  {productData.images && productData.images.length > 0 && (
                    <Carousel>
                      {productData.images.map((image, index) => (
                        <div className="tab-pane" key={index}>
                          <img src={image} alt={`Image ${index + 1}`} />
                        </div>
                      ))}
                    </Carousel>
                  )}
                </div>
                <div className="col-md-6">
                  <h3 className="product-title">{productData.productName}</h3>
                  <h1 className="brand">
                    Brand:{" "}
                    <span className="bg bg-red">{productData.brand}</span>
                  </h1>
                  <hr />
                  <p className="price">
                    Price:{" "}
                    <span className="bg bg-red">{productData.price}</span>
                  </p>
                  <p className="title">
                    Title:{" "}
                    <span className="bg bg-red">{productData.title}</span>
                  </p>
                  <p className="category">
                    Category:{" "}
                    <span className="bg bg-red">{productData.category}</span>
                  </p>
                  <p className="description">{productData.description}</p>
                  <p className="stock">
                    Stock:{" "}
                    <span className="bg bg-red">{productData.stock}</span>
                  </p>
                  <p className="rating">
                    Rating:{" "}
                    <span className="bg bg-red">{productData.rating}</span>
                  </p>
                  <hr />
                  <div className="-grid gap-2 d-md-flex justify-content-md-center m-4 p-4">
                    <button
                      onClick={() => handleAddToCart(productData)}
                      className="btn btn-secondary"
                    >
                      ADD TO BAG
                    </button>
                    <Link to="/compare" className="btn btn-secondary">
                      Compare
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          // </div>
        )}
      </div>
    </div>
  );
}

export default Productdetailpage;
