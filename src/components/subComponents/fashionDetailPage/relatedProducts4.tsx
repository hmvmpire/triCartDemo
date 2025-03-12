import { ProductCard4 } from "@/components/productCards/productCard4"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { productType2 } from "@/Types/productPropsTypes";
import { FC } from "react";


const galleryresponsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1280 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 1280, min: 800 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 800, min: 640 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
    },
}


interface RelatedProducts4Props {
    data: productType2[]
}

export const RelatedProducts4: FC<RelatedProducts4Props> = ({
    data
}): JSX.Element => {
    return (data &&
        <div className="container3">
            <div className="pt-16 pb-16 md:pb-20">
                <div className="relative">
                    <h1 className="fw_600 mb-4 text-zinc-900 text-base sm:text-lg uppercase absolute top-0 z-20 left-0 sm:left-1 md:left-2">Top Rated Products</h1>
                    <Carousel
                        responsive={galleryresponsive}
                        arrows={true}
                        autoPlay={false}
                        infinite={false}
                        draggable={true}
                        focusOnSelect={false}
                        autoPlaySpeed={1000000}
                        renderArrowsWhenDisabled={true}
                        customLeftArrow={
                            <button style={{ paddingTop: "1px" }} className="text-xs bg-white hover:bg-fashionPrimary hover:text-white duration-300 absolute top-0 right-8 md:right-10 z-20 h-6 w-6 rounded-full border drop-shadow-sm">
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                        }
                        customRightArrow={
                            <button style={{ paddingTop: "1px" }} className="text-xs bg-white hover:bg-fashionPrimary hover:text-white duration-300 absolute top-0 right-0 sm:right-1 md:right-2 z-20 h-6 w-6 rounded-full border drop-shadow-sm">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        }
                        itemClass="carousel-item" // Custom class for auto height
                    >

                        {data.map((product, index) => (
                            <div key={index + 1} className="sm:px-1 md:px-2 pt-10">
                                <ProductCard4 product={product} />
                            </div>
                        ))}
                    </Carousel>

                </div>

            </div>
        </div>
    )
}