import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../../redux/counterSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

function Productlist() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.counter.cart);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
    toast.success(" remove from cart", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div>
      <div className="container shadow m-4 p-4">
        <div className="col-lg-12 col-sm-12">
          <table className="table table-bordered bg-white">
            <thead className="bg-white">
              <tr>
                <td className="hidden-xs">Image</td>
                <td>Product Name</td>
                <td>Quantity</td>
                <td>Total</td>
                <td>Price</td>
                <td>Remove</td>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="hidden-xs">
                    <a href="#">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        title={item.Name}
                        tile={item.quantity}
                        width={47}
                        height={47}
                      />
                    </a>
                  </td>
                  <td>{item.title}</td>
                  <td>
                    <div className="quantity-control">
                      <button
                        className="quantity-button "
                        onClick={() => {
                          if (item.quantity > 1) {
                            dispatch(
                              updateQuantity({ id: item.id, value: -1 })
                            );
                          }
                        }}
                      >
                        -
                      </button>
                      <span className="quantity-display">{item.quantity}</span>
                      <button
                        className="quantity-button  bg-black-50"
                        onClick={() => {
                          dispatch(updateQuantity({ id: item.id, value: 1 }));
                        }}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>${item.price}</td>
                  <td className="price">${item.price * item.quantity}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveItem(item)}
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
                </tr>
              ))}
              <tr>
                <td colSpan={3} align="right">
                  Total
                </td>
                <td className="total" colSpan={2}>
                  <b>$ {calculateTotal()}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Productlist; 
