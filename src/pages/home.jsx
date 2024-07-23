import React, { useEffect } from "react";

import shape6 from "../assets/images/shape-06.svg";

import shape13 from "../assets/images/shape-13.svg";
import HeroSection from "../components/Home/hero";
import { Small } from "../components/Home/smallFeature";
import { About } from "../components/Home/about";
import { Team } from "../components/Home/team";
import { Service } from "../components/Home/service";
import { Price } from "../components/Home/priceTable";
import Navbar from "../components/Home/navbar";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <Navbar />

      <HeroSection />

      <Small />

      <About />

      <Team />

      <Service />

      {/* <Price /> */}
    </div>
  );
};

export default Home;
