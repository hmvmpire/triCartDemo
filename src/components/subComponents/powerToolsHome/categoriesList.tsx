import { mainCatgories } from "@/data/toolsData"
import { handleSmoothScroll } from "@/services/generalService"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMediaQuery } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

export const CategoriesList = () => {
    const matches1 = useMediaQuery("(max-width:1480px)");

    return (
        <div className={`container1 grid sm:gap-x-4 ${matches1 ? "grid-cols-1 sm:grid-cols-2 gap-y-4" :"grid-cols-4"}`}>
            {mainCatgories.map((item, index) => (
                <div key={index + 1} className="bg-zinc-100 rounded-xl flex items-center gap-x-4 px-4 py-2">
                    <Image src={item.img} alt="category img" className="object-contain max-w-28 w-28" />
                    <div className="">
                        <p className="text-lg leading-6">{item.title}</p>
                        <a href="#trendingOffers" onClick={handleSmoothScroll} className="border-none outline-none shadow-none mt-3 flex items-center gap-x-2 group fw_600 text-black text-sm w-max">
                            Shop Now
                            <div className="h-5 w-5 rounded-full bg-TOOLS_PRIMARY group-hover:ml-2 duration-300 text-black text-xxs flex items-center justify-center">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}