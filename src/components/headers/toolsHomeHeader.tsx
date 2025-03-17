
import headerImg1 from "../../static/cardDummyimg1.jpeg";
import headerImg2 from "../../static/cardDummyimg1.jpeg";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from "@mui/material";
import { handleSmoothScroll } from "@/services/generalService";

const galleryresponsive = {
    superLargeDesktop: {
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

export const ToolsHomeHeader = () => {
    const matches1 = useMediaQuery("(max-width:640px)");
    const matches2 = useMediaQuery("(max-width:540px)");
    const matches3 = useMediaQuery("(max-width:1130px)");
    const matches4 = useMediaQuery("(max-width:1024px)");
    const content = [{ img: headerImg1, title: " Mega Sale Special Offer Up to 60% OFF" }, { img: headerImg2, title: "The Best Power Tools" }];
    return (
        <div className="container2">
            <Carousel
                responsive={galleryresponsive}
                showDots={true}
                renderDotsOutside={false}
                arrows={false}
                autoPlay={false}
                infinite={false}
                draggable={true}
                focusOnSelect={false}
                autoPlaySpeed={1000000}
                itemClass="carousel-item" // Custom class for auto height
            >
                {content.map((item, index) => (
                    <div key={index + 1} className="px-4 lg:px-5">
                        <div
                            className={`w-full py-10 sm:py-5 rounded-2xl flex items-center bg-zinc-100 ${matches2
                                ? "px-3"
                                : matches3 ? "px-5 sm:px-8 md:px-10" : "px-20"
                                }`}
                            style={{ height: matches3 ? matches1 ? "100%" : "500px" : "570px" }}
                        >
                            <div
                                className={`grid grid-cols-12 w-full ${matches2 ? "gap-y-10" : "gap-x-5 md:gap-x-10 lg:gap-x-5"
                                    }`}
                            >
                                {!matches1 && index % 2 !== 0 && <div
                                    className={`col-span-12 sm:col-span-5 md:col-span-6 sm:flex ${matches3 ? "sm:justify-start" : "justify-start"} p-5 sm:p-0`}
                                >
                                    <Image
                                        src={item.img}
                                        alt="headerImg1"
                                        className={`lg:-mb-8 h-min object-cover w-full`}
                                    />
                                </div>}

                                <div
                                    className={`col-span-12 sm:col-span-7 md:col-span-6 flex items-center`}
                                >
                                    <div>
                                        <h1
                                            className={`text-black fw_700 ${matches4 ? "" : "h1_line_height"} ${matches2
                                                ? matches2
                                                    ? "text-xl"
                                                    : "text-2xl"
                                                : "text-3xl sm:text-4xl md:text-4xl lg:text-5xl"
                                                }`}
                                        >
                                            {item.title}
                                        </h1>
                                        <div className={`text-xxs sm:text-sm md:text-base lg:text-lg text-black fw_400 mt-4 sm:mt-8`}>
                                            Thank you for your purchase, we hope you enjoy this theme. You can add/edit this text and images accordign to your requirement.
                                        </div>
                                        <div className="flex tems-center gap-x-5 mt-3 md:mt-5">
                                            <a href="#productsShop"
                                                onClick={handleSmoothScroll}
                                                className={`mt-3 sm:mt-5 rounded-sm bg-TOOLS_PRIMARY text-black ${matches2
                                                    ? "text-xxs w-24 h-8"
                                                    : "text-sm lg:text-base w-32 md:w-36 lg:w-44 py-3 lg:py-4"
                                                    } flex items-center justify-center border-none outline-none shadow-none fw_600 hover:bg-TOOLS_PRIMARY-HOVER duration-300`}
                                            >
                                                Shop Now
                                            </a>
                                            <a href="#trendingOffers"
                                                onClick={handleSmoothScroll}
                                                className={`mt-3 sm:mt-5 rounded-sm bg-zinc-900 text-white ${matches2
                                                    ? "text-xxs w-24 h-8"
                                                    : "text-sm lg:text-base w-32 md:w-36 lg:w-44 py-3 lg:py-4"
                                                    } flex items-center justify-center border-none outline-none shadow-none fw_600 hover:bg-black duration-300`}
                                            >
                                                Explore Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {(matches1 ? true : index % 2 === 0) && <div
                                    className={`col-span-12 sm:col-span-5 md:col-span-6 sm:flex ${matches3 ? "sm:justify-end" : "justify-start"} p-5 sm:p-0`}
                                >
                                    <Image
                                        src={item.img}
                                        alt="headerImg1"
                                        className={`lg:-mb-8 h-full w-full object-cover`}
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
