import React from "react";

import Navbar from "../Navbar/index";
import Footer from "../Footer/index";
import Showcase from "./Showcase";
import LatestCollections from "./LatestCollection";
import Feature from "./Feature";
import Themes from "./Themes";
import BestSeller from "./BestSeller";
import Newsletter from "./Newsletter";
import Customize from "./Customize";

const Index = () => {
  return (
    <>
      <Navbar />
      <Showcase />
      <LatestCollections />
      <Feature />
      <Themes />
      <Customize />
      <BestSeller />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Index;
