import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { ProductCard1 } from "../productCards/productCard1";
import { productType1 } from "@/Types/productPropsTypes";


interface ResponsiveType {
  [key: string]: {
    breakpoint: {
      max: number;
      min: number;
    };
    items: number;
  };
}
// Define the props for CarouselList
interface CarouselListProps {
  galleryresponsive: ResponsiveType;
  data: productType1[]
}

export const CarouselList: React.FC<CarouselListProps> = ({
  galleryresponsive, data
}): JSX.Element => {
  return (
    <div>
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
{/* <div></div> */}
        {data && data.length > 0 && data.map((product, index) => (
          <div key={index + 1} className="px-1 md:px-3">
            <ProductCard1 product={product} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
