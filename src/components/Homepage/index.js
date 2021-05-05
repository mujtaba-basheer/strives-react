import React, { useEffect } from "react";

import Navbar from "../Navbar/index";
import Footer from "../Footer/index";
import Showcase from "./Showcase";
import LatestCollections from "./LatestCollection";
import Feature from "./Feature";
import Themes from "./Themes";
import BestSeller from "./BestSeller";
import Newsletter from "./Newsletter";
import Occassion from "./Occassion";
import Sets from "./Sets";
import Festivals from "./Festivals";
// import Customize from "./Customize";

const Index = () => {
  useEffect(() => {
    document.title = "Welcome to the Strives";
  });

  return (
    <>
      <Navbar />
      <Showcase />
      <LatestCollections />
      <Feature />
      <Occassion />
      <Festivals />
      <Sets />
      {/* <Customize /> */}
      <BestSeller />
      <Themes />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Index;
