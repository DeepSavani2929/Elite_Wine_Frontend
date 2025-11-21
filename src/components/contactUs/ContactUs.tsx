// import React from 'react'

// const ContactUs = () => {
//   return (

//     <>
//        <div className="bg-[url('/images/contactImages/contactbg.png')] h-[320px] lg:h-[340px] xl:h-[400px] relative top-0 bg-cover bg-center">
//         <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
//           <p className="font-urbanist font-semibold text-base text-white">
//             Home <span className="font-Poppins ms-1 me-1"> &gt;</span>Contact
//           </p>
//           <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-white">
//             Contact us
//           </p>
//         </div>
//       </div>

//    <div className="w-[95%] xl:w-[80%]  mx-auto">
//         <div className="py-[55px] xl:py-[100px]">

//             </div>
//             </div>

//     </>

//   )
// }

// export default ContactUs

import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Youtube,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import homeIcon from "../../assets/images/contactUs/homeIcon.png";
// import facebook from "../../assets/images/contactUs/contactfacebook.png";
// import twitter from "../../assets/images/contactUs/contacttwitter.png";
// import youtube from "../../assets/images/contactUs/contactyoutube.png";
// import insta from "../../assets/images/contactUs/contactinsta.png";
const ContactUs = () => {
  return (
    <>
      {/* -------------------------------------------------
          BANNER
      -------------------------------------------------- */}
      <div className="bg-[url('/images/contactImages/contactbg.png')] h-[320px] lg:h-[340px] xl:h-[400px] bg-cover bg-center relative">
        <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
          <p className="font-urbanist font-semibold text-base text-white">
            Home <span className="mx-1">&gt;</span> Contact
          </p>

          <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-white">
            Contact Us
          </p>
        </div>
      </div>

      {/* -------------------------------------------------
          MAIN SECTION
      -------------------------------------------------- */}
      <div className="w-[95%] xl:w-[80%] mx-auto py-[50px] xl:py-[100px]">
        {/* FLEX CONTAINER (Responsive) */}
        <div className="flex flex-col xl:flex-row gap-8 md:gap-10 xl:gap-24">
          {/* -------------------------------------------------
              LEFT : FORM SECTION
              (65% width on LG)
          -------------------------------------------------- */}
          <div className="w-full xl:w-[65%] ">
            <p className="font-cormorant font-medium text-[32px] md:text-[34px] xl:text-[36px] uppercase text-[#0B0B0B] mb-10">
              Send us a message
            </p>

            <div className=" shadow-xl border font-urbanist border-[#f1f1f1] rounded-md px-6 md:px-10 py-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 ">
                <div>
                  <label className="font-urbanist font-semibold text-md text-[#0B0B0B]">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full border-b border-[#D9D9D9] text-[#565656] placeholder:text-[#565656] font-medium text-base focus:outline-none py-2 mt-2"
                  />
                </div>

                <div>
                  <label className="font-urbanist font-semibold text-md text-[#0B0B0B]">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="w-full border-b border-[#D9D9D9] text-[#565656] placeholder:text-[#565656] font-medium text-base focus:outline-none py-2 mt-2"
                  />
                </div>
              </div>

              {/* Phone + Subject */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="font-urbanist font-semibold text-md text-[#0B0B0B]">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Phone Number"
                    className="w-full border-b border-[#D9D9D9] text-[#565656] placeholder:text-[#565656] font-medium text-base focus:outline-none py-2 mt-2"
                  />
                </div>

                <div>
                  <label className="font-urbanist font-semibold text-md text-[#0B0B0B]">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Subject"
                    className="w-full border-b border-[#D9D9D9] text-[#565656] placeholder:text-[#565656] font-medium text-base focus:outline-none py-2 mt-2"
                  />
                </div>
              </div>

              {/* Comment */}
              <div className="mb-5">
                <label className="font-urbanist font-semibold text-md text-[#0B0B0B]">
                  Comme nt <span className="text-red-600">*</span>
                </label>
                <textarea
                  placeholder="Enter Your Message"
                  className="w-full border-b border-[#D9D9D9] text-[#565656] placeholder:text-[#565656] font-medium text-base focus:outline-none py-2 mt-2 h-42 resize-vertical"
                />
              </div>

              {/* Button */}
              <button className="w-full bg-[#EED291] hover:bg-transparent border border-[#EED291] cursor-pointer transition duration-600 transition-all py-4 rounded-full font-urbanist font-semibold text-base text-[#0B0B0B]   ">
                SEND MESSAGE
              </button>
            </div>
          </div>
          {/* Name + Email */}

          {/* -------------------------------------------------
              RIGHT : CONTACT INFO
              (35% width on LG)
          -------------------------------------------------- */}
          <div className="w-full xl:w-[35%] flex flex-col ">
            <p className="font-cormorant font-medium text-[32px] md:text-[34px] xl:text-[36px] uppercase text-[#0B0B0B] mb-10">
              Get in Touch
            </p>

            <div className="flex flex-col ">
              <div className="flex flex-col gap-6 xl:gap-8">
                {/* Address */}
                <div className="flex items-start gap-6">
                  <img
                    src={homeIcon}
                    alt=""
                    className="w-9 h-9 text-[#641026]"
                  />

                  <div>
                    <p className="font-urbanist font-semibold text-lg text-[#0B0B0B]">
                      Address
                    </p>
                    <p className="font-urbanist font-medium text-base  text-[#565656] ">
                      Elite Wine Selections Inc. 40 Corbin <br /> Ave Ste B Bay
                      Shore, NY 11706-1048
                      <br />
                      USA
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-6">
                  <Clock className="w-8 h-8 text-[#641026]" />
                  <div>
                    <p className="font-urbanist font-semibold text-lg">Hours</p>
                    <p className="font-urbanist text-[#565656]">
                      6 Days a week
                      <br />
                      10:00 am to 6:00 pm EST
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-6">
                  <Phone className="w-8 h-8 text-[#641026]" />
                  <div>
                    <p className="font-urbanist font-semibold text-lg">Phone</p>
                    <p className="font-urbanist text-[#565656]">
                      +1 (631)-464-1334
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-6 border-b border-[#D9D9D9] pb-10">
                  <Mail className="w-8 h-8 text-[#641026]" />
                  <div>
                    <p className="font-urbanist font-semibold text-lg">Email</p>
                    <p className="font-urbanist text-[#565656]">
                      sebastian.huelck@elitewineselections.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="font-urbanist font-semibold text-lg mb-4">
                Follow Our Social Media
              </p>
              <div className="flex gap-6 text-xl items-center">
                <Facebook className="w-6 h-6 cursor-pointer" fill="black" />
                <Twitter className="w-6 h-6 cursor-pointer" fill="black" />
                <Youtube
                  className="w-8 h-8 cursor-pointer text-white"
                  fill="black"
                />
                <Instagram
                  className="w-7 h-7 cursor-pointer text-white"
                  fill="black"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

       <div className="w-[95%] xl:w-[80%] mx-auto pb-[50px] xl:pb-[100px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d750001.8085391109!2d-73.10651353868084!3d40.72969033891579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e82d0016b400c9%3A0x1ff355c3388acdd1!2sElite%20Wine%20Selections%20Inc.!5e0!3m2!1sen!2sin!4v1763729596243!5m2!1sen!2sin" className="w-full h-[400px]"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </div>
    </>
  );
};

export default ContactUs;
