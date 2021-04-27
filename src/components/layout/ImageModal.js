import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  CarouselProvider,
  ImageWithZoom,
  Slider,
  Slide,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Alert from "../Alert/Alert";
import SizeChart from "./SizeChart";

import {
  addItemToFav,
  addItemToCart,
  removeItemFromFav,
  addItemToBuyNow,
} from "../../redux/actions/cartActions";

import {
  FAV_ADD_RESET,
  FAV_REMOVE_RESET,
} from "../../redux/constants/cartConstants";
import CustomSizeChart from "./CustomSizeChart";

import heartfillsvg from "./images/heart-fill-brown.svg";
import heart from "./images/heart-outline.svg";

const ImageModal = ({ modalImageSrc, setShowImageModal }) => {
  function hideQuickView() {
    setShowImageModal("false");
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  }

  function swapMainImage(event) {
    const src = event.target.src;
    const mainImage = document.getElementById("quickview-mainimage");
    mainImage.src = src;
  }

  function escFunction(e) {
    if (e.keyCode === 27) hideQuickView();
  }

  function handleClickOutside(e) {
    console.log(e.target.className);

    if (e.target.className === "quickviewmodal") {
      hideQuickView();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    document.addEventListener("click", handleClickOutside, true);
    if (document.getElementById("quickviewmodal").display === "flex") {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div id="quickviewmodal" className="quickviewmodal">
      {console.log(modalImageSrc)}
      <div
        className="quickviewmodal__content flex"
        style={{
          width: "auto",
        }}
      >
        <span onClick={hideQuickView} className="quickviewmodal__close">
          &times;
        </span>
        <img src={modalImageSrc} alt="modal" />
      </div>
    </div>
  );
};

export default ImageModal;
