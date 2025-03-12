import { SubCategories } from "@/data/toolsData"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { stringToSlug } from "@/services/generalService";
import { fashionCategories } from "@/data/fashionData";


const galleryresponsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1380 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 1380, min: 1170 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1170, min: 767 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 767, min: 0 },
        items: 2,
    },
};

export const FeaturedCategories = () => {
    return (
        <div id="categories4" className="container3">
            <div className="pt-16 pb-16 md:pb-20 border-b">
                <div className="flex flex-col items-center">
                    <h1 className="fw_700 text-zinc-900 text-center text-2xl uppercase">Browse Categories</h1>
                    <p className="text-sm text-zinc-500 fw_400 text-center">Amazing categories with only top fashion products
                    </p>
                </div>
                <div className="mt-8">
                    <Carousel
                        responsive={galleryresponsive}
                        arrows={true}
                        autoPlay={false}
                        infinite={false}
                        draggable={true}
                        focusOnSelect={false}
                        autoPlaySpeed={1000000}
                        customLeftArrow={
                            <button className="text-xxs sm:text-xs bg-white hover:bg-black text-black hover:text-white duration-300 absolute top-1/2 transform -translate-y-2/3 left-5 z-20 h-6 w-6 sm:h-10 sm:w-10 rounded-full drop-shadow-md">
                                <FontAwesomeIcon icon={faChevronLeft} style={{ margin: "2px 0px 0px 1px" }} />
                            </button>
                        }
                        customRightArrow={
                            <button className="text-xxs sm:text-xs bg-white hover:bg-black text-black hover:text-white duration-300 absolute top-1/2 transform -translate-y-2/3 right-5 z-20 h-6 w-6 sm:h-10 sm:w-10 rounded-full drop-shadow-md">
                                <FontAwesomeIcon icon={faChevronRight} style={{ margin: "2px 0px 0px 1px" }} />
                            </button>
                        }
                        itemClass="carousel-item" // Custom class for auto height
                    >
                        {fashionCategories.map((category, index) => (
                            <div className="px-1 sm:px-2" key={index + 1}>
                                <Link href={category.link} className="relative border-none outline-none shadow-none">
                                    <div className="overflow-hidden w-full h-52 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${category.img.src})` }}>
                                    </div>
                                    <button className="text-white duration-300 fw_400 bg-fashionPrimary drop-shadow-md h-8 sm:h-10 w-full uppercase text-xxs sm:text-xs mt-3 hover:scale-95 duration-300">{category.label}</button>
                                </Link>
                            </div>
                        ))}

                    </Carousel>
                </div>
            </div>
        </div>
    )
}