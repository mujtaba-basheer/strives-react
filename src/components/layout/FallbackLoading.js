import React from "react";

const FallbackLoading = () => {
  return (
    <div className="fallback-loading">
      <div class="test">
        <div class="spinner-circle">
          <div class="spinner"></div>
          <img
            className="icon"
            src="https://strives.s3.ap-south-1.amazonaws.com/assets/99605b7f-5b86-4c95-a3bd-f74704579ebb.png"
            alt="strives"
          />
        </div>
      </div>
    </div>
  );
};

export default FallbackLoading;
