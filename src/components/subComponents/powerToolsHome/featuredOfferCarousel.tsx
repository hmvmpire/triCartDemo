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


const galleryresponsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1280 },
        items: 1,
    },
    desktop: {
        breakpoint: { max: 1280, min: 800 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 800, min: 640 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
    },
};

export const FeaturedOfferCarousel = () => {
    return (
        <div className="p-2 border-2 border-TOOLS_PRIMARY rounded-xl">
            <Carousel
                responsive={galleryresponsive}
                arrows={true}
                autoPlay={false}
                infinite={false}
                draggable={true}
                focusOnSelect={false}
                autoPlaySpeed={1000000}
                customLeftArrow={
                    <button className="text-xs bg-TOOLS_PRIMARY text-white duration-300 absolute top-1/2 transform -translate-y-2/3 -mt-3 left-1 lg:-left-0 z-20 h-8 w-8 rounded-full border drop-shadow-sm">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                }
                customRightArrow={
                    <button className="text-xs bg-TOOLS_PRIMARY text-white duration-300 absolute top-1/2 transform -translate-y-2/3 -mt-3 right-1 lg:-right-0 z-20 h-8 w-8 rounded-full border drop-shadow-sm">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                }
                itemClass="carousel-item" // Custom class for auto height
            >
                {toolsProductsData.map((product, index) => (
                    <div key={index + 1} className="duration-300 p-2 overflow-hidden">
                        <div className="bg-zinc-100 overflow-hidden relative">
                            {product.tag && (
                                <div className="h-5 uppercase fw_600 flex items-center justify-center px-3 bg-lime-500 text-white z-30 text-xxs absolute top-2 left-2">
                                    {product.tag}
                                </div>
                            )}
                            <Image src={product.img} alt={"product img"} className="hover:scale-110 duration-1000 h-72 object-cover w-full" />
                        </div>
                        <div className="mt-2">
                            <p className="text-xxs text-zinc-400 fw_400">{product.categories}</p>
                            <h2 className="text-black text-base fw_400 my-1">{product.label}</h2>
                            <CustomRating rating={product.rating} color="text-zinc-400" />
                            <p className="text-lg fw_600 mt-2">{product.price}</p>
                        </div>
                    </div>
                ))}

            </Carousel>
        </div>
    )
}