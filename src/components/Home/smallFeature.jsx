import icon1 from "../../assets/images/icon-01.svg";
import icon2 from "../../assets/images/icon-02.svg";
import icon3 from "../../assets/images/icon-03.svg";
export function Small() {
  return (
    <div>
      <section id="features">
        <div className="bb ze ki yn 2xl:ud-px-12.5">
          <div className="tc uf zo xf ap zf bp mq">
            {/* <!-- Small Features Item --> */}
            <div className="animate_top kn to/3 tc cg oq">
              <div className="tc wf xf cf ae cd rg mh">
                <img src={icon1} alt="Icon" />
              </div>
              <div>
                <h4 className="ek yj go kk wm xb">24/7 Support</h4>
                <p>Lorem ipsum dolor sit amet conse adipiscing elit.</p>
              </div>
            </div>

            {/* <!-- Small Features Item --> */}
            <div className="animate_top kn to/3 tc cg oq">
              <div className="tc wf xf cf ae cd rg nh">
                <img src={icon2} alt="Icon" />
              </div>
              <div>
                <h4 className="ek yj go kk wm xb">Take Ownership</h4>
                <p>Lorem ipsum dolor sit amet conse adipiscing elit.</p>
              </div>
            </div>

            {/* <!-- Small Features Item --> */}
            <div className="animate_top kn to/3 tc cg oq">
              <div className="tc wf xf cf ae cd rg oh">
                <img src={icon3} alt="Icon" />
              </div>
              <div>
                <h4 className="ek yj go kk wm xb">Team Work</h4>
                <p>Lorem ipsum dolor sit amet conse adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
