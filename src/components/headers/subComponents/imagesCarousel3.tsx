import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Image, { StaticImageData } from "next/image";
import { useRef, useState } from "react";

interface ResponsiveType {
    [key: string]: {
        breakpoint: {
            max: number;
            min: number;
        };
        items: number;
    };
}
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


const galleryresponsive2 = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1280 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 1280, min: 767 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 767, min: 640 },
        items: 4,
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 3,
    },
};


interface ImageCarousel3Props {
    imagesData: Array<StaticImageData>;
    bgColor?: string
}

export const ImagesCarousel3: React.FC<ImageCarousel3Props> = ({
    imagesData, bgColor
}): JSX.Element => {
    const [myIndex, setMyIndex] = useState(0)
    const carouselRef = useRef<any>(null); // Ref for the carousel
    const detailPage2 = window.location.pathname.includes("/tricart-tools/product")
    const handleThumbnailClick = (index: number) => {
        if (carouselRef.current) {
            setMyIndex(index)
            carouselRef.current.goToSlide(index); // Navigate to the selected slide
        }
    };

    const content = (responsive: ResponsiveType) => <Carousel
        ref={carouselRef} // Attach the ref
        responsive={responsive}
        arrows={true}
        autoPlay={false}
        infinite={false}
        draggable={true}
        focusOnSelect={false}
        autoPlaySpeed={1000000}
        customLeftArrow={
            <button className="text-base lg:text-2xl duration-300 absolute top-1/2 transform -translate-y-2/3 left-1 lg:left-0 z-20 h-8 lg:h-12 w-8 lg:w-12 rounded-full">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
        }
        customRightArrow={
            <button className="text-base lg:text-2xl duration-300 absolute top-1/2 transform -translate-y-2/3 right-1 lg:right-0 z-20 h-8 lg:h-12 w-8 lg:w-12 rounded-full">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        }
        itemClass="carousel-item" // Custom class for auto height
    >
        {imagesData.map((img, index) => (
            <div className="">
                <Image src={img} alt="img" key={index + 1} style={{ height: detailPage2? "400px" : "600px" }} className="w-full object-cover rounded-lg" />
            </div>
        ))}
    </Carousel>

    const content2 = (responsive: ResponsiveType) => <Carousel
        responsive={responsive}
        arrows={true}
        autoPlay={false}
        infinite={false}
        draggable={true}
        focusOnSelect={false}
        autoPlaySpeed={1000000}
        customLeftArrow={
            <button className="text-base lg:text-2xl duration-300 absolute top-1/2 transform -translate-y-2/3 left-1 lg:left-0 z-20 h-8 lg:h-12 w-8 lg:w-12 rounded-full">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
        }
        customRightArrow={
            <button className="text-base lg:text-2xl duration-300 absolute top-1/2 transform -translate-y-2/3 right-1 lg:right-0 z-20 h-8 lg:h-12 w-8 lg:w-12 rounded-full">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        }
        itemClass="carousel-item" // Custom class for auto height
    >
        {imagesData.map((img, index) => (
            <div className="pr-2 py-2 cursor-pointer" key={index + 1}>
                <div className={`${bgColor ? bgColor : "bg-white"} rounded-md overflow-hidden border-2 border-black ${myIndex === index ? "border-opacity-100" : "border-opacity-10"}`}>
                    <Image src={img} alt="img" onClick={() => handleThumbnailClick(index)} className={`w-full h-24 object-cover`} />
                </div>
            </div>

        ))}
    </Carousel>
    return (
        <div className="">
            <div className={`${bgColor ? bgColor : "bg-white"} rounded-md border`}>
                {content(galleryresponsive)}
            </div>
            <div >
                {content2(galleryresponsive2)}
            </div>
        </div>
    )
}