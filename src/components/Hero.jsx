const Hero = () => {
  return (
    <section className="container pt-9 md:pt-24 lg:pt-44 flex flex-col md:flex-row gap-2">
      <div className="flex-1">
        <h1 className="headingL lg:headingXL text-n-4 mb-7">
          Maximize skill, <br className="hidden md:block" /> minimize budget
        </h1>

        <p className="bodyS lg:bodyM text-n-2 mb-6 lg:mb-10 md:max-w-[398px] lg:max-w-[445px]">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>

        <button className="btn-two">Get Started</button>
      </div>

      <div className="relative h-[380px] md:h-[460px] lg:h-[480px] md:flex-[.5]">
        <div className="img-hero"></div>
      </div>
    </section>
  );
};

export default Hero;
