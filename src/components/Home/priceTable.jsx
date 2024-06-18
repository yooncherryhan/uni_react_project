import { useState } from "react";
import shape3 from "../../assets/images/shape-03.svg";
import shape7 from "../../assets/images/shape-07.svg";
import shape12 from "../../assets/images/shape-12.svg";
import shape13 from "../../assets/images/shape-13.svg";
import { Badge, Button, Input, Switch } from "@nextui-org/react";
export function Price() {
  const [showPlan, setShowPlan] = useState(false);
  return (
    <div className="bg-slate-100 h-auto py-10">
      <section>
        {/* <!-- Bg Shapes --> */}
        {/* <img src={shape6} alt="Shape" className="h aa y" /> */}
        {/* <img src={shape3} alt="Shape" className="" />
        <img src={shape7} alt="Shape" className="w-20" />
        <img src={shape12} alt="Shape" className="w-20" />
        <img src={shape13} alt="Shape" className="" /> */}

        {/* <!-- Section Title Start --> */}
        <div className="flex flex-col justify-center gap-3">
          <span className="text-center xl:text-[45px] 2xl:text-[50px] font-bold text-slate-800">
            We Offer Great Affordable Premium Prices.
          </span>
          <p className="bb on/5 wo/5 hq text-center" x-text="sectionTitleText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.
          </p>
        </div>
        {/* <!-- Section Title End --> */}

        {/* <!-- Pricing switcher --> */}
        <div className="tc wf xf jb og">
          <span className="ek kk wm">Bill Monthly</span>
          <Switch
            defaultSelected
            aria-label="Automatic updates"
            onClick={() => setShowPlan(!showPlan)}
          />
          <span className="ek kk wm">Bill Annually</span>
        </div>

        {/* <!-- Pricing Table --> */}
        <div className="bb ze i va ki xn yq bc">
          <div className="wc qf pn xo jg">
            <div className="">
              {/* <!-- Pricing Item --> */}
              <div className="animate_top rj sg hh sm vk xm hi nj oj flex flex-col gap-3 font-serif">
                <span className="text-[20px] xl:text-[25px] font-bold text-[#000] ">
                  Starter
                </span>

                <div className="">
                  <span className="text-[25px] xl:text-[30px] font-bold text-[#000]">
                    {showPlan ? "29 $" : "149 $"}{" "}
                  </span>
                  <span className="sc ak kk wm">
                    {showPlan ? "/per month" : "/per year"}
                  </span>
                </div>

                <p className="ur dc text-[20px] ">No credit card required</p>

                {/* <!-- Button --> */}

                <Badge className="bg-red-600">Try for free</Badge>

                {/* <!-- Features --> */}
                <ul className="tc sf bg ob fb">
                  <template x-for="(feature, i) in plan.features" x-key="i">
                    <li x-text="feature"></li>
                  </template>
                </ul>

                <p className="kk wm">7-day free trial</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
