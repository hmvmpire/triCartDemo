import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "@mui/material";
import { header1CarouselData } from "@/data/carouselsData";
import { Header1DataTypes } from "@/Types/carouselsDataTypes";
import { handleSmoothScroll } from "@/services/generalService";

const galleryresponsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1280 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

export const ElectronicsHomeHeader = () => {
  const matches1 = useMediaQuery("(max-width:540px)");
  const matches2 = useMediaQuery("(max-width:430px)");
  const matches3 = useMediaQuery("(max-width:767px)");
  return (
    <div className="container2">
      <Carousel
        responsive={galleryresponsive}
        arrows={true}
        autoPlay={false}
        infinite={true}
        draggable={true}
        focusOnSelect={false}
        autoPlaySpeed={1000000}
        customLeftArrow={
          <button className="text-base lg:text-xl bg-white hover:bg-ELECTRONICS_PRIMARY hover:text-white duration-300 absolute top-1/2 transform -translate-y-2/3 sm:-mt-10 left-1 lg:left-0 z-20 h-8 lg:h-12 w-8 lg:w-12 rounded-full border drop-shadow-sm">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        }
        customRightArrow={
          <button className="text-base lg:text-xl bg-white hover:bg-ELECTRONICS_PRIMARY hover:text-white duration-300 absolute top-1/2 transform -translate-y-2/3 sm:-mt-10 right-1 lg:right-0 z-20 h-8 lg:h-12 w-8 lg:w-12 rounded-full border drop-shadow-sm">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        }
        itemClass="carousel-item" // Custom class for auto height
      >
        {header1CarouselData.map((item: Header1DataTypes, index: number) => (
          <div className="pb-10 px-4 lg:px-5" key={index + 1}>
            <div
              className={`w-full rounded-2xl bg-white ${matches2
                ? "px-3 py-5"
                : "px-5 sm:px-10 lg:px-20 py-10"
                }`}
            >
              <div
                className={`grid grid-cols-12 ${matches2 ? "gap-x-3" : "gap-x-5 sm:gap-x-10 md:gap-x-5"
                  }`}
              >
                {(matches2 ? true : index === 1) && <div
                  className={`${matches2 ? "col-span-12" : "col-span-5 sm:col-span-6"
                    } sm:flex sm:justify-end md:justify-start p-5 sm:px-0 sm:py-0`}
                >
                  <Image
                    src={item.img}
                    alt="headerImg1"
                    style={{ maxHeight: "500px", height: matches2 ? "300px" : matches3? "300px" : "450px" }}
                    className="mb-8 w-auto sm:w-60 md:w-full object-contain"
                  />
                </div>}
                <div
                  className={`${matches2 ? "col-span-12" : "col-span-7 sm:col-span-6"
                    } flex items-center`}
                >
                  <div>
                    <h1
                      className={`text-black fw_700 ${matches1
                        ? matches2
                          ? "text-xl"
                          : "text-2xl"
                        : "text-2xl sm:text-4xl md:text-3xl lg:text-4xl 2xl:text-5xl"
                        }`}
                    >
                      {item.title}
                    </h1>
                    <p className="text-zinc-500 fw_400 mt-5 text-sm lg:text-base hidden md:block">
                      {item.desc}
                    </p>
                    <a href="#hurryUpDeals" onClick={handleSmoothScroll}
                      className="border-none outline-none shadow-none"
                    >
                      <p
                        className={`mt-3 sm:mt-5 bg-ELECTRONICS_PRIMARY text-white rounded-full ${matches2
                          ? "text-xs w-24 h-8"
                          : "text-sm md:text-base lg:text-lg w-32 md:w-36 lg:w-40 h-10 lg:h-12"
                          } fw_600 hover:bg-ELECTRONICS_PRIMARY-HOVER duration-300 flex items-center justify-center`}
                      >Shop Now</p>
                    </a>
                  </div>
                </div>
                {index === 0 && !matches2 && <div
                  className={`${matches2 ? "col-span-12" : "col-span-5 sm:col-span-6"
                    } sm:flex sm:justify-end md:justify-start px-5 sm:p-0`}
                >
                  <Image
                    src={item.img}
                    alt="headerImg1"
                    style={{ maxHeight: "500px",  height: matches2 ? "300px" : matches3? "300px" : "450px" }}
                    className="mb-8 w-auto sm:w-60 md:w-full object-contain"
                  />
                </div>}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
