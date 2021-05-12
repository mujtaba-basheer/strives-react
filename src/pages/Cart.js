import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getCart, removeItemFromCart } from "../redux/actions/cartActions";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import trashicon from "./User/images/trash.png";
import hearticon from "../assets/images/icons/heart.png";
import Alert from "../components/Alert/Alert";
import Loader from "../components/Loader/Loader";

const Cart = () => {
  return (
    <>
      <Navbar />
      <CartArea />
      <Footer />
    </>
  );
};

export default Cart;

function CartArea() {
  const dispatch = useDispatch();
  const [cartValue, setCartValue] = useState({
    total: 0,
    subtotal: 0,
  });
  const { user, error } = useSelector((state) => state.userDetails);
  const { cartItems, loading } = useSelector((state) => state.cart);

  const history = useHistory();

  useEffect(() => {
    document.title = "Cart";
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (!cartItems) {
      dispatch(getCart());
    }

    if (cartItems && cartItems.length > 0) {
      let total = 0;
      console.log(cartItems);
      cartItems.forEach((cart) => {
        console.log(cart.sp);
        total += cart.sp * cart.quantity;
      });
      setCartValue({
        total: total,
      });
    }
  }, [error, cartItems, dispatch]);

  return (
    <section className="content cart">
      <div className="heading">
        <p className="heading__text">Cart</p>
      </div>

      {error && <Alert type="danger" text={error} />}

      {loading && <Loader height={100} />}

      {!loading && (!cartItems || cartItems.length === 0) && (
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Cart is empty
        </h1>
      )}
      <div className="cartbox flex">
        <div className="cartbox__left">
          <div className="cartlist">
            {cartItems && cartItems.length > 0 && (
              <ul className="cartlist__list">
                {cartItems.map((product, index) => (
                  <li className="cartlist__list--item" key={product._id}>
                    <div className="cartlist__list--itemcontainer flex">
                      <div className="productdetails flex">
                        <div className="image">
                          <Link to={`/products/${product._id}`}>
                            <img
                              src={product.gallery.small[0].src}
                              alt={product.name}
                            />
                          </Link>
                        </div>
                        <div className="productdetails__subdetails">
                          <Link
                            to={`/products/${product._id}`}
                            className="name"
                          >
                            {product.name}
                          </Link>
                          {product.size && (
                            <p className="size">
                              Size: {product.size.toUpperCase()}
                            </p>
                          )}
                          <p className="quantity">
                            Quantity: {product.quantity}
                          </p>
                          <p className="color">Color: Grey</p>
                          <p className="price">Price: ₹{product.sp}</p>
                        </div>
                      </div>
                      <span className="mobileline"></span>
                      <div className="buttons__container flex">
                        <div className="buttons flex">
                          <button
                            className="buttons__remove flex"
                            onClick={() => {
                              dispatch(
                                removeItemFromCart(product._id, product.size)
                              );
                            }}
                          >
                            <img
                              src={trashicon}
                              alt="trash"
                              style={{
                                width: "11px",
                                height: "14px",
                                marginRight: "4px",
                              }}
                            />
                            Remove Item
                          </button>
                          <button className="buttons__wishlist flex">
                            <img
                              style={{
                                width: "14px",
                                height: "13px",
                                marginRight: "5px",
                              }}
                              src={hearticon}
                              alt="heart"
                            />
                            Move to Wishlist
                          </button>
                        </div>
                      </div>
                    </div>

                    {index <= cartItems.length - 2 && (
                      <span className="line"></span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {cartItems.length > 0 && (
          <div className="cartbox__right">
            <div className="ordersummarybox">
              <div className="ordersummary">
                <p className="ordersummary__heading">Order Summary</p>

                <div className="ordersummary__items">
                  <div className="total">
                    <div className="total-gst flex">
                      <p className="total-gst--text">Total Price (Inc GST)</p>
                      <p className="total-gst--amount">₹{cartValue.total}</p>
                    </div>
                    <div className="total-shipping flex">
                      <p className="total-shipping--text">Estimated Shipping</p>
                      <p className="total-shipping--amount">₹0</p>
                    </div>
                  </div>

                  <div className="subtotal">
                    <div className="subtotal__heading flex">
                      <p className="subtotal__heading--text">Subtotal</p>
                      <p className="subtotal__heading--amount">
                        ₹{cartValue.total}
                      </p>
                    </div>
                    <ul>
                      <li>Free Delivery</li>
                      <li>Inclusive of GST</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="ordersummarybox__footer">
                <button
                  type="submit"
                  id="placeorder"
                  className="ordersummarybox__footer--button"
                  onClick={(e) => {
                    e.preventDefault();
                    history.push("/checkout");
                  }}
                >
                  Place your order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
