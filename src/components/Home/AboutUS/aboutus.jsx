import React, { useEffect } from "react";
import NavBar from "../navbar";
import E1 from "../../../assets/images/e1.jpg";
import E2 from "../../../assets/images/e2.jpg";
import E3 from "../../../assets/images/e3.jpg";
import E4 from "../../../assets/images/e4.jpg";
import E5 from "../../../assets/images/e5.jpg";
import E6 from "../../../assets/images/e6.jpg";
import E7 from "../../../assets/images/e7.jpg";
import Footer from "../../Footer";
export default function AboutUs() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <NavBar />
      <div className="container pt-[80px]">
        <div class="responsive-container-block bigContainer">
          <div class="responsive-container-block Container">
            <div class="responsive-container-block leftSide">
              <p class="text-blk heading">About Us</p>
              <p class="text-blk subHeading">
                This website is an online education platform.Our goal is to make
                learning English as easy and enjoyable as possible, no matter
                your starting point.Our mission is to make high-quality English
                education accessible to everyone.
              </p>
            </div>
            <div class="responsive-container-block rightSide">
              <img class="number1img" src={E4} />
              <img class="number2img" src={E6} />
              <img class="number3img" src={E7} />
              <img class="number5img" src={E5} />
              <img class="number4vid" src={E3} />

              <img class="number7img" src={E1} />
              <img class="number6img" src={E2} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
