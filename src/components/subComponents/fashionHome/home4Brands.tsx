import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { brandsData } from "@/data/brandsData";


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
export const Home4Brands = () => {
    return (
        <div className="container3 py-10">
            <Carousel
                responsive={galleryresponsive}
                arrows={false}
                showDots={false}
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
                {brandsData.map((item, index) => (
                    <div className="px-1 sm:px-2" key={index + 1}>
                        <div className='flex flex-col gap-y-3 cursor-default'>
                            <FontAwesomeIcon icon={item.icon} className='text-2xl text-black' />
                            <p className='text-center text-black text-sm fw_400'>{item.title}</p>
                        </div>
                    </div>
                ))}

            </Carousel>
        </div>
    )
}