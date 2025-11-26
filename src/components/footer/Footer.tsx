import React, { useState } from "react";
import ews from "../../assets/images/ews.png";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Plus,
  Minus,
} from "lucide-react";
import footerImg from "../../assets/images/footerImg.png";
import { NavLink } from "react-router";

const Footer = () => {
  const [openAccordions, setOpenAccordions] = useState<string[]>([]);

  const toggleAccordion = (section: string) => {
    setOpenAccordions((prev) =>
      prev.includes(section)
        ? prev.filter((item) => item !== section)
        : [...prev, section]
    );
  };

  return (
    <>
      <div className="w-full bg-[#0B0B0B] text-white overflow-x-hidden">
        <div className="w-[95%] mx-auto pt-[55px] xl:pt-[100px]">
          <div className="flex  items-start gap-10 lg:gap-20 w-full relative">
            <div className="flex-shrink-0 z-90 left-6  md:-left-10 top-4 md:top-0 xl:-top-20 absolute">
              <img
                src={footerImg}
                alt="footer"
                className="object-cover max-w-[220px] lg:max-w-[260px] xl:max-w-[300px]"
              />
            </div>

            <div className="flex flex-col relative z-99 items-center flex-1 gap-6">
              <div className="flex flex-col items-center gap-4 justify-between">
                <p className="font-cormorant font-semibold text-2xl uppercase">
                  OUR NEWSLETTER
                </p>
                <p className="font-urbanist font-medium text-base leading-[20px] text-[#FFFFFFB3] capitalize">
                  Sign Up For Our Newsletter
                </p>
              </div>

              <div className="w-full flex justify-center max-w-[846px] mb-12">
                <div className="hidden md:block relative bg-[#F0F0F0] w-[80%] xl:w-full rounded-full">
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="w-full rounded-full font-semibold py-3 pl-8 pr-40 bg-[#F0F0F0] text-[#0B0B0B] placeholder:text-[#0B0B0B] focus:outline-none font-urbanist text-base"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#EED291] rounded-full px-8 py-3 font-urbanist font-semibold text-base text-[#0B0B0B]">
                    SUBSCRIBE
                  </button>
                </div>

                <div className="flex flex-col gap-4 md:hidden w-full">
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="w-full rounded-full font-semibold py-4 pl-8 bg-[#F0F0F0] text-[#0B0B0B] placeholder:text-[#0B0B0B] focus:outline-none font-urbanist text-base"
                  />
                  <button className="w-full bg-[#EED291] rounded-full py-3 font-urbanist font-semibold text-base text-[#0B0B0B]">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:flex-row gap-y-3 justify-between md:gap-x-12 pb-10">
            <div className="xl:items-start flex flex-col  gap-3 xl:gap-5">
              <img
                src={ews}
                alt="Elite Wine Selections"
                className=" h-28 w-28 xl:h-24 xl:w-24"
              />

              <p className="font-urbanist font-medium text-base leading-[22px] text-[#FFFFFF]">
                Elite Wine Selections is a New York-based importer and
                wholesaler specializing in premium, award-winning European
                dealcoholized wines (&lt;0.5% ABV) primarily from Germany,
                France, Italy, and Spain.
              </p>

              <ul className="flex gap-4 mt-2 mb-3">
                <li>
                  <Facebook className="w-[24px] h-[24px] text-white cursor-pointer hover:text-[#EED291] transition" />
                </li>
                <li>
                  <Twitter className="w-[24px] h-[24px] text-white cursor-pointer hover:text-[#EED291] transition" />
                </li>
                <li>
                  <Youtube className="w-[24px] h-[24px] text-white cursor-pointer hover:text-[#EED291] transition" />
                </li>
                <li>
                  <Instagram className="w-[24px] h-[24px] text-white cursor-pointer hover:text-[#EED291] transition" />
                </li>
              </ul>
            </div>

            <div className="hidden md:flex flex-col gap-4">
              <h3 className="font-cormorant text-[#FFFFFF] font-semibold text-md md:text-2xl uppercase">
                Company
              </h3>
              <ul className="font-urbanist text-base font-regular flex flex-col gap-2 text-[#FFFFFFB3]">
                <NavLink to="/">
                  <li className="hover:text-[#EED291] cursor-pointer">Home</li>
                </NavLink>

                <NavLink to="/about-us">
                  <li className="hover:text-[#EED291] cursor-pointer">
                    About Us
                  </li>
                </NavLink>

                <NavLink to="/shop">
                  <li className="hover:text-[#EED291] cursor-pointer">Shop</li>
                </NavLink>

                <NavLink to="/blog">
                  <li className="hover:text-[#EED291] cursor-pointer">Blog</li>
                </NavLink>

                <NavLink to="/faq">
                  <li className="hover:text-[#EED291] cursor-pointer">FAQ</li>
                </NavLink>

                <NavLink to="/collections">
                  <li className="hover:text-[#EED291] cursor-pointer">
                    Collections
                  </li>
                </NavLink>
              </ul>
            </div>

            <div className="md:hidden w-full border-b border-[#ffffff] pb-3">
              <button
                onClick={() => toggleAccordion("company")}
                className="w-full flex justify-between items-center font-cormorant text-[#FFFFFF] font-semibold text-lg md:text-2xl uppercase"
              >
                Company
                {openAccordions.includes("company") ? (
                  <Minus className="w-5 h-5 text-[#FFFFFF]" />
                ) : (
                  <Plus className="w-5 h-5 text-[#FFFFFF]" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openAccordions.includes("company")
                    ? "max-h-[500px] mt-3"
                    : "max-h-0"
                }`}
              >
                <ul className="font-urbanist text-base text-[#FFFFFFB3] flex flex-col gap-2">
                  <li className="hover:text-[#EED291] cursor-pointer">Home</li>

                  <NavLink to="/about-us">
                    <li className="hover:text-[#EED291] cursor-pointer">
                      About Us
                    </li>
                  </NavLink>

                  <NavLink to="/shop">
                    <li className="hover:text-[#EED291] cursor-pointer">
                      Shop
                    </li>
                  </NavLink>
                  <li className="hover:text-[#EED291] cursor-pointer">Blog</li>
                  <NavLink to="/faq">
                    <li className="hover:text-[#EED291] cursor-pointer">FAQ</li>
                  </NavLink>
                  <NavLink to="/collections">
                    <li className="hover:text-[#EED291] cursor-pointer">
                      Collections
                    </li>
                  </NavLink>
                </ul>
              </div>
            </div>

            <div className="hidden md:flex flex-col gap-4">
              <h3 className="font-cormorant text-[#FFFFFF] font-semibold text-md md:text-2xl uppercase">
                More Information
              </h3>
              <ul className="font-urbanist text-base font-regular flex flex-col gap-2 text-[#FFFFFFB3]">
                <li className="hover:text-[#EED291] cursor-pointer">
                  Shipping & Payment
                </li>
                <NavLink to="/privacy">
                  <li className="hover:text-[#EED291] cursor-pointer">
                    Privacy Policy
                  </li>
                </NavLink>

                <li className="hover:text-[#EED291] cursor-pointer">
                  Terms Of Service
                </li>
                <li className="hover:text-[#EED291] cursor-pointer">
                  Refund Policy
                </li>
                <NavLink to="/contact-us">
                  <li className="hover:text-[#EED291] cursor-pointer">
                    Contact
                  </li>
                </NavLink>
              </ul>
            </div>

            <div className="md:hidden w-full border-b border-[#ffffff] pb-3">
              <button
                onClick={() => toggleAccordion("info")}
                className="w-full flex justify-between items-center font-cormorant text-[#FFFFFF] font-semibold text-lg md:text-2xl uppercase"
              >
                More Information
                {openAccordions.includes("info") ? (
                  <Minus className="w-5 h-5 text-[#FFFFFF]" />
                ) : (
                  <Plus className="w-5 h-5 text-[#FFFFFF]" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openAccordions.includes("info")
                    ? "max-h-[500px] mt-3"
                    : "max-h-0"
                }`}
              >
                <ul className="font-urbanist text-base text-[#FFFFFFB3] flex flex-col gap-2">
                  <li className="hover:text-[#EED291] cursor-pointer">
                    Shipping & Payment
                  </li>

                  <NavLink to="/privacy">
                    <li className="hover:text-[#EED291] cursor-pointer">
                      Privacy Policy
                    </li>
                  </NavLink>

                  <li className="hover:text-[#EED291] cursor-pointer">
                    Terms Of Service
                  </li>
                  <li className="hover:text-[#EED291] cursor-pointer">
                    Refund Policy
                  </li>
                  <NavLink to="/contact-us">
                    <li className="hover:text-[#EED291] cursor-pointer">
                      Contact
                    </li>
                  </NavLink>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-cormorant font-semibold text-lg md:text-2xl uppercase">
                Contact
              </h3>
              <ul className="font-urbanist text-base font-regular flex flex-col gap-3">
                <li className="flex items-center gap-3">
                  <Phone className="w-[24px] h-[24px]" fill="#FFFFFF" />
                  <p className="text-[#FFFFFFB3] whitespace-nowrap">
                    +1 (631)-484-1334
                  </p>
                </li>
                <li className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-[24px] h-[24px] text-[#FFFFFF]" />
                  <p className="text-[#FFFFFFB3] whitespace-nowrap overflow-hidden text-ellipsis max-w-[220px] md:max-w-none">
                    sebastian.huckel@elitewineselections.com
                  </p>
                </li>
                <li className="flex items-start gap-3 leading-[22px]">
                  <MapPin className="w-[24px] h-[24px] text-[#FFFFFF] mt-1" />
                  <p className="text-[#FFFFFFB3]">
                    Elite Wine Selections Inc. 40 Corbin Ave Ste B
                    <br />
                    Bay Shore, NY 11706-1048 USA
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#2C2C2C] text-center py-5">
            <p className="font-urbanist text-base text-[#FFFFFF]">
              © 2025 Elite Wine Selections All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
