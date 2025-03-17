import Image from "next/image"
import diningH3 from '../../../static/cardDummyimg1.jpeg'
import { CompHeading } from "@/components/shared/compHeading"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons/faBagShopping";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { DetailsModal } from "@/components/productCards/subComponents/detailsModal";
import React from "react";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons/faArrowRightLong";
import { CustomRating } from "@/components/shared/rating";
import { homeDecorFeaturedProducts } from "@/data/homeDecorData";



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
}

export const Collection = () => {
    const [show, setShow] = React.useState(false);

    return (
        <div className="px-3 sm:px-5 lg:px-10">
            <div className="py-14 border-b">
                <CompHeading title="Shop By Collection" rightContent={null} justify="justify-start" headingSize="text-xl" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-0 md:gap-x-5 mt-8">
                    <div>
                        <Image src={diningH3} alt="diningH3" className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-zinc-100  pt-4 pb-14 md:py-8 relative z-40">
                        <Carousel
                            responsive={galleryresponsive}
                            arrows={true}
                            autoPlay={false}
                            infinite={false}
                            draggable={false}
                            focusOnSelect={false}
                            customLeftArrow={
                                <button className="text-xxs sm:text-xs bg-white hover:bg-DECOR_PRIMARY-HOVER text-DECOR_PRIMARY hover:text-white duration-300 absolute top-1/2 transform -translate-y-2/3 -mt-3 left-2 sm:left-5 z-20 h-8 w-8 sm:h-10 sm:w-10 rounded-full drop-shadow-md">
                                    <FontAwesomeIcon icon={faChevronLeft} style={{ margin: "2px 0px 0px 1px" }} />
                                </button>
                            }
                            customRightArrow={
                                <button className="text-xxs sm:text-xs bg-white hover:bg-DECOR_PRIMARY-HOVER text-DECOR_PRIMARY hover:text-white duration-300 absolute top-1/2 transform -translate-y-2/3 -mt-3 right-2 sm:right-5 z-20 h-8 w-8 sm:h-10 sm:w-10 rounded-full drop-shadow-md">
                                    <FontAwesomeIcon icon={faChevronRight} style={{ margin: "2px 0px 0px 1px" }} />
                                </button>
                            }
                        >
                            {homeDecorFeaturedProducts.map((product, index) => (
                                <div key={index + 1} className="flex flex-col items-center group">
                                    <div className="bg-zinc-100 overflow-hidden relative">
                                        <button className="text-white flex items-center justify-center gap-x-3 z-30 text-sm group-hover:bottom-0 -bottom-full duration-300 bg-DECOR_PRIMARY hover:bg-DECOR_PRIMARY-HOVER py-2 w-full absolute left-0 right-0">View Details
                                            <FontAwesomeIcon icon={faArrowRightLong} className="text-sm" />
                                        </button>
                                        <div className="absolute top-4 right-4 z-0 duration-300 scale-0 group-hover:scale-100 group-hover:z-30 flex flex-col gap-y-3">
                                            <button
                                                title="Add to cart"
                                                className="bg-white drop-shadow-sm border hover:border-DECOR_PRIMARY hover:bg-DECOR_PRIMARY text-zinc-600 hover:text-white duration-500 h-10 w-10 rounded-full flex items-center justify-center"
                                            >
                                                <FontAwesomeIcon icon={faBagShopping} />
                                            </button>
                                            <button
                                                title="Add to wishlist"
                                                className="bg-white drop-shadow-sm border hover:border-DECOR_PRIMARY hover:bg-DECOR_PRIMARY text-zinc-600 hover:text-white duration-500 h-10 w-10 rounded-full flex items-center justify-center"
                                            >
                                                <FontAwesomeIcon icon={faHeart} />
                                            </button>
                                            <button
                                                onClick={() => setShow(true)}
                                                title="Quick View"
                                                className="bg-white drop-shadow-sm border hover:border-DECOR_PRIMARY hover:bg-DECOR_PRIMARY text-zinc-600 hover:text-white duration-500 h-10 w-10 rounded-full flex items-center justify-center"
                                            >
                                                <FontAwesomeIcon icon={faSearch} />
                                            </button>
                                        </div>
                                        <DetailsModal show={show} setShow={setShow} product={product} />
                                        <Image src={product.img} alt={"product img"} className="hover:scale-110 duration-1000 w-full h-72 sm:h-80 lg:h-96 object-contain" />
                                    </div>
                                    <div className="mt-2 flex flex-col items-center gap-y-2">
                                        <p className={`text-xxs sm:text-sm lg:text-base mb-2 one_lines_elipsis text-zinc-400 fw_400 text-center`}>{product.categories}</p>
                                        <h2 className={`text-black text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl fw_600 text-center one_lines_elipsis`}>{product.label}</h2>
                                        <div className={`mt-3 flex justify-center`}>
                                            <CustomRating rating={product.rating} color="text-DECOR_PRIMARY" size={"text-base"} />
                                        </div>
                                        <p className={`text-sm sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-zinc-800 text-center mt-3 fw_600`}>{product.price}</p>
                                        <button className="text-xs fw_600 uppercase text-white bg-DECOR_PRIMARY hover:bg-DECOR_PRIMARY-HOVER duration-300 w-48 h-12 flex items-center justify-center gap-x-10 mt-8">Shop Now
                                            <FontAwesomeIcon icon={faChevronRight} className="text-xxs" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </Carousel>

                    </div>
                </div>
            </div>
        </div>
    )
}