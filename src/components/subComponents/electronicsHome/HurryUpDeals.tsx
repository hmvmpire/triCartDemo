import { useEffect, useState } from "react";
import { CarouselList } from "../../productsLists/carouselList";
import { CompHeading2 } from "../../shared/CompHeading2";
import { useMediaQuery } from "@mui/material";
import { HurryUpDealsBanner } from "./hurryUpDealsBanner";
import { getElectornicsDataByTag } from "@/services/generalService";

export const HurryUpDeals = () => {
  const matches2 = useMediaQuery("(max-width:1130px)");

  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const offerEndDate: any = new Date("28 September 2025 00:00:00 GMT+00:00");

  function getRemainingTime(endDate: string): {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } {
    // Set the target date
    const offerEndDate: Date = new Date(endDate);

    // Get the current date and time
    const now: Date = new Date();

    // Calculate the difference in milliseconds
    const timeDiff: number = offerEndDate.getTime() - now.getTime();

    // Calculate remaining days, hours, minutes, and seconds
    const days: number = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours: number = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes: number = Math.floor(
      (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds: number = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Return the result as an object
    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    setInterval(() => {
      setRemainingTime(getRemainingTime(offerEndDate));
    }, 1000);
  }, []);
  const rightContent = (
    <div className="flex items-center gap-x-1 sm:gap-x-3 justify-center sm:justify-end">
      <p className="fw_700 text-black text-lg hidden sm:block">
        Offer ends in:{" "}
      </p>
      <div className="h-14 w-16 sm:w-20 min-w-16 sm:min-w-20 bg-white flex flex-col items-center justify-center py-1">
        <span className="fw_700 text-black text-xl sm:text-2xl">
          {remainingTime.days}
        </span>
        <span className="text-xs -mt-1">Days</span>
      </div>
      <span className="text-xl text-black fw_700">:</span>
      <div className="h-14 w-16 sm:w-20 min-w-16 sm:min-w-20 bg-white flex flex-col items-center justify-center py-1">
        <span className="fw_700 text-black text-xl sm:text-2xl">
          {remainingTime.hours}
        </span>
        <span className="text-xs -mt-1">Hours</span>
      </div>
      <span className="text-xl text-black fw_700">:</span>
      <div className="h-14 w-16 sm:w-20 min-w-16 sm:min-w-20 bg-white flex flex-col items-center justify-center py-1">
        <span className="fw_700 text-black text-xl sm:text-2xl">
          {remainingTime.minutes}
        </span>
        <span className="text-xs -mt-1">Minutes</span>
      </div>
      <span className="text-xl text-black fw_700">:</span>
      <div className="h-14 w-16 sm:w-20 min-w-16 sm:min-w-20 bg-white flex flex-col items-center justify-center py-1">
        <span className="fw_700 text-black text-xl sm:text-2xl">
          {remainingTime.seconds}
        </span>
        <span className="text-xs -mt-1">Seconds</span>
      </div>
    </div>
  );
  return (
    <div id="hurryUpDeals" className="flex flex-col gap-y-16">
      <div className="container2">
        <div className="px-3 sm:px-8">
          <CompHeading2 title="Hurry Up Deals" rightContent={rightContent} />
        </div>
        <div className="px-2 sm:px-4 mt-8">
          <CarouselList data={getElectornicsDataByTag("Deals")} galleryresponsive={{
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
      <HurryUpDealsBanner showHeading={true} />
    </div>
  );
};
