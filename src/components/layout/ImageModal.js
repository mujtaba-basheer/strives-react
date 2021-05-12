import React, { useEffect } from "react";

const ImageModal = ({ modalImageSrc, setShowImageModal }) => {
  function hideQuickView() {
    setShowImageModal("false");
    document.getElementsByTagName("body")[0].style.overflow = "auto";
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
        <span onClick={hideQuickView} className="quickviewmodal__close" style={{
          top: "15px",
          right: "20px",
          background: "#fff",
          borderRadius: "40px",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}>
          &times;
        </span>
        <img src={modalImageSrc} alt="modal" />
      </div>
    </div>
  );
};

export default ImageModal;
