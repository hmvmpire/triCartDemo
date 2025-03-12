import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

interface ProtectorsDropdownProps {
  images: Array<StaticImageData>;
  link: string
}
export const ImagesCarousel: FC<ProtectorsDropdownProps> = ({
  images, link
}): JSX.Element => {
  return (
    <div>
      <Carousel
        responsive={galleryresponsive}
        arrows={false}
        autoPlay={false}
        showDots={true}
        infinite={false}
        draggable={true}
        focusOnSelect={false}
        autoPlaySpeed={1000000}
        itemClass="carousel-item" // Custom class for auto height
      >
        {images.map((image, index) => (

          <Link href={`/tricart-electronics/product${link}`} className="border-none outline-none shadow-none">
            <div
              key={index + 1}
              className="pb-4 h-80 flex items-center justify-center group"
            >
              <div className="w-full h-full overflow-hidden">
                <Image
                  src={image}
                  alt="image"
                  className="h-full w-full object-contain group-hover:scale-110 duration-1000"
                />
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};
