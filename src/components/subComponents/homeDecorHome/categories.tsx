import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { CompHeading } from "@/components/shared/compHeading";
import Image from "next/image";
import { homeDecorMainCategories } from "@/data/homeDecorData";
import { stringToSlug } from "@/services/generalService";
import Link from "next/link";


const galleryresponsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1380 },
        items: 6,
    },
    desktop: {
        breakpoint: { max: 1380, min: 1170 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1170, min: 767 },
        items: 4,
    },
    mobile: {
        breakpoint: { max: 767, min: 0 },
        items: 2,
    },
};
export const Categories = () => {
    return (
        <div className="flex flex-col gap-y-8 pt-8 md:pt-14 ">
            <div className="px-3 m:px-5 lg:px-10">
                <CompHeading title="Shop By Category" rightContent={null} justify="justify-start" headingSize="text-xl" />
            </div>
            <div className="px-1 m:px-3 lg:px-8">
                <Carousel
                    responsive={galleryresponsive}
                    arrows={true}
                    autoPlay={false}
                    infinite={false}
                    draggable={true}
                    focusOnSelect={false}
                    autoPlaySpeed={1000000}
                    customLeftArrow={
                        <button className="text-xxs sm:text-xs bg-white hover:bg-DECOR_PRIMARY text-black hover:text-white duration-300 absolute top-1/2 transform -translate-y-2/3 left-5 z-20 h-6 w-6 sm:h-10 sm:w-10 rounded-full drop-shadow-md">
                            <FontAwesomeIcon icon={faChevronLeft} style={{ margin: "2px 0px 0px 1px" }} />
                        </button>
                    }
                    customRightArrow={
                        <button className="text-xxs sm:text-xs bg-white hover:bg-DECOR_PRIMARY text-black hover:text-white duration-300 absolute top-1/2 transform -translate-y-2/3 right-5 z-20 h-6 w-6 sm:h-10 sm:w-10 rounded-full drop-shadow-md">
                            <FontAwesomeIcon icon={faChevronRight} style={{ margin: "2px 0px 0px 1px" }} />
                        </button>
                    }
                    itemClass="carousel-item" // Custom class for auto height
                >
                    {homeDecorMainCategories.map((category, index) => (
                        <div className="mx-2 my-2 h-full rounded-sm" key={index + 1}>
                            <Link href={`/tricart-home-decore/category/${stringToSlug(category.title)}`} className="p-3 bg-DECOR_PRIMARY-LIGHT h-full border-none outline-none shadow-none flex flex-col overflow-hidden group cursor-pointer">
                                <Image src={category.img} alt="category img" className="w-full h-full object-cover group-hover:scale-110 duration-1000" />
                                <button className=" f_400 text-DECOR_PRIMARY-HOVER rounded-full h-8 sm:h-10 text-center uppercase text-xs sm:text-sm fw_600">{category.title}</button>
                            </Link>
                        </div>
                    ))}

                </Carousel>
            </div>
            <div className="px-3 sm:px-5 lg:px-10 mt-8 md:mt-10">
                <hr />
            </div>
        </div>
    )
}