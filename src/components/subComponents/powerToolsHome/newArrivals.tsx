import Image from "next/image"
import simpBg1 from '../../../static/cardDummyimg1.jpeg'
import simpBg2 from '../../../static/cardDummyimg1.jpeg'
import simpBg3 from '../../../static/cardDummyimg1.jpeg'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMediaQuery } from "@mui/material"
import { handleSmoothScroll } from "@/services/generalService"

export const NewArrivals = () => {
    const matches = useMediaQuery("(max-width:1480px)");
    const matches2 = useMediaQuery("(max-width:1130px)");

    return (
        <div className="container1 grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-y-0 md:gap-x-5 lg:mt-8">
            <div className={`bg-TOOLS_PRIMARY rounded-lg p-8 relative overflow-hidden h-96 flex items-end w-full`}>
                <div className="absolute top-0 right-0 opacity-50 overflow-hidden p-3 sm:p-3 md:p-5 lg:p-10 w-48 sm:w-60 md:w-40 lg:w-52 h-48 sm:h-60 md:h-40 lg:h-52 bl_round flex items-center justify-center bg-TOOLS_PRIMARY-LIGHT">
                    <Image src={simpBg1} alt="" className="" />
                </div>
                <div className="w-full">
                    <h1 className={`${matches ? "text-3xl" : "text-5xl h1_line_height"} fw_700 text-zinc-800`}>Built <br />
                        Latest<br />
                        New Ideas</h1>
                    <div className="lg:flex items-center gap-x-4 justify-between w-full mt-8">
                        <p className={`tracking-widest ${matches2 ? "text-base" : "text-xl"} fw_400`}>New Arrival</p>
                        <a href="#productsShop" onClick={handleSmoothScroll} className="border-none outline-none shadow-none mt-3 lg:mt-0 float-right flex items-center gap-x-2 hover:gap-x-3 duration-300 fw_600 text-black text-sm w-max">
                            Shop Now
                            <div className="h-6 w-6 rounded-full bg-black duration-300 text-white text-xs flex items-center justify-center">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className={`bg-black rounded-lg p-8 relative overflow-hidden h-96 flex items-end w-full`}>
                <div className="absolute top-0 right-0 opacity-50 overflow-hidden p-3 sm:p-3 md:p-5 lg:p-10 w-48 sm:w-60 md:w-40 lg:w-52 h-48 sm:h-60 md:h-40 lg:h-52 bl_round flex items-center justify-center bg-zinc-700">
                    <Image src={simpBg2} alt="" className="" />
                </div>
                <div className="w-full">
                    <h1 className={`fw_700 text-white ${matches ? "text-3xl" : "text-5xl h1_line_height"}`}>Shop <br />
                        Modern
                        <br />
                        Products</h1>
                    <div className="lg:flex items-center gap-x-4 justify-between w-full mt-8">
                        <p className={`tracking-widest ${matches2 ? "text-base" : "text-xl"} fw_400 text-white`}>New Arrival</p>
                        <a href="#productsShop" onClick={handleSmoothScroll} className="border-none outline-none shadow-none mt-3 lg:mt-0 float-right flex items-center gap-x-2 hover:gap-x-3 duration-300 fw_600 text-white text-sm w-max">
                            Shop Now
                            <div className="h-6 w-6 rounded-full bg-white duration-300 text-black text-xs flex items-center justify-center">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className={`bg-zinc-100 rounded-lg p-8 relative overflow-hidden h-96 flex items-end w-full`}>
                <div className="absolute top-0 right-0 opacity-50 overflow-hidden p-3 sm:p-3 md:p-5 lg:p-10 w-48 sm:w-60 md:w-40 lg:w-52 h-48 sm:h-60 md:h-40 lg:h-52 bl_round flex items-center justify-center bg-zinc-300">
                    <Image src={simpBg3} alt="" className="" />
                </div>
                <div className="w-full">
                    <h1 className={`${matches ? "text-3xl" : "text-5xl h1_line_height"} fw_700 text-zinc-800`}>Best<br />
                        Deals In
                        <br />
                        Creation</h1>
                    <div className="lg:flex items-center gap-x-4 justify-between w-full mt-8">
                        <p className={`tracking-widest ${matches2 ? "text-base" : "text-xl"} fw_400`}>New Arrival</p>
                        <a href="#productsShop" onClick={handleSmoothScroll} className="border-none outline-none shadow-none mt-3 lg:mt-0 float-right flex items-center gap-x-2 hover:gap-x-3 duration-300 fw_600 text-black text-sm w-max">
                            Shop Now
                            <div className="h-6 w-6 rounded-full bg-TOOLS_PRIMARY duration-300 text-white text-xs flex items-center justify-center">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}