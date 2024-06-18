import { logoLight } from "../assets";

const Footer = () => {
  return (
    <footer className="bg-n-4 relative">
      <div className="container flex items-center justify-between py-10 lg:py-8">
        <a className="w-[89px] lg:w-[114px]" href="#">
          {/* <img src={logoLight} alt="skilled" /> */}
        </a>


      </div>

      <div className="font-jakarta absolute bottom-2 left-1/2 -translate-x-1/2 font-inter text-dark-purple text-center text-xs text-n-1">
        Challenge by{" "}
        <a
          className="text-color-1"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className="text-color-1"
          href="https://github.com/IsaiasVillegas"
          target="_blank"
        >
          Isaias Villegas
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
