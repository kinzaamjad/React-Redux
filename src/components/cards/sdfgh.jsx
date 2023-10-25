import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/counterSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { addToCompare } from "../../redux/counterCompare";
import { addToFavorite, removeFromFavorite } from "../../redux/counterFrvt";

export default function ProductCard({ product }) {
  const compareProducts = useSelector((state) => state.compare.comparedProducts);
  const favoriteProducts = useSelector((state) => state.favorite.favoriteProducts);
  
  const isComparedProduct = compareProducts.find((comparedProduct) => product.id === comparedProduct.id);
  const isFavorite = favoriteProducts.includes(product.id);

  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite({ product: { id: product.id } }));
    } else {
      dispatch(addToFavorite({ product: { id: product.id } }));
    }
    const message = isFavorite ? "Removed from Favorites" : "Added to Favorites";
    toast.success(message, { position: toast.POSITION.TOP_CENTER });
  };

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
       
        <div className="grid gap-2 d-md-flex justify-content-md-center m-4">
          <button className="btn btn-secondary" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="btn btn-secondary" onClick={handleFavoriteClick}>
            {isFavorite ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                class="bi bi-heart-fill"
                viewBox="0 0 16 16"
                style={{ cursor: "pointer", fill: "red" }}
              >
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                class="bi bi-heart-fill"
                viewBox="0 0 16 16"
                style={{ cursor: "pointer" }}
              >
              </svg>
            )}
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
