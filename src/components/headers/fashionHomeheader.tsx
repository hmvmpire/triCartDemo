
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons/faArrowRightLong";
import { handleSmoothScroll } from "@/services/generalService";


export const FashionHomeheader = () => {
    const matches1 = useMediaQuery("(max-width:540px)");
    const matches4 = useMediaQuery("(max-width:1024px)");
    return (
        <div className="relative">
            {/* <div className="absolute top-0 left-0 right-0 z-30">
                <Navbar4 />
            </div> */}
            <div style={{height: "600px"}} className="relative w-full overflow-hidden">
                {/* Video element */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src="/header4BgVideo.mp4" type="video/mp4" />
                </video>

                {/* Overlay (optional) */}
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

                {/* Content (optional) */}
                <div className="absolute w-full h-full flex items-center justify-center">
                    <div className="container3">
                        <div className="">
                            <h1
                                className={`fw_400 text-white ${matches4 ? "" : "h1_line_height"} ${matches1
                                    ? "text-lg"
                                    : "text-xl sm:text-2xl lg:text-3xl xl:text-5xl"
                                    }`}
                            >
                                New Season Dresses
                            </h1>
                            <h1 className="flex flex-col text-5xl lg:text-6xl xl:text-9xl fw_700 text-white mt-3">
                                <span className="text-base">Up to</span>
                                20% OFF
                            </h1>
                            <div className="flex flex-col lg:flex-row lg:items-center gap-y-3 lg:gap-y-0 lg:gap-x-5 mt-3 md:mt-5">
                                <p className="uppercase fw_400 text-base text-white">Starting at <span className="text-3xl lg:text-4xl fw_700 text-white">$19.99</span></p>
                                <a href="#categories4"
                                    onClick={handleSmoothScroll}
                                    className={`border-none outline-none shadow-none bg-white text-black py-5 w-56 fw_600 justify-center hover:bg-zinc-zinc-200 duration-300 uppercase flex items-center gap-x-5 hover:gap-x-12 duration-300`}
                                >
                                    Shop Now
                                    <FontAwesomeIcon icon={faArrowRightLong} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
