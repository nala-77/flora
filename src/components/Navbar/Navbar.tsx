import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

interface navLinks {
  to: string;
  link: string;
}
interface navProps {
  image: string;
  links: navLinks[];
  btn: string;
}
const Navbar = ({ image, links, btn }: navProps) => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [active, setActive] = useState(false);
  function handleClick() {
    setActive(!active);
  }
  return (
    <nav
      className={`flex justify-between items-center px-70 h-22 fixed w-full z-50
      ${scrolling || active ? " bg-white" : "bg-transparent"}

      ${scrolling ? "shadow-lg" : ""}
   `}
    >
      <div className="w-17">
        <img className="w-full max-500:w-11" src={image} alt="logo" />
      </div>
      <ul className="flex justify-between max-950:hidden">
        {links.map((element, index) => {
          return (
            <li className="px-15 cursor-pointer" key={index}>
              <a
                className="font-medium hover:text-main-color transition-all duration-200"
                href={`#${element.to}`}
              >
                {element.link}
              </a>
            </li>
          );
        })}
      </ul>

      <button className="text-white bg-main-color w-34 text-sm rounded-md h-38 max-950:hidden">
        {btn}
      </button>
      {active ? (
        <FontAwesomeIcon
          onClick={handleClick}
          className="text-main-color hidden max-950:block max-500:text-2xl text-4xl cursor-pointer"
          icon={faXmark}
        />
      ) : (
        <FontAwesomeIcon
          onClick={handleClick}
          className="text-main-color hidden max-950:block max-500:text-2xl text-3xl cursor-pointer"
          icon={faBars}
        />
      )}

      <div
        className={
          active
            ? "flex flex-col absolute bg-white top-full right-0 w-full transition-all duration-200 z-50"
            : "w-full top-full transition-all duration-200 absolute -right-full z-50"
        }
      >
        <ul className="flex justify-between flex-col ">
          {links.map((element, index) => {
            return (
              <li
                className="px-15 mb-8 py-6 border-y border-solid border-black hover:border-0 hover:bg-main-bg transition-all cursor-pointer"
                key={index}
              >
                <a className="text-2xl font-normal" href={`#${element.to}`}>
                  {element.link}
                </a>
              </li>
            );
          })}
        </ul>

        <button className="text-white bg-main-color w-34 text-sm rounded-md h-38 mx-auto">
          {btn}
        </button>
      </div>
    </nav>
  );
};
// max-950:hidden
export default Navbar;
