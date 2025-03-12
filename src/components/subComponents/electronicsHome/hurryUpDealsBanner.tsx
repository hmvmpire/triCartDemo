import { CompHeading2 } from "@/components/shared/CompHeading2"
import dealBg1 from "../../../static/appliances.jpg";
import Image from "next/image";
import fridge3 from "../../../static/fridge3.png";
import deal2 from "../../../static/oven1.jpg";
import { useMediaQuery } from "@mui/material";
import { FC } from "react";
import { handleSmoothScroll } from "@/services/generalService";


interface HurryUpDealsBannerProps {
    showHeading?: boolean
}


export const HurryUpDealsBanner: FC<HurryUpDealsBannerProps> = ({
    showHeading
}): JSX.Element => {
    const matches2 = useMediaQuery("(max-width:1130px)");
    return (
        <div className="container2">
            {showHeading && <div className="px-3 sm:px-8">
                <CompHeading2 title="Hurry Up Deals" rightContent={null} />
            </div>}
            <div className="px-2 sm:px-4 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0 md:gap-x-4">
                    <div
                        className={`bg-cover bg-no-repeat bg-center h-52 sm:h-80 rounded-lg ${matches2 ? "px-4 sm:px-16 md:px-4 lg:px-8" : "px-16"
                            } flex items-center justify-between gap-x-5`}
                        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${dealBg1.src})` }}
                    >
                        <div className="flex flex-col gap-y-6">
                            <p className="text-xl sm:text-4xl md:text-3xl lg:text-4xl fw_700 text-white">
                                Refrigerator
                                <br /> Experience
                            </p>
                            <a href="#bundleProducts1" onClick={handleSmoothScroll} className="border-none outline-none shadow-none flex items-center justify-center text-ELECTRONICS_PRIMARY bg-white hover:bg-ELECTRONICS_PRIMARY-HOVER hover:text-white duration-300 rounded-full text-xs sm:text-sm w-24 sm:w-28 h-8 sm:h-10 fw_600">
                                Shop Now
                            </a>
                        </div>
                        <Image
                            src={fridge3}
                            alt="fridge3"
                            className="w-44 sm:w-52 md:w-60 object-contain"
                        />
                    </div>
                    <div
                        className={`bg-ELECTRONICS_PRIMARY-LIGHT h-48 sm:h-80 rounded-lg ${matches2 ? "px-4 sm:px-16 md:px-4 lg:px-8" : "px-16"
                            } flex items-center justify-between gap-x-5`}
                    >
                        <div className="flex flex-col gap-y-3 sm:gap-y-4">
                            <p className="text-xl sm:text-4xl md:text-3xl lg:text-4xl fw_700 text-black">
                                New 3 in 1 <br /> Electric
                                <br className="hidden sm:block" /> Oven
                            </p>
                            <p className="text-zinc-700 text-xs sm:text-sm hidden sm:block">
                                Save up to 50% off on new arrivals.
                            </p>
                            <a href="#featuredProducts1" onClick={handleSmoothScroll} className="border-none outline-none shadow-none flex items-center justify-center text-ELECTRONICS_PRIMARY bg-white hover:bg-ELECTRONICS_PRIMARY-HOVER hover:text-white duration-300 rounded-full text-xs sm:text-sm w-24 sm:w-28 h-8 sm:h-10 fw_600">
                                Shop Now
                            </a>
                        </div>
                        <Image
                            src={deal2}
                            alt="deal2"
                            className="w-28 sm:w-48 md:w-60 object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}