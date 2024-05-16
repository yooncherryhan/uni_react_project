import { logoDark } from "../assets";

const Header = () => {
  return (
    <header className="container pt-4 md:pt-6">
      <nav className="flex items-center justify-between">
        <a className="" href="#">
          <img
            className="w-[89px] lg:w-[111px]"
            src={logoDark}
            alt="skilled logo"
          />
        </a>

        <button className="btn-one">Get Started</button>
      </nav>
    </header>
  );
};

export default Header;
