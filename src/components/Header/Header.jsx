import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ButtonOutline } from "../UI/Buttons";

const Header = () => {
  const navLinks = [
    { id: 1, navLink: "Home", path: "/", style: "" },
    { id: 2, navLink: "About", path: "/about", style: "" },
    { id: 3, navLink: "Menu", path: "/menu", style: "" },
    { id: 4, navLink: "Contact", path: "/contact", style: "md:hidden" },
  ];

  const [nav, setNav] = useState(false);
  const [navColor, setNavColor] = useState("transparent");
  const [navShadow, setNavShadow] = useState("");
  // const [navFix, setNavFix] = useState("inherit");

  const listenScrollEvent = () => {
    if (window.scrollY > 10) {
      setNavColor("#A27B5C");
      setNavShadow("shadow-md shadow-black");
      // setNavFix("fixed");
    } else {
      setNavColor(navColor);
      setNavShadow(navShadow);
      // setNavFix(navFix);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div
      className={`flex justify-between items-center w-full h-20 px-4 z-30 header ${navShadow}`}
      style={{
        backgroundColor: navColor,
        transition: "all .3s",
        position: "fixed",
        color: "white",
      }}
    >
      {/* Medium to Larger Device */}

      <div className="flex justify-between items-center w-full mx-auto container">
        {/* Logo/Name */}
        <div className="logo h-[100%] cursor-pointer max-w-[7rem] text-center">
          <Link to={"/"}>Siroter-Le-Delicieux-Cafe</Link>
        </div>

        {/* Links */}
        <ul className="nav-links hidden md:flex">
          {navLinks.map(({ id, navLink, path, style }) => (
            <NavLink
              key={id}
              className={`px-4 text-sm cursor-pointer font-f-secondary ${style}`}
              style={({ isActive }) =>
                isActive ? { fontWeight: "bolder" } : undefined
              }
              to={path}
            >
              {navLink}
            </NavLink>
          ))}
        </ul>

        {/* Contact Button */}
        <Link to={"/contact"}>
          <div className="hidden md:block">
            <ButtonOutline btnText={"Contact Us"} />
          </div>
        </Link>
      </div>

      {/* Mobile menu -- Smaller Device */}
      <div
        className="mobile-menu cursor-pointer z-20 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? (
          <CloseIcon
            size={25}
            style={{
              color: nav ? "white" : "black",
            }}
          />
        ) : (
          <MenuIcon size={25} />
        )}
      </div>

      {/* Mobile menu link */}
      {nav && (
        <ul className="w-full h-screen absolute top-0 left-0 bg-c-primary flex justify-center items-center flex-col menu-link z-10 text-white">
          {navLinks.map(({ id, navLink, path, style }) => (
            <Link
              key={id}
              className={`py-6 capitalize cursor-pointer text-3xl ${style}`}
              to={path}
              onClick={() => setNav(!nav)}
            >
              {navLink}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
