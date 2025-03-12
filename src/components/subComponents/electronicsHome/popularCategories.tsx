import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { CompHeading2 } from "../../shared/CompHeading2";
import Link from "next/link";
import { categoriesData } from "@/data/electronicsData";

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

export const PopularCategories = () => {
  return (
    <div className="container2">
      <div className="px-3 md:px-6">
        <CompHeading2 title="Popular Categories" rightContent={null} justify="justify-start" />
      </div>
      <div className="mt-5 sm:mt-8 px-2 md:px-3">
        <Carousel
          responsive={galleryresponsive}
          arrows={true}
          autoPlay={false}
          infinite={false}
          draggable={true}
          focusOnSelect={false}
          autoPlaySpeed={1000000}
          customLeftArrow={
            <button className="text-base lg:text-xl bg-white hover:bg-ELECTRONICS_PRIMARY hover:text-white duration-300 absolute top-1/2 transform -translate-y-2/3 -mt-3 left-1 lg:left-0 z-20 h-8 lg:h-12 w-8 lg:w-12 rounded-full border drop-shadow-sm">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          }
          customRightArrow={
            <button className="text-base lg:text-xl bg-white hover:bg-ELECTRONICS_PRIMARY hover:text-white duration-300 absolute top-1/2 transform -translate-y-2/3 -mt-3 right-1 lg:right-0 z-20 h-8 lg:h-12 w-8 lg:w-12 rounded-full border drop-shadow-sm">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          }
          itemClass="carousel-item" // Custom class for auto height
        >
          {categoriesData.map((category, index) => (
            <div key={index + 1} className="px-1 md:px-3">
              <div className="h-60 flex items-center justify-center bg-white rounded-md overflow-hidden cursor-pointer group">
                <Link href={`/tricart-electronics/category/${category.link}`} className="border-none outline-none shadow-none">
                  <Image src={category.img} alt={category.label} className="group-hover:scale-110 duration-1000 object-contain object-center h-52" />
                </Link>
              </div>
              <div className="flex items-center flex-col mt-3">
                <Link href={`/tricart-electronics/category/${category.link}`} className="border-none outline-none shadow-none text-base sm:text-lg fw_600 text-black hover:text-ELECTRONICS_PRIMARY-HOVER duration-300 text-center">
                  {category.label}
                </Link>
                <p className="text-sm">{category.products.length} products</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
