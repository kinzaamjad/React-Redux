import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCompare } from "../../redux/counterCompare/index";
import { addToFavorite } from "../../redux/counterFrvt/index";

function Navbar() {
  const cart = useSelector((state) => state.counter.cart);
  const comparedProducts = useSelector(
    (state) => state.compare.comparedProducts
  );

  const favoriteProducts = useSelector(
    (state) => state.favorite.favoriteProducts
  );

  const dispatch = useDispatch();

  const handleCompareProducts = (id) => {
    dispatch(
      addToCompare({
        id: productId,
        name: product.name,
        price: product.price,
      })
    );
  };
  const handleFavoriteClick = (product) => {
    dispatch(addToFavorite({ id: product.id }));
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg text-light bg-secondary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-light fw-bold">
            React Redux Project
          </Link>
          <Link to="/card" className="btn btn-secondary">
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-cart-shopping">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-cart-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm"></path>
                  {cart.length > 0 && (
                    <circle cx="11" cy="5" r="5" fill="red" />
                  )}
                  {cart.length > 0 && (
                    <text
                      x="11"
                      y="7"
                      fontSize="7"
                      fill="white"
                      textAnchor="middle"
                    >
                      {cart.length}
                    </text>
                  )}
                </svg>
              </i>
            </div>
          </Link>
        </div>
        <Link to="/comparelist" className="btn btn-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-arrow-left-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
            ></path>
            {comparedProducts.length > 0 && (
              <>
                <circle cx="11" cy="5" r="5" fill="red" />
                <text
                  x="10"
                  y="7"
                  fontSize="7"
                  fill="white"
                  textAnchor="middle"
                >
                  {comparedProducts.length}
                </text>
              </>
            )}
          </svg>
        </Link>

        <button className="btn btn-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            {favoriteProducts.length > 0 && (
              <>
                <circle cx="11" cy="5" r="5" fill="red" />
                <text
                  x="10"
                  y="7"
                  fontSize="7"
                  fill="white"
                  textAnchor="middle"
                >
                  {favoriteProducts.length}
                </text>
              </>
            )}
          </svg>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
