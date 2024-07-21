import about1 from "../../assets/images/about-01.png";
import about2 from "../../assets/images/about-02.png";
import about3 from "../../assets/images/about-03.png";
import shape5 from "../../assets/images/shape-05.svg";
import shape6 from "../../assets/images/shape-06.svg";
import shape7 from "../../assets/images/shape-07.svg";
import iconplay from "../../assets/images/icon-play.svg";
export function About() {
  return (
    <div>
      <section className="ji gp uq 2xl:ud-py-35 pg">
        <div className="bb ze ki xn wq">
          <div className="tc wf gg qq">
            {/* <!-- About Images --> */}
            <div className="animate_left xc gn gg jn/2 i">
              <div>
                <img src={shape5} alt="Shape" className="h -ud-left-5 x" />
                <img src={about1} alt="About" className="ib" />
                <img src={about2} alt="About" />
              </div>
              <div>
                <img src={shape6} alt="Shape" />
                <img src={about3} alt="About" className="ob gb" />
                <img src={shape7} alt="Shape" className="bb" />
              </div>
            </div>

            {/* <!-- About Content --> */}
            <div className="animate_right jn/2">
              <h4 className="ek yj mk gb">Why Choose Us</h4>
              <h2 className="fk vj zp pr kk wm qb">
                We Make Our students happy by giving Best services.
              </h2>
              <p className="uo">
                An online learning platform allows students to access and absorb educational content in a strictly digital fashion, in either groups or individual settings. Online learning can take place live at set times, or it can entail pre-recorded lessons for students to complete on their own time
              </p>

              <a
                href="https://www.youtube.com/watch?v=xcJtL7QggTI"
                data-fslightbox
                className="vc wf hg mb"
              >
                <span className="tc wf xf be dd rg i gh ua">
                  <span className="nf h vc yc vd rg gh qk -ud-z-1"></span>
                  <img src={iconplay} alt="Play" />
                </span>
                <span className="kk">SEE HOW WE WORK</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
