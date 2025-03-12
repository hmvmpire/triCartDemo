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

export const ShippingMethods2 = () => {
    return (
        <div className="container1 pt-4 lg:pt-8 pb-4 xl:py-8">
            <Carousel
                responsive={galleryresponsive}
                arrows={false}
                autoPlay={false}
                infinite={false}
                draggable={true}
                focusOnSelect={false}
                autoPlaySpeed={1000000}
                itemClass="carousel-item" // Custom class for auto height
            >
                <div className="flex items-center gap-x-3 px-3 justify-center group cursor-pointer">
                    <div className="text-TOOLS_PRIMARY text-3xl group-hover:scale-110 duration-300">
                        <FontAwesomeIcon icon={faShippingFast} />
                    </div>
                    <div>
                        <p className="text-black text-lg fw_600 p-0 m-0">Free Shipping & Returns</p>
                        <p className="text-sm fw_400 -mt-1 text-zinc-600 p-0 m-0">Free shipping on all orders over $99.</p>
                    </div>
                </div>
                <div className="flex items-center gap-x-3 px-3 justify-center group cursor-pointer">
                    <div className="text-TOOLS_PRIMARY text-3xl group-hover:scale-110 duration-300">
                        <FontAwesomeIcon icon={faSackDollar} />
                    </div>
                    <div>
                        <p className="text-black text-lg fw_600">Money Back Guarantee</p>
                        <p className="text-sm fw_400 -mt-1 text-zinc-600 p-0 m-0">100% money back guarantee</p>
                    </div>
                </div>
                <div className="flex items-center gap-x-3 px-3 justify-center group cursor-pointer">
                    <div className="text-TOOLS_PRIMARY text-3xl group-hover:scale-110 duration-300">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                    </div>
                    <div>
                        <p className="text-black text-lg fw_600">Online Support 24/7</p>
                        <p className="text-sm fw_400 -mt-1 text-zinc-600 p-0 m-0">Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="flex items-center gap-x-3 px-3 justify-center group cursor-pointer">
                    <div className="text-TOOLS_PRIMARY text-3xl group-hover:scale-110 duration-300">
                        <FontAwesomeIcon icon={faLock} />
                    </div>
                    <div>
                        <p className="text-black text-lg fw_600">Secure Payment</p>
                        <p className="text-sm fw_400 -mt-1 text-zinc-600 p-0 m-0">Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};
