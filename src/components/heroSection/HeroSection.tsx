import React from 'react'
import heroImg from "../../assets/images/heroimg.png"

const HeroSection = () => {
  return (
      <>
        <div className='bg-[#0B0B0B] relative pb-[20px] md:pb-[55px] xl:pb-[100px]'>
          <div className='flex flex-col gap-2 xl:gap-5 justify-between items-center w-full'>
            <img src={heroImg} alt="" className='mb-2 lg:mb-14 xl:mb-0 object-cover object-center h-[353px] sm:h-[360px] md:h-[420px] lg:h-[550px] xl:h-[700px]'/>
            <p className='text-[#FFFFFF] font-bold text-[30px] md:text-3xl xl:text-[48px] text-center uppercase font-cormorant'>The essence of fine wine— <br />
            without alcohol</p>
            <button className='bg-[#EED291] text-[#0B0B0B] border cursor-pointer hover:bg-transparent ease-in-out duration-500 hover:text-[#EED291] border-[#0B0B0B] hover:border-[#EED291] rounded-full text-base font-semibold font-urbanist px-10 pt-3 py-2.5'>SHOP NOW</button>
          </div>

        </div>
      </>
  )
}

export default HeroSection