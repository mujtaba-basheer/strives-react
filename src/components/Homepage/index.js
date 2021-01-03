import React from "react";

import Navbar from "../Navbar";
import Showcase from "./Showcase";
import LatestCollections from "./LatestCollection";

const index = () => {
  return (
    <>
      <Navbar />
      <Showcase />
      <LatestCollections />
    </>
  );
};

export default index;
