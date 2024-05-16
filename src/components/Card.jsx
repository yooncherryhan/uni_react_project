const Card = ({ icon, title, text }) => {
  return (
    <div className="relative max-w-[350px] h-[259px] lg:h-[320px] flex flex-col -start justify-between bg-n-1 rounded-[10px] px-7 lg:px-8 pb-[1.9rem] pt-14 lg:pt-16 shadow-card">
      <img className="absolute -top-6" src={icon} alt={`icon ${title}`} />

      <h3 className="font-jakarta font-extrabold text-xl text-n-4 lg:headingS">
        {title}
      </h3>

      <p className="font-jakarta font-normal text-base text-n-2 leading-[1.625rem]  lg:bodyM">
        {text}
      </p>

      <a
        className="font-jakarta font-bold text-lg text-color-1 transition-colors duration-300 hover:text-color-2"
        href="#"
      >
        Get Started
      </a>
    </div>
  );
};

export default Card;
