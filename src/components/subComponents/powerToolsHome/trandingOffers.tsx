import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { toolsProductsData } from "@/data/toolsData";
import Image from "next/image";
import { CustomRating } from "@/components/shared/rating";
import { FC } from "react";
import Link from "next/link";


const galleryresponsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1280 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 1280, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 2,
    },
};

interface TrandingOffersProps {
    title?: string;
}


export const TrandingOffers: FC<TrandingOffersProps> = ({
    title
}): JSX.Element => {
    return (
        <div className="container2 py-4 md:py-6">
            {title && <h1 className="text-2xl px-3 fw_700 text-zinc-800">{title}</h1>}
            <div className={`${title ? "mt-6" : ""} px-2`}>
                <Carousel
                    responsive={galleryresponsive}
                    arrows={true}
                    autoPlay={false}
                    infinite={false}
                    draggable={true}
                    focusOnSelect={false}
                    autoPlaySpeed={1000000}
                    customLeftArrow={
                        <button className="text-xxs sm:text-xs bg-TOOLS_PRIMARY text-white duration-300 absolute top-1/2 transform -translate-y-2/3 -mt-3 left-1 lg:left-0 z-20 h-6 w-6 sm:h-8 sm:w-8 rounded-full drop-shadow-sm">
                            <FontAwesomeIcon icon={faChevronLeft} style={{ margin: "2px 0px 0px 1px" }} />
                        </button>
                    }
                    customRightArrow={
                        <button className="text-xxs sm:text-xs bg-TOOLS_PRIMARY text-white duration-300 absolute top-1/2 transform -translate-y-2/3 -mt-3 right-1 lg:right-0 z-20 h-6 w-6 sm:h-8 sm:w-8 rounded-full drop-shadow-sm">
                            <FontAwesomeIcon icon={faChevronRight} style={{ margin: "2px 0px 0px 1px" }} />
                        </button>
                    }
                    itemClass="carousel-item" // Custom class for auto height
                >
                    {toolsProductsData.map((product, index) => (
                        <div key={index + 1} className="duration-300 px-1 sm:px-2 overflow-hidden">
                            <div className="bg-zinc-100 overflow-hidden relative">
                                {product.tag && (
                                    <div className="h-5 uppercase fw_600 flex items-center justify-center px-3 bg-TOOLS_PRIMARY text-white z-30 text-xxs absolute top-2 left-2">
                                        {product.tag}
                                    </div>
                                )}
                                <Link href={`/tricart-tools/product${product.link}`} className="border-none outline-none shdaow-none">
                                    <Image src={product.img} alt={"product img"} className="hover:scale-110 duration-1000 h-72 object-contain w-full" />
                                </Link>
                            </div>
                            <div className="mt-2">
                                <p className="text-xxs text-zinc-400 fw_400 sm_one_lines_elipsis">{product.categories}</p>
                                <Link href={`/tricart-tools/product${product.link}`} className={`border-none outline-none shdaow-none text-black hover:text-TOOLS_PRIMARY text-sm sm:text-base fw_400 my-1 two_lines_elipsis`}>{product.label}</Link>
                                <CustomRating rating={product.rating} color="text-zinc-400" />
                                <p className="text-sm sm:text-lg fw_600 mt-2 text-zinc-700">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}