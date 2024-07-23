import shape1 from "../../assets/images/shape-01.svg";
import shape2 from "../../assets/images/shape-02.svg";
import shape3 from "../../assets/images/shape-03.svg";
import shape4 from "../../assets/images/shape-04.svg";
import Hero from "../../assets/images/e-lea.gif";

const HeroSection = () => {
  return (
    <div>
      <section className="gj do ir hj sp jr i pg ">
        {/* <!-- Hero Images --> */}
        <div className="xc fn zd/2 2xl:ud-w-187.5 bd 2xl:ud-h-171.5 h q r ">
          {/* <img
            src={shape1}
            alt="shape1"
            className="xc 2xl:ud-block h t -ud-left-[10%] ua"
          /> */}
          {/* <img src={shape2} alt="shape2" className="xc 2xl:ud-block h u p va" />
          <img src={shape3} alt="shape3" className="xc 2xl:ud-block h v w va" /> */}
          <img
            src={Hero}
            alt="shape4"
            className="h q r sm:pt-[100px] 2xl:pt-[150px] mt-10"
          />
        </div>

        {/* <!-- Hero Content --> */}
        <div className="bb ze ki xn 2xl:ud-px-0">
          <div className="tc _o">
            <div className="animate_left jn/2">
              <h1 className="fk vj zp or kk wm wb w-full font-black">
                Discover the Joy of Learning English with Us!
              </h1>
              <p className="fq">
                Welcome to our English learning platform, where we make
                mastering the English language an enjoyable and rewarding
                experience. Join us and explore a world of opportunities through
                effective and engaging language education.
              </p>

              <div className="tc tf yo zf mb">
                <a
                  href="/login"
                  className="ek jk lk gh gi hi rg ml il vc _d _l"
                >
                  Get Started Now
                </a>

                <span className="tc sf">
                  <a href="#" className="inline-block ek xj kk wm">
                    {" "}
                    Call us (0123) 456 – 789{" "}
                  </a>
                  <span className="inline-block">
                    For any question or concern
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HeroSection;
