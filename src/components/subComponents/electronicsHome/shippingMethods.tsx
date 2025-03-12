import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
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

export const ShippingMethods = () => {
  return (
    <div className="container1 pt-4 lg:pt-8 pb-4 xl:py-4">
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
        <div className="flex items-center gap-x-3 px-3 justify-center">
          <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-ELECTRONICS_PRIMARY text-xl">
            <FontAwesomeIcon icon={faShippingFast} />
          </div>
          <p className="text-black text-xl fw_600">Free Shipping & Returns</p>
        </div>
        <div className="flex items-center gap-x-3 px-3 justify-center">
          <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-ELECTRONICS_PRIMARY text-xl">
            <FontAwesomeIcon icon={faMoneyBill} />
          </div>
          <p className="text-black text-xl fw_600">Money Back Guarantee</p>
        </div>
        <div className="flex items-center gap-x-3 px-3 justify-center">
          <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-ELECTRONICS_PRIMARY text-xl">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <p className="text-black text-xl fw_600">Online Support 24/7</p>
        </div>
        <div className="flex items-center gap-x-3 px-3 justify-center">
          <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-ELECTRONICS_PRIMARY text-xl">
            <FontAwesomeIcon icon={faCreditCard} />
          </div>
          <p className="text-black text-xl fw_600">Secure Payment</p>
        </div>
      </Carousel>
    </div>
  );
};
