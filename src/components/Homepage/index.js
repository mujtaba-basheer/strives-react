import React from "react";

import Navbar from "../Navbar";
import Showcase from "./Showcase";
import LatestCollections from "./LatestCollection";
import Feature from "./Feature";
import Themes from "./Themes";

const index = () => {
  return (
    <>
      <Navbar />
      <Showcase />
      <LatestCollections />
      <Feature />
      <Themes />
    </>
  );
};

export default index;
