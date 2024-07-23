import icon4 from "../../assets/images/icon-04.svg";
import icon5 from "../../assets/images/icon-05.svg";
import icon6 from "../../assets/images/icon-06.svg";
import icon7 from "../../assets/images/icon-07.svg";
export function Service() {
  return (
    <div>
      <section className="lj tp kr">
        {/* <!-- Section Title Start --> */}
        <div x-data="{ sectionTitle: `We Offer The Best Quality Service for You`, sectionTitleText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`}">
          <div className="animate_top bb ze rj ki xn vq">
            <h2
              x-text="sectionTitle"
              className="fk vj pr kk wm on/5 gq/2 bb _b"
            ></h2>
            <p className="bb on/5 wo/5 hq" x-text="sectionTitleText"></p>
          </div>
        </div>
        {/* <!-- Section Title End --> */}

        <div className="bb ze ki xn yq mb en">
          <div className="wc qf pn xo ng">
            {/* <!-- Service Item --> */}
            <div className="animate_top sg oi pi zq ml il am cn _m">
              <img src={icon4} alt="Icon" />
              <h4 className="ek zj kk wm nb _b">Flexible Learning</h4>
              <p>
                Learn at your own convenience with our flexible online platform.
                Whether you’re at home or on the go, our resources are available
                to fit your schedule.
              </p>
            </div>

            {/* <!-- Service Item --> */}
            <div className="animate_top sg oi pi zq ml il am cn _m">
              <img src={icon5} alt="Icon" />
              <h4 className="ek zj kk wm nb _b">Experienced Instructors</h4>
              <p>
                Benefit from the knowledge and expertise of our experienced
                instructors who are passionate about teaching and committed to
                your success.
              </p>
            </div>

            {/* <!-- Service Item --> */}
            <div className="animate_top sg oi pi zq ml il am cn _m">
              <img src={icon6} alt="Icon" />
              <h4 className="ek zj kk wm nb _b">Continuous Updates</h4>
              <p>
                We regularly refresh our content and introduce new features to
                ensure you have access to the latest language learning trends
                and methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
