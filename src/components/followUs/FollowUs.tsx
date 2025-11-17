import React from 'react'
import instaImg1 from "../../assets/images/instaImg1.png"
import instaImg2 from "../../assets/images/instaImg2.png"
import instaImg3 from "../../assets/images/instaImg3.png"
import instaImg4 from "../../assets/images/instaImg4.png"

const FollowUs = () => {

    const gallery = [
        {
            instaImg: instaImg1
        },

              {
            instaImg: instaImg2
        },

              {
            instaImg: instaImg3
        },

              {
            instaImg: instaImg4
        },
    ]

  return (
      <>
           <div className='w-[95%] xl:w-[80%] mx-auto pb-[100px]'>
                 <div className='flex flex-col gap-10 '>
                     <p className='font-cormorant font-bold text-[36px] uppercase text-center text-[#0B0B0B]'>Follow us on Instagram</p>

                     <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {
                            gallery.map((instaContent, index) => (
                                 <>
                                    <div>
                                        <img src={instaContent.instaImg} className = " h-[200px] md:h-[250px] lg:h-[250px] xl:h-[280px] object-cover object-center w-full" alt="" />
                                    </div>
                                 </>
                            ))
                        }
                     </div>
                 </div>
           </div>
      </>
  )
}

export default FollowUs