import React, { useEffect } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import { useSelector } from "react-redux";

const ThankYou = () => {
  let history = useHistory();

  const { order } = useSelector((state) => state.orderCurrent);

  useEffect(() => {
    if (!order) history.push("/checkorder");
  }, [order, history]);

  return (
    <>
      <Navbar />
      <section className="content thankyou">
        <div className="thankyou__head">
          <h1 className="thankyou__head--title">
            Thank you for shopping with us!
          </h1>
          <h3 className="thankyou__head--subtitle">
            Your order was completed successfully.
          </h3>
          {order && <h4>Your Order ID: {order["_id"]}</h4>}
        </div>
        <div className="thankyou__tick">
          <svg
            width="78"
            height="75"
            viewBox="0 0 78 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39 0.462891C17.4941 0.462891 0 17.1803 0 37.7314C0 58.2826 17.4941 75 39 75C60.5059 75 78 58.2797 78 37.7314C78 17.1832 60.5059 0.462891 39 0.462891ZM39 69.2264C20.8292 69.2264 6.0418 55.0984 6.0418 37.7314C6.0418 20.3644 20.8292 6.23646 39 6.23646C57.1738 6.23646 71.9582 20.3644 71.9582 37.7314C71.9582 55.0984 57.1708 69.2264 39 69.2264Z"
              fill="#45B685"
            />
            <path
              d="M56.8926 24.768C55.663 23.6998 53.7508 23.7835 52.6271 24.9642L34.1995 44.3556L25.2968 35.7065C24.1216 34.5691 22.2125 34.5518 21.0252 35.6719C19.835 36.7891 19.8168 38.6165 20.989 39.754L32.1331 50.5798C32.7041 51.1341 33.4774 51.443 34.2869 51.443C34.305 51.443 34.3262 51.443 34.3443 51.4459C35.1781 51.4286 35.9636 51.0879 36.5224 50.499L57.0978 28.8473C58.2187 27.6635 58.1281 25.8391 56.8926 24.768Z"
              fill="#45B685"
            />
          </svg>
        </div>
        <div className="thankyou__noti">
          <p className="thankyou__noti--para">
            An SMS containing your order details was just sent to you.
          </p>
          <p className="thankyou__noti--para">
            You can also track your orders under{" "}
            <Link to={`/checkorder`}>Check Order</Link>.
          </p>
        </div>
        <div className="thankyou__cta">
          <button
            onClick={() => {
              history.push("/");
            }}
            className="cta"
          >
            Continue Shopping
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ThankYou;
