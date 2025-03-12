import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { ProductCard3 } from "@/components/productCards/productCard3";
import { CompHeading } from "@/components/shared/compHeading";
import { FC } from "react";
import { productType2 } from "@/Types/productPropsTypes";


const galleryresponsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1280 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 1280, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
    },
}

interface NewArrivalsProps {
    title: string
    data: productType2[]
}

export const NewArrivals: FC<NewArrivalsProps> = ({
    title, data
}): JSX.Element => {
    return (
        <div className="flex flex-col gap-y-8 pt-10 md:pt-14">
            <div className="px-3 m:px-5 lg:px-10">
                <CompHeading title={title} rightContent={null} justify="justify-start" headingSize="text-xl" />
            </div>
            <div className="px-3 lg:px-8">
                <Carousel
                    responsive={galleryresponsive}
                    arrows={true}
                    autoPlay={false}
                    infinite={false}
                    draggable={true}
                    focusOnSelect={false}
                    autoPlaySpeed={1000000}
                    customLeftArrow={
                        <button className="text-xxs sm:text-xs bg-white hover:bg-DECOR_PRIMARY text-DECOR_PRIMARY hover:text-white duration-300 absolute top-1/2 transform -translate-y-2/3 -mt-3 left-5 z-20 h-6 w-6 sm:h-10 sm:w-10 rounded-full drop-shadow-md">
                            <FontAwesomeIcon icon={faChevronLeft} style={{ margin: "2px 0px 0px 1px" }} />
                        </button>
                    }
                    customRightArrow={
                        <button className="text-xxs sm:text-xs bg-white hover:bg-DECOR_PRIMARY text-DECOR_PRIMARY hover:text-white duration-300 absolute top-1/2 transform -translate-y-2/3 -mt-3 right-5 z-20 h-6 w-6 sm:h-10 sm:w-10 rounded-full drop-shadow-md">
                            <FontAwesomeIcon icon={faChevronRight} style={{ margin: "2px 0px 0px 1px" }} />
                        </button>
                    }
                    itemClass="carousel-item" // Custom class for auto height
                >
                    {data.map((product, index) => (
                        <ProductCard3 key={index + 1} product={product} />
                    ))}

                </Carousel>
            </div>
            <div className="px-3 sm:px-5 lg:px-10 mt-8 md:mt-10">
                <hr />
            </div>
        </div>
    )
}