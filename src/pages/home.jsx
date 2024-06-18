import React from "react";

import shape6 from "../assets/images/shape-06.svg";

import shape13 from "../assets/images/shape-13.svg";
import HeroSection from "../components/Home/hero";
import { Small } from "../components/Home/smallFeature";
import { About } from "../components/Home/about";
import { Team } from "../components/Home/team";
import { Service } from "../components/Home/service";
import { Price } from "../components/Home/priceTable";

const Home = () => {
  return (
    <div>
      <HeroSection />

      <Small />

      <About />

      <Team />

      <Service />

      <Price />

      {/* // <!-- ===== Projects Start ===== --> */}
      <section className="pg pj vp mr oj wp nr">
        {/* <!-- Section Title Start --> */}
        <div x-data="{ sectionTitle: `We Offer Great Affordable Premium Prices.`, sectionTitleText: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.`}">
          <div className="animate_top bb ze rj ki xn vq">
            <h2
              x-text="sectionTitle"
              className="fk vj pr kk wm on/5 gq/2 bb _b"
            ></h2>
            <p className="bb on/5 wo/5 hq" x-text="sectionTitleText"></p>
          </div>
        </div>
        {/* <!-- Section Title End --> */}

        <div className="bb ze ki xn 2xl:ud-px-0 jb" x-data="{filterTab: 1}">
          {/* <!-- Porject Tab --> */}
          <div className="projects-tab _e bb tc uf wf xf cg rg hh rm vk xm si ti fc">
            <button
              data-filter="*"
              className="project-tab-btn ek rg ml il vi mi"
            >
              All
            </button>
            <button
              data-filter=".branding"
              className="project-tab-btn ek rg ml il vi mi"
            >
              Branding Strategy
            </button>
            <button
              data-filter=".digital"
              className="project-tab-btn ek rg ml il vi mi"
            >
              Digital Experiences
            </button>
            <button
              data-filter=".ecommerce"
              className="project-tab-btn ek rg ml il vi mi"
            >
              Ecommerce
            </button>
          </div>

          {/* <!-- Projects item wrapper --> */}
          <div className="projects-wrapper tc -ud-mx-5">
            <div className="project-sizer"></div>
            {/* <!-- Project Item --> */}
            <div className="project-item wi fb vd jn/2 to/3 branding ecommerce">
              <div className="c i pg sg z-1">
                <img src="images/project-01.png" alt="Project" />

                <div className="h s r df nl kl im tc sf wf xf vd yc sg al hh/20 z-10">
                  <h4 className="ek tj kk hc">Photo Retouching</h4>
                  <p>Branded Ecommerce</p>
                  <a
                    className="c tc wf xf ie ld rg _g dh ml il ph jm km jc"
                    href="#"
                  >
                    <svg
                      className="th lm ml il"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.4763 6.16664L6.00634 1.69664L7.18467 0.518311L13.6663 6.99998L7.18467 13.4816L6.00634 12.3033L10.4763 7.83331H0.333008V6.16664H10.4763Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Project Item --> */}
            <div className="project-item wi fb vd jn/2 to/3 digital">
              <div className="c i pg sg z-1">
                <img src="images/project-02.png" alt="Project" />

                <div className="h s r df nl kl im tc sf wf xf vd yc sg al hh/20 z-10">
                  <h4 className="ek tj kk hc">Photo Retouching</h4>
                  <p>Branded Ecommerce</p>
                  <a
                    className="c tc wf xf ie ld rg _g dh ml il ph jm km jc"
                    href="#"
                  >
                    <svg
                      className="th lm ml il"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.4763 6.16664L6.00634 1.69664L7.18467 0.518311L13.6663 6.99998L7.18467 13.4816L6.00634 12.3033L10.4763 7.83331H0.333008V6.16664H10.4763Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Project Item --> */}
            <div className="project-item wi fb vd jn/2 to/3 branding ecommerce">
              <div className="c i pg sg z-1">
                <img src="images/project-04.png" alt="Project" />

                <div className="h s r df nl kl im tc sf wf xf vd yc sg al hh/20 z-10">
                  <h4 className="ek tj kk hc">Photo Retouching</h4>
                  <p>Branded Ecommerce</p>
                  <a
                    className="c tc wf xf ie ld rg _g dh ml il ph jm km jc"
                    href="#"
                  >
                    <svg
                      className="th lm ml il"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.4763 6.16664L6.00634 1.69664L7.18467 0.518311L13.6663 6.99998L7.18467 13.4816L6.00634 12.3033L10.4763 7.83331H0.333008V6.16664H10.4763Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Project Item --> */}
            <div className="project-item wi fb vd vo/3 digital ecommerce">
              <div className="c i pg sg z-1">
                <img src="images/project-03.png" alt="Project" />

                <div className="h s r df nl kl im tc sf wf xf vd yc sg al hh/20 z-10">
                  <h4 className="ek tj kk hc">Photo Retouching</h4>
                  <p>Branded Ecommerce</p>
                  <a
                    className="c tc wf xf ie ld rg _g dh ml il ph jm km jc"
                    href="#"
                  >
                    <svg
                      className="th lm ml il"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.4763 6.16664L6.00634 1.69664L7.18467 0.518311L13.6663 6.99998L7.18467 13.4816L6.00634 12.3033L10.4763 7.83331H0.333008V6.16664H10.4763Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // <!-- ===== Projects End ===== --> */}

      {/* // <!-- ===== Testimonials Start ===== --> */}
      <section className="hj rp hr">
        {/* <!-- Section Title Start --> */}
        <div x-data="{ sectionTitle: `Client’s Testimonials`, sectionTitleText: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.`}">
          <div className="animate_top bb ze rj ki xn vq">
            <h2
              x-text="sectionTitle"
              className="fk vj pr kk wm on/5 gq/2 bb _b"
            ></h2>
            <p className="bb on/5 wo/5 hq" x-text="sectionTitleText"></p>
          </div>
        </div>
        {/* <!-- Section Title End --> */}

        <div className="bb ze ki xn ar">
          <div className="animate_top jb cq">
            {/* <!-- Slider main container --> */}
            <div className="swiper testimonial-01">
              {/* <!-- Additional required wrapper --> */}
              <div className="swiper-wrapper">
                {/* <!-- Slides --> */}
                <div className="swiper-slide">
                  <div className="i hh rm sg vk xm bi qj">
                    {/* <!-- Border Shape --> */}
                    <span className="rc je md/2 gh xg h q r"></span>
                    <span className="rc je md/2 mh yg h q p"></span>

                    <div className="tc sf rn tn un zf dp">
                      <img
                        className="bf"
                        src="images/testimonial.png"
                        alt="User"
                      />

                      <div>
                        <img src="images/icon-quote.svg" alt="Quote" />
                        <p className="ek ik xj _p kc fb">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. In dolor diam, feugiat quis enim sed,
                          ullamcorper semper ligula. Mauris consequat justo
                          volutpat.
                        </p>

                        <div className="tc yf vf">
                          <div>
                            <span className="rc ek xj kk wm zb">
                              Devid Smith
                            </span>
                            <span className="rc">Founter @democompany</span>
                          </div>

                          <img
                            className="rk"
                            src="images/brand-light-02.svg"
                            alt="Brand"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- If we need navigation --> */}
              <div className="tc wf xf fg jb">
                <div className="swiper-button-prev c tc wf xf ie ld rg _g dh pf ml vr hh rm tl zm rl ym">
                  <svg
                    className="th lm"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.52366 7.83336L7.99366 12.3034L6.81533 13.4817L0.333663 7.00002L6.81533 0.518357L7.99366 1.69669L3.52366 6.16669L13.667 6.16669L13.667 7.83336L3.52366 7.83336Z"
                      fill=""
                    />
                  </svg>
                </div>
                <div className="swiper-button-next c tc wf xf ie ld rg _g dh pf ml vr hh rm tl zm rl ym">
                  <svg
                    className="th lm"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4763 6.16664L6.00634 1.69664L7.18467 0.518311L13.6663 6.99998L7.18467 13.4816L6.00634 12.3033L10.4763 7.83331H0.333008V6.16664H10.4763Z"
                      fill=""
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // <!-- ===== Testimonials End ===== --> */}

      {/* // <!-- ===== Counter Start ===== --> */}
      <section className="i pg qh rm ji hp">
        <img src="images/shape-11.svg" alt="Shape" className="of h ga ha ke" />
        <img src="images/shape-07.svg" alt="Shape" className="h ia o ae jf" />
        <img src="images/shape-14.svg" alt="Shape" className="h ja ka" />
        <img src="images/shape-15.svg" alt="Shape" className="h q p" />

        <div className="bb ze i va ki xn br">
          <div className="tc uf sn tn xf un gg">
            <div className="animate_top me/5 ln rj">
              <h2 className="gk vj zp or kk wm hc">785</h2>
              <p className="ek bk aq">Global Brands</p>
            </div>
            <div className="animate_top me/5 ln rj">
              <h2 className="gk vj zp or kk wm hc">533</h2>
              <p className="ek bk aq">Happy Clients</p>
            </div>
            <div className="animate_top me/5 ln rj">
              <h2 className="gk vj zp or kk wm hc">865</h2>
              <p className="ek bk aq">Winning Award</p>
            </div>
            <div className="animate_top me/5 ln rj">
              <h2 className="gk vj zp or kk wm hc">346</h2>
              <p className="ek bk aq">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>
      {/* // <!-- ===== Counter End ===== --> */}

      {/* // <!-- ===== Clients Start ===== --> */}
      <section className="pj vp mr">
        {/* <!-- Section Title Start --> */}
        <div x-data="{ sectionTitle: `Trusted by Global Brands`, sectionTitleText: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.`}">
          <div className="animate_top bb ze rj ki xn vq">
            <h2
              x-text="sectionTitle"
              className="fk vj pr kk wm on/5 gq/2 bb _b"
            ></h2>
            <p className="bb on/5 wo/5 hq" x-text="sectionTitleText"></p>
          </div>
        </div>
        {/* <!-- Section Title End --> */}

        <div className="bb ze ah ch pm hj xp ki xn 2xl:ud-px-49 bc">
          <div className="wc rf qn zf cp kq xf wf">
            <a href="#" className="rc animate_top">
              <img
                className="th wl ml il zl om"
                src="images/brand-light-01.svg"
                alt="Clients"
              />
              <img
                className="xc sk ml il zl nm"
                src="images/brand-dark-01.svg"
                alt="Clients"
              />
            </a>
            <a href="#" className="rc animate_top">
              <img
                className="tk ml il zl om"
                src="images/brand-light-02.svg"
                alt="Clients"
              />
              <img
                className="xc sk ml il zl nm"
                src="images/brand-dark-02.svg"
                alt="Clients"
              />
            </a>
            <a href="#" className="rc animate_top">
              <img
                className="tk ml il zl om"
                src="images/brand-light-03.svg"
                alt="Clients"
              />
              <img
                className="xc sk ml il zl nm"
                src="images/brand-dark-03.svg"
                alt="Clients"
              />
            </a>
            <a href="#" className="rc animate_top">
              <img
                className="tk ml il zl om"
                src="images/brand-light-04.svg"
                alt="Clients"
              />
              <img
                className="xc sk ml il zl nm"
                src="images/brand-dark-04.svg"
                alt="Clients"
              />
            </a>
            <a href="#" className="rc animate_top">
              <img
                className="tk ml il zl om"
                src="images/brand-light-05.svg"
                alt="Clients"
              />
              <img
                className="xc sk ml il zl nm"
                src="images/brand-dark-05.svg"
                alt="Clients"
              />
            </a>
            <a href="#" className="rc animate_top">
              <img
                className="tk ml il zl om"
                src="images/brand-light-06.svg"
                alt="Clients"
              />
              <img
                className="xc sk ml il zl nm"
                src="images/brand-dark-06.svg"
                alt="Clients"
              />
            </a>
          </div>
        </div>
      </section>
      {/* // <!-- ===== Clients End ===== --> */}

      {/* // <!-- ===== Blog Start ===== --> */}
      <section className="ji gp uq">
        {/* <!-- Section Title Start --> */}
        <div x-data="{ sectionTitle: `Latest Blogs & News`, sectionTitleText: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.`}">
          <div className="animate_top bb ze rj ki xn vq">
            <h2
              x-text="sectionTitle"
              className="fk vj pr kk wm on/5 gq/2 bb _b"
            ></h2>
            <p className="bb on/5 wo/5 hq" x-text="sectionTitleText"></p>
          </div>
        </div>
        {/* <!-- Section Title End --> */}

        <div className="bb ye ki xn vq jb jo">
          <div className="wc qf pn xo zf iq">
            {/* <!-- Blog Item --> */}
            <div className="animate_top sg vk rm xm">
              <div className="c rc i z-1 pg">
                <img className="w-full" src="images/blog-01.png" alt="Blog" />

                <div className="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                  <a
                    href="./blog-single.html"
                    className="vc ek rg lk gh sl ml il gi hi"
                  >
                    Read More
                  </a>
                </div>
              </div>

              <div className="yh">
                <div className="tc uf wf ag jq">
                  <div className="tc wf ag">
                    <img src="images/icon-man.svg" alt="User" />
                    <p>Musharof Chy</p>
                  </div>
                  <div className="tc wf ag">
                    <img src="images/icon-calender.svg" alt="Calender" />
                    <p>25 Dec, 2025</p>
                  </div>
                </div>
                <h4 className="ek tj ml il kk wm xl eq lb">
                  <a href="blog-single.html">
                    Free advertising for your online business
                  </a>
                </h4>
              </div>
            </div>

            {/* <!-- Blog Item --> */}
            <div className="animate_top sg vk rm xm">
              <div className="c rc i z-1 pg">
                <img className="w-full" src="images/blog-02.png" alt="Blog" />

                <div className="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                  <a
                    href="./blog-single.html"
                    className="vc ek rg lk gh sl ml il gi hi"
                  >
                    Read More
                  </a>
                </div>
              </div>

              <div className="yh">
                <div className="tc uf wf ag jq">
                  <div className="tc wf ag">
                    <img src="images/icon-man.svg" alt="User" />
                    <p>Musharof Chy</p>
                  </div>
                  <div className="tc wf ag">
                    <img src="images/icon-calender.svg" alt="Calender" />
                    <p>25 Dec, 2025</p>
                  </div>
                </div>
                <h4 className="ek tj ml il kk wm xl eq lb">
                  <a href="blog-single.html">
                    9 simple ways to improve your design skills
                  </a>
                </h4>
              </div>
            </div>

            {/* <!-- Blog Item --> */}
            <div className="animate_top sg vk rm xm">
              <div className="c rc i z-1 pg">
                <img className="w-full" src="images/blog-03.png" alt="Blog" />

                <div className="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                  <a
                    href="./blog-single.html"
                    className="vc ek rg lk gh sl ml il gi hi"
                  >
                    Read More
                  </a>
                </div>
              </div>

              <div className="yh">
                <div className="tc uf wf ag jq">
                  <div className="tc wf ag">
                    <img src="images/icon-man.svg" alt="User" />
                    <p>Musharof Chy</p>
                  </div>
                  <div className="tc wf ag">
                    <img src="images/icon-calender.svg" alt="Calender" />
                    <p>25 Dec, 2025</p>
                  </div>
                </div>
                <h4 className="ek tj ml il kk wm xl eq lb">
                  <a href="blog-single.html">
                    Tips to quickly improve your coding speed.
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog End ===== --> */}

      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="i pg fh rm ji gp uq">
        {/* <!-- Bg Shapes --> */}
        <img src={shape6} alt="Shape" className="h aa y" />
        <img src="images/shape-03.svg" alt="Shape" className="h ca u" />
        <img src="images/shape-07.svg" alt="Shape" className="h w da ee" />
        <img src="images/shape-12.svg" alt="Shape" className="h p s" />
        <img src="images/shape-13.svg" alt="Shape" className="h r q" />

        {/* <!-- Section Title Start --> */}
        <div x-data="{ sectionTitle: `Let’s Stay Connected`, sectionTitleText: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.`}">
          <div className="animate_top bb ze rj ki xn vq">
            <h2
              x-text="sectionTitle"
              className="fk vj pr kk wm on/5 gq/2 bb _b"
            ></h2>
            <p className="bb on/5 wo/5 hq" x-text="sectionTitleText"></p>
          </div>
        </div>
        {/* <!-- Section Title End --> */}

        <div className="i va bb ye ki xn wq jb mo">
          <div className="tc uf sn tf rn un zf xl:gap-10">
            <div className="animate_top w-full mn/5 to/3 vk sg hh sm yh rq i pg">
              {/* <!-- Bg Shapes --> */}
              <img
                src="images/shape-03.svg"
                alt="Shape"
                className="h la x wd"
              />
              <img src={shape6} alt="Shape" className="h la ma ne kf" />

              <div className="fb">
                <h4 className="wj kk wm cc">Email Address</h4>
                <p>
                  <a href="#">support@startup.com</a>
                </p>
              </div>
              <div className="fb">
                <h4 className="wj kk wm cc">Office Location</h4>
                <p>76/A, Green valle, Califonia USA.</p>
              </div>
              <div className="fb">
                <h4 className="wj kk wm cc">Phone Number</h4>
                <p>
                  <a href="#">+009 8754 3433 223</a>
                </p>
              </div>
              <div className="fb">
                <h4 className="wj kk wm cc">Skype Email</h4>
                <p>
                  <a href="#">example@yourmail.com</a>
                </p>
              </div>

              <span className="rc nd rh tm lc fb"></span>

              <div>
                <h4 className="wj kk wm qb">Social Media</h4>
                <ul className="tc wf fg">
                  <li>
                    <a href="#" className="c tc wf xf ie ld rg ml il tl">
                      <svg
                        className="th lm ml il"
                        width="11"
                        height="20"
                        viewBox="0 0 11 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.83366 11.3752H9.12533L10.042 7.7085H6.83366V5.87516C6.83366 4.931 6.83366 4.04183 8.667 4.04183H10.042V0.96183C9.74316 0.922413 8.61475 0.833496 7.42308 0.833496C4.93433 0.833496 3.16699 2.35241 3.16699 5.14183V7.7085H0.416992V11.3752H3.16699V19.1668H6.83366V11.3752Z"
                          fill=""
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="c tc wf xf ie ld rg ml il tl">
                      <svg
                        className="th lm ml il"
                        width="20"
                        height="16"
                        viewBox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.3153 2.18484C18.6155 2.4944 17.8733 2.6977 17.1134 2.78801C17.9144 2.30899 18.5138 1.55511 18.8001 0.666844C18.0484 1.11418 17.2244 1.42768 16.3654 1.59726C15.7885 0.979958 15.0238 0.57056 14.1901 0.432713C13.3565 0.294866 12.5007 0.436294 11.7558 0.835009C11.0108 1.23372 10.4185 1.86739 10.0708 2.63749C9.72313 3.40759 9.63963 4.27098 9.83327 5.09343C8.30896 5.01703 6.81775 4.62091 5.45645 3.93079C4.09516 3.24067 2.89423 2.27197 1.93161 1.08759C1.59088 1.67284 1.41182 2.33814 1.41278 3.01534C1.41278 4.34451 2.08928 5.51876 3.11778 6.20626C2.50912 6.1871 1.91386 6.02273 1.38161 5.72685V5.77451C1.38179 6.65974 1.68811 7.51766 2.24864 8.20282C2.80916 8.88797 3.58938 9.3582 4.45703 9.53376C3.89201 9.68688 3.29956 9.70945 2.72453 9.59976C2.96915 10.3617 3.44595 11.0281 4.08815 11.5056C4.73035 11.9831 5.50581 12.2478 6.30594 12.2627C5.51072 12.8872 4.60019 13.3489 3.62642 13.6213C2.65264 13.8938 1.63473 13.9716 0.630859 13.8503C2.38325 14.9773 4.4232 15.5756 6.50669 15.5737C13.5586 15.5737 17.415 9.73176 17.415 4.66535C17.415 4.50035 17.4104 4.33351 17.4031 4.17035C18.1537 3.62783 18.8016 2.95578 19.3162 2.18576L19.3153 2.18484Z"
                          fill=""
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="c tc wf xf ie ld rg ml il tl">
                      <svg
                        className="th lm ml il"
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.36198 2.58327C4.36174 3.0695 4.16835 3.53572 3.82436 3.87937C3.48037 4.22301 3.01396 4.41593 2.52773 4.41569C2.0415 4.41545 1.57528 4.22206 1.23164 3.87807C0.887991 3.53408 0.69507 3.06767 0.695313 2.58144C0.695556 2.09521 0.888943 1.62899 1.23293 1.28535C1.57692 0.941701 2.04333 0.748781 2.52956 0.749024C3.01579 0.749267 3.48201 0.942654 3.82566 1.28664C4.1693 1.63063 4.36222 2.09704 4.36198 2.58327ZM4.41698 5.77327H0.750313V17.2499H4.41698V5.77327ZM10.2103 5.77327H6.56198V17.2499H10.1736V11.2274C10.1736 7.87244 14.5461 7.56077 14.5461 11.2274V17.2499H18.167V9.98077C18.167 4.32494 11.6953 4.53577 10.1736 7.31327L10.2103 5.77327Z"
                          fill=""
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="c tc wf xf ie ld rg ml il tl">
                      <svg
                        className="th lm ml il"
                        width="22"
                        height="14"
                        viewBox="0 0 22 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.82308 0.904297C7.40883 0.904297 7.95058 0.95013 8.44558 1.0858C8.89476 1.16834 9.32351 1.33772 9.70783 1.58446C10.069 1.81088 10.3394 2.12896 10.5191 2.53688C10.6997 2.9448 10.7895 3.44438 10.7895 3.98796C10.7895 4.62321 10.6547 5.1668 10.3394 5.57471C10.069 5.98355 9.61799 6.34563 9.07716 6.61788C9.84349 6.84521 10.4292 7.25313 10.7895 7.79672C11.1507 8.34122 11.3762 9.02138 11.3762 9.7923C11.3762 10.4275 11.2405 10.9711 11.015 11.4249C10.7895 11.8786 10.4292 12.2865 10.0232 12.5588C9.58205 12.8506 9.09443 13.0651 8.58124 13.1931C8.04041 13.3297 7.49958 13.4205 6.95874 13.4205H0.916992V0.904297H6.82308ZM6.46191 5.98263C6.95783 5.98263 7.36391 5.84696 7.67924 5.62055C7.99458 5.39413 8.13024 4.9853 8.13024 4.48663C8.13024 4.21438 8.08441 3.94213 7.99458 3.76155C7.90474 3.58005 7.76908 3.44346 7.58941 3.3078C7.40883 3.21705 7.22824 3.1263 7.00274 3.08138C6.77724 3.03555 6.55266 3.03555 6.28133 3.03555H3.66699V5.98355H6.46283L6.46191 5.98263ZM6.59758 11.3341C6.86799 11.3341 7.13841 11.2883 7.36391 11.2434C7.59159 11.2001 7.80692 11.1071 7.99458 10.9711C8.17826 10.8384 8.33193 10.6685 8.44558 10.4725C8.53541 10.246 8.62616 9.9738 8.62616 9.65663C8.62616 9.02138 8.44558 8.56763 8.08533 8.25046C7.72416 7.97822 7.22824 7.84255 6.64249 7.84255H3.66699V11.335H6.59758V11.3341ZM15.2986 11.2883C15.6588 11.6513 16.1997 11.8328 16.9211 11.8328C17.417 11.8328 17.868 11.6971 18.2282 11.4707C18.5894 11.1985 18.8149 10.9262 18.9047 10.654H21.1139C20.7527 11.742 20.2119 12.513 19.4914 13.0116C18.7691 13.4654 17.9129 13.7376 16.8762 13.7376C16.2128 13.7396 15.5551 13.6165 14.9374 13.3746C14.3816 13.1661 13.886 12.8235 13.4946 12.3773C13.0759 11.9598 12.7665 11.4457 12.5935 10.8804C12.368 10.291 12.2772 9.65663 12.2772 8.93063C12.2772 8.25047 12.368 7.61613 12.5935 7.0258C12.8103 6.45755 13.1311 5.93468 13.5395 5.48396C13.9456 5.07605 14.4415 4.71396 14.9823 4.48663C15.5843 4.24469 16.2274 4.12143 16.8762 4.12363C17.6425 4.12363 18.319 4.26021 18.9047 4.57738C19.4914 4.89455 19.9415 5.25755 20.3027 5.80205C20.6711 6.32503 20.9456 6.90819 21.1139 7.52538C21.2037 8.15972 21.2487 8.79497 21.2037 9.52005H14.667C14.667 10.246 14.9374 10.9262 15.2986 11.2892V11.2883ZM18.1384 6.52713C17.8231 6.20996 17.3272 6.02846 16.7405 6.02846C16.3353 6.02846 16.0191 6.11922 15.7487 6.25488C15.4782 6.39147 15.2986 6.57297 15.118 6.75447C14.952 6.92978 14.8422 7.15067 14.8027 7.3888C14.7568 7.61613 14.7119 7.79672 14.7119 7.97822H18.7691C18.6792 7.29805 18.4537 6.84522 18.1384 6.52713ZM14.1711 1.76596H19.2201V2.99063H14.172V1.76596H14.1711Z"
                          fill=""
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="animate_top w-full nn/5 vo/3 vk sg hh sm yh tq">
              <form
                action="https://formbold.com/s/unique_form_id"
                method="POST"
              >
                <div className="tc sf yo ap zf ep qb">
                  <div className="vd to/2">
                    <label className="rc ac" for="fullname">
                      Full name
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      id="fullname"
                      placeholder="Devid Wonder"
                      className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi"
                    />
                  </div>

                  <div className="vd to/2">
                    <label className="rc ac" for="email">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@gmail.com"
                      className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi"
                    />
                  </div>
                </div>

                <div className="tc sf yo ap zf ep qb">
                  <div className="vd to/2">
                    <label className="rc ac" for="phone">
                      Phone number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="+009 3342 3432"
                      className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi"
                    />
                  </div>

                  <div className="vd to/2">
                    <label className="rc ac" for="subject">
                      Subject
                    </label>
                    <input
                      type="text"
                      for="subject"
                      id="subject"
                      placeholder="Type your subject"
                      className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi"
                    />
                  </div>
                </div>

                <div className="fb">
                  <label className="rc ac" for="message">
                    Message
                  </label>
                  <textarea
                    placeholder="Message"
                    rows="4"
                    name="message"
                    id="message"
                    className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 ci"
                  ></textarea>
                </div>

                <div className="tc xf">
                  <button className="vc rg lk gh ml il hi gi _l">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}

      {/* <!-- ===== CTA Start ===== --> */}
      <section className="i pg gh ji">
        {/* <!-- Bg Shape --> */}
        <img className="h p q" src="images/shape-16.svg" alt="Bg Shape" />

        <div className="bb ye i z-10 ki xn dr">
          <div className="tc uf sn tn un gg">
            <div className="animate_left to/2">
              <h2 className="fk vj zp pr lk ac">
                Join with 5000+ Startups Growing with Base.
              </h2>
              <p className="lk">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quis nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut
                venenatis rhoncus.
              </p>
            </div>
            <div className="animate_right bf">
              <a href="#" className="vc ek kk hh rg ol il cm gi hi">
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
