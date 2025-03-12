import CommonFooter from "@/components/footers/commonFooter";
import { CommonNavbar } from "@/components/navbars/commonNavbar";
import { Fragment } from "react";
import { DemoCards } from "@/components/subComponents/commonHomePage/demoCards";
import Mainfeatures from "@/components/subComponents/commonHomePage/Mainfeatures";
import { OtherPagesList } from "@/components/subComponents/commonHomePage/otherPagesList";
import { PagesCounting } from "@/components/subComponents/commonHomePage/pagesCounting";

const Index = () => {
  return (
    <Fragment>
      {/* Hero Section */}
      <CommonNavbar />
      <div className="relative px-3 h-[800px] sm:h-[800px] bg-gradient-to-r from-indigo-700 via-purple-700 to-purple-700 flex flex-col items-center justify-center">
        {/* <div></div> */}
        <div className="text-center text-black">
          <h1 className="text-3xl sm:text-4xl md:text-5xl fw_700 text-white mb-14">BUILT SITES WITH <br />THE SPIRIT OF EXCELLENCE</h1>
          <p className="text-base sm:text-lg md:text-xl mb-14 text-white">"Discover the best products for your needs, crafted with precision and passion.<br className="hidden lg:block" />
            From cutting-edge electronics to timeless fashion, we bring excellence to every detail."</p>
          <button className="bg-white hover:px-14 text-black text-base fw_600 px-8 py-3 rounded-full duration-700">
            Buy Now For $11
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <Mainfeatures />
        <DemoCards />
        <PagesCounting />
        <OtherPagesList />
      </div>
      <CommonFooter container={true} />
    </Fragment>
  )
};
export default Index;