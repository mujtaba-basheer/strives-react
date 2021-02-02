import React from "react";

import quick1 from "./images/quick1.png";
import quick2 from "./images/quick2.png";
import quick3 from "./images/quick3.png";
import quick4 from "./images/quick4.png";

const QuickView = () => {
  function hideQuickView() {
    var quickviewmodal = document.getElementById("quickviewmodal");
    quickviewmodal.style.display = "none";
  }

  function swapMainImage(event) {
    const src = event.target.src;
    const mainImage = document.getElementById("quickview-mainimage");
    mainImage.src = src;
  }

  return (
    <div id="quickviewmodal" className="quickviewmodal">
      <span onClick={hideQuickView} className="quickviewmodal__close">
        &times;
      </span>

      <div className="quickviewmodal__content">
        <div className="productimages">
          <div className="productimages__thumbs">
            <div>
              <img
                onClick={(e) => {
                  swapMainImage(e);
                }}
                src={quick1}
                alt="quick"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                onClick={(e) => {
                  swapMainImage(e);
                }}
                src={quick2}
                alt="quick"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                onClick={(e) => {
                  swapMainImage(e);
                }}
                src={quick3}
                alt="quick"
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div className="productimages__main">
            <img
              id="quickview-mainimage"
              src={quick1}
              alt="quick"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="productdetails">
          <div className="productdetails__header">
            <p className="mainheading">MALIHA BY ANAR AND ANOLI</p>
            <p className="subheading">
              Persian Blue and Green Embroidered Kurta Set
            </p>
            <p className="price">Rs. 34,000</p>
          </div>

          <div className="sizes">
            <span>xs</span>
            <span>xs</span>
            <span>xs</span>
            <span>xs</span>
            <span>xs</span>
          </div>

          <p className="sizeguide">view size guide</p>

          <a href="">wishlist</a>
          <a href="">add to cart</a>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
