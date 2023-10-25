import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/counterSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { addToCompare } from "../../redux/counterCompare";
import { addToFavorite, removeFromFavorite } from "../../redux/counterFrvt";

export default function ProductCard({ product }) {
  const compareProducts = useSelector(
    (state) => state.compare.comparedProducts
  );

  const isComparedProduct = compareProducts.find(
    (comparedProduct) => product.id == comparedProduct.id
  );
  const favoriteProducts = useSelector(
    (state) => state.favorite.favoriteProducts
  );

  const isFavorite = favoriteProducts.includes(product.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite({ product: { id: product.id } }));
    } else {
      dispatch(addToFavorite({ product: { id: product.id } }));
    }
    const message = isFavorite
      ? "Removed from Favorites"
      : "Added to Favorites";
    toast.success(message, { position: toast.POSITION.TOP_CENTER });
  };

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Added to Cart", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleCompareProducts = () => {
    dispatch(addToCompare({ product }));

    toast.success("Added to compare", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="col-sm-12 col-md-4 mb-4 shadow">
      <div className="border rounded-2" style={{ height: "400px" }}>
        <div className="border" style={{ width: "100%", height: "250px" }}>
          <img
            src={product.thumbnail}
            alt="Product Thumbnail"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </div>
        <div className="d-flex justify-content-between align-items-center mt-2 p-2">
          <h>{product.title}</h>
          <h6>Price: {product.price}</h6>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              class="bi bi-heart-fill"
              viewBox="0 0 16 16"
              onClick={handleFavoriteClick}
              style={{ cursor: "pointer" }}
            >
              <path
                fill={isFavorite ? "red" : "white"}
                stroke="black"
                stockwidth="2"
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
              />
            </svg>
          </div>
        </div>

        <div className="grid gap-2 d-md-flex justify-content-md-center m-4">
          <button className="btn btn-secondary" onClick={handleAddToCart}>
            Add to Cart
          </button>
          {!isComparedProduct ? (
            <button
              className="btn btn-secondary"
              onClick={handleCompareProducts}
            >
              Compare
            </button>
          ) : null}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
