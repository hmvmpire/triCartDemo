import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { CompHeading } from "@/components/shared/compHeading";
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
export const Home3Brands = () => {
    return (
        <div className="flex flex-col gap-y-8 pt-8 md:pt-14">
            <div className="px-3 m:px-5 lg:px-10">
                <CompHeading title="Shop By Brand" rightContent={null} justify="justify-start" headingSize="text-xl" />
            </div>
            <div className="px-1 m:px-3 lg:px-8">
                <Carousel
                    responsive={galleryresponsive}
                    arrows={false}
                    showDots={true}
                    autoPlay={false}
                    infinite={false}
                    draggable={true}
                    focusOnSelect={false}
                    autoPlaySpeed={1000000}
                    customLeftArrow={
                        <button className="text-xxs sm:text-xs bg-white hover:bg-DECOR_PRIMARY-HOVER text-DECOR_PRIMARY-HOVER hover:text-white duration-300 absolute top-1/2 transform -translate-y-2/3 left-5 z-20 h-6 w-6 sm:h-10 sm:w-10 rounded-full drop-shadow-md">
                            <FontAwesomeIcon icon={faChevronLeft} style={{ margin: "2px 0px 0px 1px" }} />
                        </button>
                    }
                    customRightArrow={
                        <button className="text-xxs sm:text-xs bg-white hover:bg-DECOR_PRIMARY-HOVER text-DECOR_PRIMARY-HOVER hover:text-white duration-300 absolute top-1/2 transform -translate-y-2/3 right-5 z-20 h-6 w-6 sm:h-10 sm:w-10 rounded-full drop-shadow-md">
                            <FontAwesomeIcon icon={faChevronRight} style={{ margin: "2px 0px 0px 1px" }} />
                        </button>
                    }
                    itemClass="carousel-item" // Custom class for auto height
                >
                    {brandsData.map((item, index) => (
                        <div className="px-1 sm:px-2 lg:px-2 pb-8" key={index + 1}>
                            <div className="relative overflow-hidden group bg-DECOR_PRIMARY-LIGHT py-14 ">
                                <div className='flex flex-col gap-y-3 cursor-default'>
                                    <FontAwesomeIcon icon={item.icon} className='text-4xl text-DECOR_PRIMARY' />
                                    <p className='text-center text-DECOR_PRIMARY text-sm fw_400'>{item.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </Carousel>
            </div>
            <div className="px-3 sm:px-5 lg:px-10 mt-4 md:mt-6">
                <hr />
            </div>
        </div>
    )
}