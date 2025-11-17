// import React from 'react'
// import goldmedal from "../../assets/images/goldmedal.png"

// const GoldMedal = () => {
//   return (
//     <>
//        <div className='py-[100px] flex flex-col md:flex-row items-center justify-between gap-18'>
//             <div className='flex order-2 md:order-1 flex-col gap-5'>
//                 <p className='font-cormorant font-bold text-[36px] text-[#0B0B0B] uppercase'>Elite Wine Selections – 
//                 Pure <br /> terroir. Zero compromise.</p>
//                 <p className='text-[#565656] font-medium font-urbanist text-base'>Elite Wine Selections is a New York–based importer and wholesaler specializing in premium,
// award-winning European dealcoholized wines (&le; 0.5% ABV) primarily from Germany, France,
// Italy, and Spain. <br />
// We serve the fast-growing sober-curious and health-conscious communities who seek
// sophistication without alcohol.</p>

//             <div >
//                 <button className='font-urbanist font-semibold text-base text-[#0B0B0B] bg-[#EED291] border rounded-full cursor-pointer hover:bg-black ease-in-out duration-500 hover:text-[#EED291] border-[#EED291] px-10 pt-3 py-2.5'>DISCOVER MORE</button>
//             </div>
//             </div>

//             <div className='flex flex-col order-1 md:order-2 gap-3 items-center justify-between'>
//                <div>
//                   <img src={goldmedal} alt="" className='object-cover object-center w-[780px] h-[538px]' />
//                </div>
//                <p className='font-urbanist font-semibold text-base text-[#0B0B0B]'>Gold Medal for the Bergdolt-Reif & Nett Breakaway Merlot</p>
//             </div>

  
//        </div> 
//     </>
//   )
// }

// export default GoldMedal



import React from 'react'
import goldmedal from "../../assets/images/goldmedal.png"

const GoldMedal = () => {
  return (
    <>

    <div className='w-[95%] xl:w-[80%] mx-auto'>
    <div className=' py-[55px] xl:py-[100px] flex flex-col md:flex-row items-center justify-between gap-2 md:gap-6 lg:gap-12 '>
        
        {/* Text Section */}
        <div className='flex order-2 md:order-1 w-full  md:w-[50%] flex-col items-start  gap-3 max-w-[600px]  md:text-left'>
          <p className='font-cormorant font-bold text-3xl md:text-xl  lg:text-3xl xl:text-[36px] text-[#0B0B0B] uppercase leading-snug'>
            Elite Wine Selections – Pure <br className='hidden sm:block' /> terroir. Zero compromise.
          </p>

          <p className='text-[#565656] font-medium font-urbanist text-md xl:text-base  leading-relaxed'>
            Elite Wine Selections is a New York–based importer and wholesaler specializing in premium,
            award-winning European dealcoholized wines (&le; 0.5% ABV) primarily from Germany, France,
            Italy, and Spain. <br /><br />
            We serve the fast-growing sober-curious and health-conscious communities who seek
            sophistication without alcohol.
          </p>

          <div>
            <button className='font-urbanist font-semibold text-sm sm:text-base text-[#0B0B0B] bg-[#EED291] border rounded-full cursor-pointer hover:bg-black ease-in-out duration-500 hover:text-[#EED291] border-[#EED291] px-6 sm:px-8 md:px-10 pt-2.5 sm:pt-3 py-2 sm:py-2.5'>
              DISCOVER MORE
            </button>
          </div>
        </div>

        {/* Image Section */}



        <div className='flex flex-col w-full md:w-[50%] order-1 md:order-2 gap-3 items-end justify-center'>
         <div>
         <img 
              src={goldmedal} 
              alt="Gold Medal Wine" 
              className='object-contain object-center w-[538px] xl:h-[538px]'
               
            />

            <div className='w-full'>
            <p className='font-urbanist font-semibold  text-md md:text-sm xl:text-base text-[#0B0B0B] !text-center  px-3 md:px-0'>
            Gold Medal for the Bergdolt-Reif & Nett Breakaway Merlot
          </p>
            </div>
         </div>
      


        </div>

      </div>
    </div>

    </>
  )
}

export default GoldMedal
