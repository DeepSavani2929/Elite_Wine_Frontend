import React, { useEffect, useRef, useState } from "react";
import ews from "../../assets/images/ews.png";
import user from "../../assets/images/user.png";
import cart from "../../assets/images/cart.png";
import { CircleUserRound, UserRoundPlus } from "lucide-react";
import search from "../../assets/images/search.png";
import USA from "../../assets/images/USA.svg";
import Europe from "../../assets/images/Europe.svg.png";
import UK from "../../assets/images/UK.svg";
import switzerland from "../../assets/images/switzerland.jpg";
import { NavLink } from "react-router";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const bannerHeightRef = useRef<number>(0);

  useEffect(() => {
    const measure = () => {
      bannerHeightRef.current = bannerRef.current?.offsetHeight ?? 0;
    };
    measure();
    window.addEventListener("resize", measure, { passive: true });

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const threshold = bannerHeightRef.current;
        setIsSticky(window.scrollY >= threshold);
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const SearchIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="w-[19px] h-[19px]"
    >
      <circle cx="11" cy="11" r="7" strokeWidth="2"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2"></line>
    </svg>
  );

  const MenuIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="w-8 h-8"
    >
      <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2"></line>
      <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2"></line>
      <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2"></line>
    </svg>
  );

  const CloseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2"></line>
      <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2"></line>
    </svg>
  );

  const ChevronRight = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="w-4 h-4"
    >
      <polyline points="9 18 15 12 9 6" strokeWidth="2"></polyline>
    </svg>
  );

  return (
    <>
      {/* Banner section */}
      <div className="w-full" ref={bannerRef}>
        <div>
          <p className="text-[#0B0B0B] py-2 font-urbanist font-semibold text-base relative   z-60 flex justify-center items-center w-full bg-[#EED291]">
            Free shipping at $99+
          </p>
        </div>
      </div>

      {/* Header section */}
      <header
        className={`w-full   transition-colors duration-500 ease-in-out 
          ${
            isSticky ? "bg-black z-[999] top-0 fixed" : "bg-transparent fixed"
          } z-50 pt-2`}
      >
        <div className="w-[95%]  mx-auto flex justify-between items-center">
          {/* Logo + tagline */}
          <div className="flex flex-col justify-between items-center gap-3 font-urbanist font-semibold">
            <img
              src={ews}
              alt="Elite Wine Logo"
              className={`duration-500 ease-in-out  ${
                isSticky
                  ? "xl:w-[50px] h-[60px]"
                  : "w-[50px] xl:w-[128px] h-[60px] lg:h-[130px] xl:h-[137px] "
              } object-cover object-center`}
            />
            <p
              className={`text-[#C89D53] duration-500 ease-in-out  ${
                isSticky
                  ? " text-xs"
                  : " text-xs md:text-md lg:text-lg xl:text-xl"
              }`}
            >
              Pure Terroir.{" "}
              <span className="text-[#F9E6B1]">Zero Compromise.</span>
            </p>
          </div>

          {/* Desktop navigation */}
          <div className="hidden xl:flex justify-between gap-10 items-center text-[#FFFFFF] font-urbanist font-semibold text-md">
            <ul className="flex items-center gap-8">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-[#EED291]" : "")}
              >
                <li>Home</li>
              </NavLink>

              <NavLink
                to="/shop"
                className={({ isActive }) => (isActive ? "text-[#EED291]" : "")}
              >
                <li>Shop</li>
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "text-[#EED291]" : "")}
              >
                <li>About Us</li>
              </NavLink>

              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "text-[#EED291]" : "")}
              >
                <li>Blog</li>
              </NavLink>
            </ul>

            <div className="flex items-center gap-4 text-[#FFFFFF]">
              <img
                src={search}
                className="w-[18px] h-[18px] object-cover object-center"
                alt=""
              />
              <img
                src={user}
                alt="User"
                className="w-[18px] h-[18px] object-cover object-center"
              />
              <img
                src={cart}
                alt="Cart"
                className="w-[18px] h-[18px] object-cover object-center"
              />
            </div>

            <div className="block">
              <button className="text-[#0B0B0B] bg-[#EED291] border hover:bg-transparent ease-in-out duration-500 cursor-pointer hover:text-[#EED291] border-[#EED291] rounded-full px-8 pt-3 py-2.5">
                CONTACT US
              </button>
            </div>
          </div>

          {/* Mobile header */}
          <div className="flex xl:hidden items-center gap-5 text-white">
            <img
              src={search}
              className="search object-cover object-center"
              alt=""
            />
            <img
              src={user}
              alt="User"
              className="w-[24px] h-[24px] object-cover object-center"
            />
            <img
              src={cart}
              alt="Cart"
              className="w-[24px] h-[24px] object-cover object-center"
            />
            <button
              aria-label="Open menu"
              onClick={() => setIsMenuOpen(true)}
              className="text-white"
            >
              <MenuIcon class="hemburger" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-over menu */}
      <div
        className={`fixed inset-0 z-[9999] xl:hidden ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ease-out ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
        <div
          className={`absolute top-0 left-0 h-full w-[330px] z-90   md:w-[370px] bg-[#0b0b0b] text-white overflow-y-auto transform transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg font-semibold px-5 pt-3">Menu</p>
            <button
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
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
                `w-full text-left ${
                  isActive ? "text-[#EED291]" : ""
                } px-5 pb-3 pt-2.5 border-b border-[#e6e6e673] rounded bg-transparent hover:bg-white/5 flex items-center justify-between`
              }
            >
              <span>Home</span>
            </NavLink>

            <NavLink
              to="/shop"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `w-full text-left ${
                  isActive ? "text-[#EED291]" : ""
                } px-5 pb-3 pt-2.5 border-b border-[#e6e6e673] rounded bg-transparent hover:bg-white/5 flex items-center justify-between`
              }
            >
              <span>Shop</span>
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `w-full text-left ${
                  isActive ? "text-[#EED291]" : ""
                } px-5 pb-3 pt-2.5 border-b border-[#e6e6e673] rounded bg-transparent hover:bg-white/5 flex items-center justify-between`
              }
            >
              <span>About Us</span>
              <ChevronRight className="text-xl !h-6 !w-5" />
            </NavLink>

            <NavLink
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `w-full text-left ${
                  isActive ? "text-[#EED291]" : ""
                } px-5 pb-3 pt-2.5 border-b border-[#e6e6e673] rounded bg-transparent hover:bg-white/5 flex items-center justify-between`
              }
            >
              <span>Blog</span>
            </NavLink>

            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-left px-5 pb-3 pt-2.5 border-b border-[#e6e6e673] rounded bg-transparent hover:bg-white/5 flex items-center gap-2"
            >
              <span className="w-5 h-5 flex items-center justify-center">
                <CircleUserRound />
              </span>
              <span>Sign In</span>
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-full text-left px-5 pb-3 pt-2.5 rounded bg-transparent hover:bg-white/5  flex items-center gap-2"
          >
            <span className="w-5 h-5   flex items-center justify-center ">
              {" "}
              <UserRoundPlus />
            </span>
            <span>Create an account</span>
          </button>

          <div onClick={() => setIsMenuOpen(false)}>
            <p className="text-sm text-white  font-bold px-5 pb-3 pt-2.5">
              CURRENCY
            </p>
          </div>

          <div className="ps-5 px-5 pb-3 pt-2.5">
            <div
              className="flex items-center gap-5 flex-wrap "
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="flex items-center gap-2">
                <img
                  src={USA}
                  alt="USA"
                  className="w-4 h-4 rounded-full object-cover object-center"
                />{" "}
                USD
              </span>

              <span className="flex items-center gap-2">
                <img
                  src={Europe}
                  alt="Europe"
                  className="w-4 h-4 rounded-full object-cover object-center"
                />{" "}
                EUR
              </span>

              <span className="flex items-center gap-2">
                <img
                  src={UK}
                  alt="UK"
                  className="w-4 h-4 rounded-full object-cover object-center"
                />{" "}
                GBP
              </span>

              <span className="flex items-center gap-2">
                <img
                  src={switzerland}
                  alt="Switzerland"
                  className="w-4 h-4 rounded-full object-cover object-center"
                />{" "}
                CHF
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
