import { useEffect, useState } from "react";
import { CarouselList } from "../../productsLists/carouselList";
import { CompHeading2 } from "../../shared/CompHeading2";
import { getElectornicsDataByTag } from "@/services/generalService";
import { productType1 } from "@/Types/productPropsTypes";
import { categoriesData } from "@/data/electronicsData";

export const FeaturedProducts = () => {
  const [tab, setTab] = useState(0);
  const [list, setList] = useState<productType1[]>([])

  const rightContent = (
    <div className="flex items-center gap-x-1 sm:gap-x-3 justify-center sm:justify-end">
      <button
        onClick={() => setTab(0)}
        className={`${tab === 0 ? "text-white bg-ELECTRONICS_PRIMARY" : "text-black bg-white"
          } rounded-full h-8 px-5 border drop-shadow-sm text-xs uppercase fw_600`}
      >
        New
      </button>
      <button
        onClick={() => setTab(1)}
        className={`${tab === 1 ? "text-white bg-ELECTRONICS_PRIMARY" : "text-black bg-white"
          } rounded-full h-8 px-5 border drop-shadow-sm text-xs uppercase fw_600`}
      >
        Hot
      </button>
      <button
        onClick={() => setTab(2)}
        className={`${tab === 2 ? "text-white bg-ELECTRONICS_PRIMARY" : "text-black bg-white"
          } rounded-full h-8 px-5 border drop-shadow-sm text-xs uppercase fw_600`}
      >
        Best Seller
      </button>
    </div>
  );

  useEffect(() => {
    if (tab === 0) {
      setList(getElectornicsDataByTag("New"))
    }
    else if (tab === 1) {
      setList(getElectornicsDataByTag("Hot"))
    }
    else if (tab === 2) {
      setList(getElectornicsDataByTag("Best Seller"))
    }

  }, [tab])


  return (
    <div id="featuredProducts1">
      <div className="container2">
        <div className="px-3 sm:px-8">
          <CompHeading2 title="Featured Products" rightContent={rightContent} />
        </div>
        <div className="px-2 sm:px-4 mt-8">
          <CarouselList data={list} galleryresponsive={{
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 1280 },
              items: 4,
            },
            desktop: {
              breakpoint: { max: 1280, min: 800 },
              items: 3,
            },
            tablet: {
              breakpoint: { max: 800, min: 640 },
              items: 2,
            },
            mobile: {
              breakpoint: { max: 640, min: 0 },
              items: 1,
            },
          }} />
        </div>
      </div>
    </div>
  );
};
