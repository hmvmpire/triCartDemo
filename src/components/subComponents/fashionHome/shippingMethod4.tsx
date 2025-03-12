import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons/faSackDollar";
import { faShippingFast } from "@fortawesome/free-solid-svg-icons/faShippingFast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
};

export const ShippingMethods4 = () => {
    return (
        <div className="container3 grid grid-cols-12 border-t border-b border-zinc-300">
            <div className="flex items-center gap-x-3 px-3 justify-center group cursor-pointer col-span-12 md:col-span-6 lg:col-span-4 border-zinc-300 py-6 border-r md:border-r-0 border-l">
                <div className="text-fashionPrimary text-3xl group-hover:scale-110 duration-300">
                    <FontAwesomeIcon icon={faShippingFast} />
                </div>
                <div>
                    <p className="text-black text-sm uppercase fw_600 p-0 m-0">Free Shipping & Returns</p>
                    <p className="text-sm fw_400 -mt-1 text-zinc-500 p-0 m-0">Free shipping on all orders over $99.</p>
                </div>
            </div>
            <div className="flex items-center gap-x-3 px-3 justify-center group cursor-pointer col-span-12 md:col-span-6 lg:col-span-4 border-zinc-300 py-6 border-t md:border-t-0 border-l border-r lg:border-r-0">
                <div className="text-fashionPrimary text-3xl group-hover:scale-110 duration-300">
                    <FontAwesomeIcon icon={faSackDollar} />
                </div>
                <div>
                    <p className="text-black text-sm uppercase fw_600">Money Back Guarantee</p>
                    <p className="text-sm fw_400 -mt-1 text-zinc-500 p-0 m-0">100% money back guarantee</p>
                </div>
            </div>
            <div className="flex items-center gap-x-3 px-3 justify-center group cursor-pointer col-span-12 lg:col-span-4 border-zinc-300 py-6 border-t lg:border-t-0 border-l border-r">
                <div className="text-fashionPrimary text-3xl group-hover:scale-110 duration-300">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </div>
                <div>
                    <p className="text-black text-sm uppercase fw_600">Online Support 24/7</p>
                    <p className="text-sm fw_400 -mt-1 text-zinc-500 p-0 m-0">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    );
};
