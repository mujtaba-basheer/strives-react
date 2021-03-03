import React, { useEffect } from "react";

import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getFav, removeItemFromFav } from "../../redux/actions/cartActions";

import { listMyOrders, loading } from "../../redux/actions/orderActions";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import UserSidebar from "../../components/layout/UserSidebar";
import Alert from "../../components/Alert/Alert";
import Loader from "../../components/Loader/Loader";

import trashicon from "./images/trash.png";
import thumb from "./images/thumb.png";
import backicon from "../../assets/images/icons/back.png";

const MyOrders = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);
  const { favItems } = useSelector((state) => state.fav);
  /* const { error, loading } = useSelector((state) => state.favGet); */

  const { orders, loading } = useSelector((state) => state.orderListMy);

  function addToCart() {
    console.log("clicked");
  }

  function removeFromWishlist(id) {
    dispatch(removeItemFromFav(id));
  }

  useEffect(() => {
    /* if (!userInfo) history.push("/login"); */

    document.title = "Orders";

    if (favItems.length === 0) {
      dispatch(getFav());
    }

    /* console.log(orders.length); */

    /* dispatch(listMyOrders()); */

    if (!loading) {
      if (orders.length === 0) {
        dispatch(listMyOrders());
      }
    }
  }, [userInfo, history, dispatch, favItems, orders]);

  return (
    <>
      {console.log(orders)}
      <Navbar />
      <section className="content container mb-2">
        <div className="userprofile flex">
          <div className="myaccount__left">
            <Link className="backlink" to="/">
              <img
                src={backicon}
                alt="back"
                style={{
                  width: "8px",
                  height: "10px",
                  marginRight: "8px",
                }}
              />{" "}
              Back to shopping
            </Link>
            <UserSidebar selected="MyOrders" />
          </div>

          <div className="myaccount__right">
            <div className="header flex">
              <p className="header__text">My Orders</p>
            </div>

            {/* {error && <Alert type="danger" text={error} />} */}

            {loading && <Loader height={100} />}

            {!loading && orders && orders.length === 0 && (
              <h1
                style={{
                  textAlign: "center",
                }}
              >
                No previouud orders to show
              </h1>
            )}

            {orders && orders.length > 0 && (
              <div className="myorders">
                {orders.map((order) => (
                  <>
                    <ul className="myorders__list" key={order._id}>
                      {order.items.map((product, index) => (
                        <li className="myorders__list--item" key={index}>
                          <div className="myorders__list--itemcontainer flex">
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

                                {product.quantity && (
                                  <p className="size">Size: {product.size}</p>
                                )}
                                {product.quantity && (
                                  <p className="quantity">
                                    Quantity: {product.quantity}
                                  </p>
                                )}
                                <p className="color">Color: Grey</p>
                                <p className="price">Price: ₹{product.sp}</p>
                              </div>
                            </div>
                            <span className="mobileline"></span>
                            <div className="buttons__container flex">
                              <div className="buttons flex">
                                <button
                                  className="buttons__remove flex"
                                  /* onClick={() => removeFromWishlist(product._id)} */
                                >
                                  Order ID : {order._id}
                                </button>
                                {!order.isDelivered && (
                                  <button
                                    /* onClick={addToCart} */
                                    className="buttons__addtocart"
                                  >
                                    Track Order
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                    {1 && <span className="line"></span>}
                  </>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default MyOrders;
