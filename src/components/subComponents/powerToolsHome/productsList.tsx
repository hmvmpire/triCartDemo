import { ProductCard2 } from "@/components/productCards/productCard2"
import { toolsProductsData } from "@/data/toolsData"
import { FeaturedOfferCarousel } from "./featuredOfferCarousel"
import Image from "next/image"
import headerImg2 from "../../../static/header2Img1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "@mui/material";

export const ProductsList = () => {
    const matches = useMediaQuery("(max-width:500px)");

    return (
        <div id="productsShop" className={`${matches? "px-2" : "container1"} grid grid-cols-12 gap-y-10 lg:gap-y-0 lg:gap-x-4`}>
            <div className="col-span-12 lg:col-span-9 grid grid-cols-2 sm:grid-cols-3">
                {toolsProductsData.map((product, index) => (
                    <ProductCard2 product={product} key={index + 1} />
                ))}
            </div>
            <div className="col-span-12 lg:col-span-3 flex flex-col gap-y-8">
                <div className="flex flex-col gap-y-5">
                    <div>
                        <h2 className="text-lg fw_700 text-black">Featured Offer</h2>
                        <p className="text-base fw_400">Hurry Up, ends soon.</p>
                    </div>
                    <FeaturedOfferCarousel />
                </div>
                <div className="bg-zinc-100 rounded-xl pt-6 pb-10 px-3 flex flex-col items-center gap-y-5">
                    <Image src={headerImg2} alt="" className="w-40" />
                    <h2 className="text-2xl fw_400 text-black">Battery <span className="fw_600 text-black">Drill X3</span></h2>
                    <button className="flex items-center gap-x-2 hover:gap-x-3 duration-300 fw_600 text-black text-sm w-max">
                        Shop Now
                        <div className="h-5 w-5 rounded-full bg-TOOLS_PRIMARY duration-300 text-black text-xxs flex items-center justify-center">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </button>
                </div>
            </div>

        </div>
    )
}