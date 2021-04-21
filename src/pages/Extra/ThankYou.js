import React from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ThankYou = () => {
  return (
    <>
      <Navbar />
      <section className="content thankyou">
        <h1 className="heading">Thank You for ordering</h1>
        <h1 className="subheading">
          You will be contacted shortly by our representative confirming your
          order.
        </h1>
        <button className="cta">Continue Shopping</button>
      </section>
      <Footer />
    </>
  );
};

export default ThankYou;
