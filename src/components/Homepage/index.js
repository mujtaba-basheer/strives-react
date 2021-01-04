import React from "react";

import Navbar from "../Navbar/index";
import Showcase from "./Showcase";
import LatestCollections from "./LatestCollection";
import Feature from "./Feature";
import Themes from "./Themes";

const Index = () => {
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

export default Index;
