import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import {
  removeFromCompare,
  compareProducts,
  addToCompare,
} from "../../redux/counterCompare";

import { addToCart } from "../../redux/counterSlice";

function ComparisonList() {
  const dispatch = useDispatch();
  const comparedProducts = useSelector(
    (state) => state.compare.comparedProducts
  );

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));

    toast.success("Added to Cart", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const handleRemoveFromCompare = (product) => {
    dispatch(removeFromCompare({ product }));
    // toast.success("Removed from Compare", {
    //   position: toast.POSITION.TOP_CENTER,
    // });

    function CompareProducts() {
      const comparedProducts = useSelector(
        (state) => state.compare.comparedProducts
      );
    }
  };

  return (
    <div className="container shadow m-4 p-4">
      <div className="col-lg-12 col-sm-12">
        <h1>Compared Products</h1>
        <table className="table table-bordered bg-white">
          <thead className="bg-white">
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Remove</th>
              <th>Add to cart</th>
            </tr>
          </thead>
          <tbody>

            {comparedProducts.map((product) => (
              
              <tr key={product.id}>
                <td className="hidden-xs">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    title={product.Name}
                    width={47}
                    height={47}
                  />
                </td>

                <td>{product.title}</td>
                <td>Rs.{product.price}</td>

                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveFromCompare(product)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-archive-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
                    </svg>
                  </button>
                </td>
                <br></br>
                <button
                  className="bg bg-success"
                  onClick={() => handleAddToCart(product)}
                >
                  add To cart
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComparisonList;
