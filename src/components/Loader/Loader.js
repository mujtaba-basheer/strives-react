import React from "react";

import loadinggif from "../../assets/gif/loading.gif";

const Loader = ({ height }) => {
  height = height + "px";

  return (
    <div
      style={{
        marginTop: height,
      }}
    >
      <img
        style={{
          display: "block",
          margin: "0 auto",
        }}
        src={loadinggif}
        alt="loading"
      />
    </div>
  );
};

export default Loader;
