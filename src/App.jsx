import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Header from "./components/Header";
import shape1 from "./assets/images/shape-01.svg";
import shape2 from "./assets/images/shape-02.svg";
import shape3 from "./assets/images/shape-03.svg";
import shape4 from "./assets/images/shape-04.svg";
import Hero from "./assets/images/hero.png";

const App = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <main>
      {/* <!-- ===== Hero Start ===== --> */}
      <section class="gj do ir hj sp jr i pg">
        {/* <!-- Hero Images --> */}
        <div class="xc fn zd/2 2xl:ud-w-187.5 bd 2xl:ud-h-171.5 h q r">
          <img src={shape1} alt="shape" class="xc 2xl:ud-block h t -ud-left-[10%] ua" />
          <img src={shape2} alt="shape" class="xc 2xl:ud-block h u p va" />
          <img src={shape3} alt="shape" class="xc 2xl:ud-block h v w va" />
          <img src={shape4} alt="shape" class="h q r" />
          <img src={Hero} alt="Woman" class="h q r ua" />
        </div>

        {/* <!-- Hero Content --> */}
        <div class="bb ze ki xn 2xl:ud-px-0">
          <div class="tc _o">
            <div class="animate_left jn/2">
              <h1 class="fk vj zp or kk wm wb">We specialize in UI/UX, Web Development, Digital Marketing.</h1>
              <p class="fq">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla magna mauris. Nulla fermentum viverra sem eu rhoncus consequat varius nisi quis, posuere magna.
              </p>

              <div class="tc tf yo zf mb">
                <a href="#" class="ek jk lk gh gi hi rg ml il vc _d _l"
                  >Get Started Now</a
                >

                <span class="tc sf">
                  <a href="#" class="inline-block ek xj kk wm"> Call us (0123) 456 – 789 </a>
                  <span class="inline-block">For any question or concern</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Hero End ===== --> */}

      {/* <!-- ===== Small Features Start ===== --> */}
      <section id="features">
        <div class="bb ze ki yn 2xl:ud-px-12.5">
          <div class="tc uf zo xf ap zf bp mq">
            {/* <!-- Small Features Item --> */}
            <div class="animate_top kn to/3 tc cg oq">
              <div class="tc wf xf cf ae cd rg mh">
                <img src="images/icon-01.svg" alt="Icon" />
              </div>
              <div>
                <h4 class="ek yj go kk wm xb">24/7 Support</h4>
                <p>Lorem ipsum dolor sit amet conse adipiscing elit.</p>
              </div>
            </div>

            {/* <!-- Small Features Item --> */}
            <div class="animate_top kn to/3 tc cg oq">
              <div class="tc wf xf cf ae cd rg nh">
                <img src="images/icon-02.svg" alt="Icon" />
              </div>
              <div>
                <h4 class="ek yj go kk wm xb">Take Ownership</h4>
                <p>Lorem ipsum dolor sit amet conse adipiscing elit.</p>
              </div>
            </div>

            {/* <!-- Small Features Item --> */}
            <div class="animate_top kn to/3 tc cg oq">
              <div class="tc wf xf cf ae cd rg oh">
                <img src="images/icon-03.svg" alt="Icon" />
              </div>
              <div>
                <h4 class="ek yj go kk wm xb">Team Work</h4>
                <p>Lorem ipsum dolor sit amet conse adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Small Features End ===== --> */}

      {/* <!-- ===== About Start ===== --> */}
      <section class="ji gp uq 2xl:ud-py-35 pg">
        <div class="bb ze ki xn wq">
          <div class="tc wf gg qq">
            {/* <!-- About Images --> */}
            <div class="animate_left xc gn gg jn/2 i">
              <div>
                <img src="images/shape-05.svg" alt="Shape" class="h -ud-left-5 x" />
                <img src="images/about-01.png" alt="About" class="ib" />
                <img src="images/about-02.png" alt="About" />
              </div>
              <div>
                <img src="images/shape-06.svg" alt="Shape" />
                <img src="images/about-03.png" alt="About" class="ob gb" />
                <img src="images/shape-07.svg" alt="Shape" class="bb" />
              </div>
            </div>

            {/* <!-- About Content --> */}
            <div class="animate_right jn/2">
              <h4 class="ek yj mk gb">Why Choose Us</h4>
              <h2 class="fk vj zp pr kk wm qb">We Make Our customers happy by giving Best services.</h2>
              <p class="uo">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>

              <a href="https://www.youtube.com/watch?v=xcJtL7QggTI" data-fslightbox class="vc wf hg mb">
                <span class="tc wf xf be dd rg i gh ua">
                  <span class="nf h vc yc vd rg gh qk -ud-z-1"></span>
                  <img src="images/icon-play.svg" alt="Play" />
                </span>
                <span class="kk">SEE HOW WE WORK</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}


    </main>

        <Footer />
      </div>
    </>
  );
};

export default App;
