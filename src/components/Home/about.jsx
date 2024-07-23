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
                Our team works hard to create a friendly and helpful environment
                where students can succeed. We offer personalized guidance and
                full support, ensuring each student feels valued and capable of
                achieving their goals. Our dedication to quality means we always
                provide top education and resources, making us a trusted choice
                for students.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
