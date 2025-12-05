import React, { useEffect, useRef, useState } from "react";
import ews from "../../assets/images/ews.png";
import user from "../../assets/images/user.png";
import cart from "../../assets/images/cart.png";
import { CircleUserRound, MoveLeft, UserRoundPlus } from "lucide-react";
import search from "../../assets/images/search.png";
import USA from "../../assets/images/USA.svg";
import Europe from "../../assets/images/Europe.svg.png";
import UK from "../../assets/images/UK.svg";
import switzerland from "../../assets/images/switzerland.jpg";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartPopover from "../cartProducts/CartPopover";
import ProfileDrawer from "../profileDrower/ProfileDrower";
import LogoutDrawer from "../profileDrower/LogoutDrower";
import { fetchCartItemsAPI } from "../../redux/cart/cartSlice";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [lastOpenedPanel, setLastOpenedPanel] = useState<"main" | "about">(
    "main"
  );

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.cartItems);
  const userId = localStorage.getItem("userId");

  const location = useLocation();
  const isCartPage =
    location.pathname === "/cartDetails" ||
    location.pathname === "/register" ||
    location.pathname === "/login" ||
    location.pathname === "/reset-password" ||
    location.pathname === "/privacy";

  const isResetPasswordPage = location.pathname.startsWith("/reset-password/");

  const iconColor = isCartPage ? "brightness-0" : "";

  const cartIconColor =
    isResetPasswordPage && !isSticky
      ? "grayscale brightness-[0.40]"
      : iconColor;

  const textColor = isCartPage ? "text-[#0B0B0B]" : "text-white";

  const itemCount = cartItems.length;

  const bannerRef = useRef<HTMLDivElement | null>(null);
  const bannerHeightRef = useRef<number>(0);

  const [showAboutDropdown, setShowAboutDropdown] = useState(false);

  const [isAboutPanelOpen, setIsAboutPanelOpen] = useState(false);

  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const aboutBtnRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        !aboutBtnRef.current?.contains(e.target as Node)
      ) {
        setShowAboutDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    dispatch(fetchCartItemsAPI())
    const measure = () => {
      bannerHeightRef.current = bannerRef.current?.offsetHeight ?? 0;
    };
    measure();
    window.addEventListener("resize", measure);

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setIsSticky(window.scrollY >= bannerHeightRef.current);
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const openHamburger = () => {
    setIsMenuOpen(true);

    if (lastOpenedPanel === "about") {
      setIsAboutPanelOpen(true);
    } else {
      setIsAboutPanelOpen(false);
    }
  };

  const openDropdown = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setShowAboutDropdown(true);
  };

  const closeDropdown = () => {
    closeTimeout.current = setTimeout(() => {
      setShowAboutDropdown(false);
    }, 150);
  };

  const ChevronRight = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      className="w-4 h-4"
    >
      <polyline points="9 18 15 12 9 6" strokeWidth="2"></polyline>
    </svg>
  );

  const BackArrow = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#0B0B0B"
      className="w-6 h-6"
    >
      <polyline points="15 6 9 12 15 18" strokeWidth="2" />
    </svg>
  );

  const CloseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2"></line>
      <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2"></line>
    </svg>
  );

  const aboutItems = [
    {
      label: "About Us Bergdolt, Reif & Nett",
      to: "/about-us/bergdolt-reif-nett",
    },
    { label: "About Us Lamm-Jung", to: "/about-us/lamm-jung" },
    {
      label: "About Us KvD Strauch Sektmanufaktur",
      to: "/about-us/kvd-strauch-sektmanufaktur",
    },
    {
      label: "About Château Clos De Boüard",
      to: "/about-us/château-clos-de-boüard",
    },
    {
      label: "About Weingut Matthias Anton",
      to: "/about-us/weingut-matthias-anton",
    },
  ];

  const aboutItemsForMobile = [
    { label: "Go To About Us", to: "/about-us" },
    {
      label: "About Us Bergdolt, Reif & Nett",
      to: "/about-us/bergdolt-reif-nett",
    },
    { label: "About Us Lamm-Jung", to: "/about-us/lamm-jung" },
    {
      label: "About Us KvD Strauch Sektmanufaktur",
      to: "/about-us/kvd-strauch-sektmanufaktur",
    },
    {
      label: "About Château Clos De Boüard",
      to: "/about-us/château-clos-de-boüard",
    },
    {
      label: "About Weingut Matthias Anton",
      to: "/about-us/weingut-matthias-anton",
    },
  ];

  const underlineClass =
    "relative after:content-[''] after:absolute after:left-0 after:-bottom-1 " +
    "after:h-[2px] after:bg-[#EED291] after:w-0 hover:after:w-full " +
    "after:transition-all after:duration-300";

  return (
    <>
      <CartPopover isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <div className="w-full" ref={bannerRef}>
        <p className="text-[#0B0B0B] py-2 font-urbanist font-semibold text-base bg-[#EED291] text-center">
          Free shipping at $99+
        </p>
      </div>

      <header
        className={`w-full fixed top-0 pt-2 transition-colors duration-500 z-[999] ${
          isSticky ? "bg-black py-3" : " pt-14 bg-transparent"
        }`}
      >
        <div className="w-[95%]  mx-auto flex justify-between items-center">
          <div className="flex flex-col items-center gap-3 font-urbanist font-semibold">
            <img
              src={ews}
              className={`duration-500 ${
                isSticky
                  ? "   xl:w-[50px] h-[60px]"
                  : "w-[80px]   xl:w-[128px]  h-[100px] xl:h-[137px]"
              }`}
            />

            <p
              className={`text-[#C89D53] duration-500 ${
                isSticky
                  ? "text-xs"
                  : `text-xs md:text-md lg:text-lg xl:text-xl`
              }`}
            >
              Pure Terroir.{" "}
              <span className="text-[#F9E6B1]">Zero Compromise.</span>
            </p>
          </div>

          <div className="hidden xl:flex gap-10 items-center text-white font-urbanist font-semibold text-md relative">
            <ul className="flex items-center gap-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `
      ${isActive ? "!text-[#EED291]" : textColor}
      ${underlineClass}
      hover:text-[#EED291]
      ${isSticky ? "text-white" : ""}
    `
                }
              >
                <li>Home</li>
              </NavLink>

              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `${
                    isActive ? "!text-[#EED291]" : textColor
                  } ${underlineClass} hover:text-[#EED291]      ${
                    isSticky ? "text-white" : ""
                  }`
                }
              >
                <li>Shop All</li>
              </NavLink>

              <li
                ref={aboutBtnRef}
                className="relative cursor-pointer"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    `${
                      isActive ? "!text-[#EED291]" : textColor
                    } ${underlineClass} hover:text-[#EED291]  ${
                      isSticky ? "text-white" : ""
                    }`
                  }
                >
                  <span>About Us</span>
                </NavLink>

                {showAboutDropdown && (
                  <div
                    ref={dropdownRef}
                    className="absolute top-full left-0 mt-3 w-[220px] bg-[#0B0B0B] border border-[gray] shadow-lg z-[999999]"
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    {aboutItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.to}
                        className="block px-4 py-3 mx-3 text-white font-urbanist font-semibold text-sm border-b border-[gray] hover:text-[#EED291]"
                        onClick={() => setShowAboutDropdown(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `${
                    isActive ? "!text-[#EED291]" : textColor
                  } ${underlineClass} hover:text-[#EED291]      ${
                    isSticky ? "text-white" : ""
                  }`
                }
              >
                <li>Blog</li>
              </NavLink>
            </ul>

            <div className="flex items-center gap-4 text-white">
              <img
                src={search}
                className={`w-[20px] h-[20px] cursor-pointer ${iconColor}         ${
                  isSticky ? "brightness-0 invert" : ""
                }`}
                alt="search"
              />
              <img
                src={user}
                className={`w-[24px] h-[24px] cursor-pointer ${iconColor}           ${
                  isSticky ? "brightness-0 invert" : ""
                }`}
                alt="user"
                onClick={() => {
                  if (userId) {
                    setIsLogoutOpen(true);
                  } else {
                    setIsProfileOpen(true);
                  }
                }}
              />

              <div className="relative">
                <img
                  src={cart}
                  className={`w-[24px] h-[24px] cursor-pointer ${cartIconColor}   ${
                    isSticky ? "brightness-0 invert" : ""
                  }`}
                  alt="cart"
                  onClick={() => setIsCartOpen(true)}
                />

                {itemCount >= 0 && (
                  <span
                    className="
                      absolute -top-3 -right-3
                      bg-[#EED291] text-[#0B0B0B]
                      text-[11px] font-bold
                      w-[20px] h-[20px]
                      rounded-full flex items-center justify-center
                      border border-[#0B0B0B]
                    "
                  >
                    {itemCount ?? 0}
                  </span>
                )}
              </div>
            </div>

            <NavLink to="/contact-us">
              <button className="text-[#0B0B0B] bg-[#EED291] cursor-pointer border border-[#EED291] rounded-full px-8 pt-3 py-2.5 hover:bg-transparent hover:text-[#EED291] transition">
                CONTACT US
              </button>
            </NavLink>
          </div>

          <div className="flex xl:hidden items-center gap-5 text-white">
            <img
              src={search}
              className={`w-[20px] h-[20px] cursor-pointer ${iconColor}       ${
                isSticky ? "brightness-0 invert" : ""
              }`}
            />
            <img
              src={user}
              className={`w-[24px] h-[24px] cursor-pointer ${iconColor}       ${
                isSticky ? "brightness-0 invert" : ""
              }`}
              onClick={() => setIsProfileOpen(true)}
            />
            <div className="relative">
              <img
                src={cart}
                className={`w-[22px] h-[22px] cursor-pointer ${iconColor}       ${
                  isSticky ? "brightness-0 invert" : ""
                }`}
                alt="cart"
                onClick={() => setIsCartOpen(true)}
              />

              {itemCount >= 0 && (
                <span
                  className="
                      absolute -top-3 -right-3
                      bg-[#EED291] text-[#0B0B0B]
                      text-[11px] font-bold
                      w-[20px] h-[20px]
                      rounded-full flex items-center justify-center
                      border border-[#0B0B0B]
                    "
                >
                  {itemCount ?? 0}
                </span>
              )}
            </div>

            <button onClick={openHamburger}>
              <svg
                className={`w-8 h-8 mt-2 ${iconColor} ${
                  isSticky ? "brightness-0 invert" : ""
                }`}
                fill="none"
                stroke="currentColor"
              >
                <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2" />
                <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2" />
                <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[9999] xl:hidden ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => {
            setIsMenuOpen(false);
            setIsAboutPanelOpen(false);
          }}
        />

        <div
          className={`absolute top-0 left-0 h-full w-[330px] md:w-[370px]
            bg-[#0B0B0B] text-white overflow-y-auto 
            transform transition-transform duration-300 ease-out
            ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg font-semibold px-5 pt-3">Menu</p>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setIsAboutPanelOpen(false);
              }}
              className="text-white pt-3 pe-3"
            >
              <CloseIcon />
            </button>
          </div>

          <nav className="space-y-0.5">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `w-full text-left px-5 pb-3 pt-2.5 border-b border-[#e6e6e673]
                flex justify-between ${isActive ? "text-[#EED291]" : ""}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/shop"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `w-full text-left px-5 pb-3 pt-2.5 border-b border-[#e6e6e673]
                flex justify-between ${isActive ? "text-[#EED291]" : ""}`
              }
            >
              Shop All
            </NavLink>

            <button
              onClick={() => {
                setIsAboutPanelOpen(true);
                setLastOpenedPanel("about");
              }}
              className={`w-full text-left px-5 pb-3 pt-2.5 
    border-b border-[#e6e6e673] flex items-center justify-between 
    ${location.pathname.includes("/about-us") ? "text-[#EED291]" : ""}
  `}
            >
              <span>About Us</span>
              <ChevronRight />
            </button>

            <NavLink
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `w-full text-left px-5 pb-3 pt-2.5 border-b border-[#e6e6e673]
                 flex justify-between ${isActive ? "text-[#EED291]" : ""}`
              }
            >
              Blog
            </NavLink>

            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-left px-5 pb-3 pt-2.5 
              border-b border-[#e6e6e673] flex items-center gap-2"
            >
              <span className="w-5 h-5 flex items-center justify-center">
                <CircleUserRound />
              </span>
              <NavLink to="/login">
                <span>Sign In</span>
              </NavLink>
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-full text-left px-5 pb-3 pt-2.5 
            flex items-center gap-2"
          >
            <span className="w-5 h-5 flex items-center justify-center">
              <UserRoundPlus />
            </span>
            <NavLink to="/register">
              <span>Create an account</span>
            </NavLink>
          </button>

          <p className="text-sm text-white font-bold px-5 pb-3 pt-2.5">
            CURRENCY
          </p>

          <div className="ps-5 px-5 pb-3 pt-2.5">
            <div className="flex items-center gap-5 flex-wrap">
              <span className="flex items-center gap-2">
                <img src={USA} className="w-4 h-4 rounded-full" /> USD
              </span>
              <span className="flex items-center gap-2">
                <img src={Europe} className="w-4 h-4 rounded-full" /> EUR
              </span>
              <span className="flex items-center gap-2">
                <img src={UK} className="w-4 h-4 rounded-full" /> GBP
              </span>
              <span className="flex items-center gap-2">
                <img src={switzerland} className="w-4 h-4 rounded-full" /> CHF
              </span>
            </div>
          </div>
        </div>

        <div
          className={`absolute top-0 left-0 h-full w-[330px] md:w-[370px]
            bg-[#0B0B0B] text-white overflow-y-auto
            transform transition-transform duration-300 ease-out
            ${isAboutPanelOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div className="w-full bg-[#EED291] h-[56px] flex items-center relative">
            <button
              onClick={() => {
                setIsAboutPanelOpen(false);
                setLastOpenedPanel("main");
              }}
              className="absolute left-4 text-black"
            >
              <MoveLeft />
            </button>

            <p className="mx-auto text-black font-urbanist font-semibold text-lg">
              About Us
            </p>
          </div>

          <div className="pb-4">
            {aboutItemsForMobile.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.to}
                end={item.to === "/about-us"}
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsAboutPanelOpen(false);
                }}
                className={({ isActive }) =>
                  `block px-5 py-4 border-b border-[#e6e6e673]
             font-urbanist font-semibold text-sm
            hover:text-[#EED291]
            ${isActive ? "text-[#EED291]" : "text-white"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {!userId && (
        <ProfileDrawer
          isOpen={isProfileOpen}
          onClose={() => setIsProfileOpen(false)}
        />
      )}

      {userId && (
        <LogoutDrawer
          isOpen={isLogoutOpen}
          onClose={() => setIsLogoutOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
