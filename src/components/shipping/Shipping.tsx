import shipping1 from "../../assets/images/shipping1.png"
import shipping2 from "../../assets/images/shipping2.png"

const Shipping = () => {
    return (
         <>
             <div className = "w-full">
             <div className="w-[95%] xl:w-[80%] mx-auto">
                     <div className = "py-[55px] xl:py-[100px] flex flex-col gap-8 items-center">
                            <div>
                                <p className="font-cormorant font-bold  text-center text-[28px] w-full xl:text-[36px] uppercase text-[#0B0B0B]">Save on shipping with a 3- or 6-pack.</p>
                            </div>

                            <div className="flex flex-col md:flex-row gap- md:gap-20 xl:gap-8 font-urbanist ps-2 sm:ps-0 font-semibold lg:justify-between xl:justify-center  text-[#0B0B0B]">
                               <div className=" flex gap-4 items-center">
                                  <img src={shipping1} alt="" />
                                  <p className="text-lg">Flat Fee $15 nationwide for 3-bottle bundles</p>
                               </div>

                               <div className=" flex gap-4 items-center">
                                   <img src={shipping2} alt="" />
                                  <p className="text-lg">Free shipping at $99+</p>
                               </div>
                            </div>
                        </div>
                </div>
                </div>
         </>
    )
}

export default Shipping;