import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { LinksTreeView } from "./linksTreeView";
import { linkType } from "@/Types/navbarProsTypes";
import { faFacebookF, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { SimpleSearchbox } from "@/components/searchBoxes/simpleSearchbox";
import { fashionCategoriesData } from "@/data/fashionData";
import { handleSmoothScroll } from "@/services/generalService";

interface FashionSideNavProps {
  show: boolean;
  setShow: (show: boolean) => void;
  showSearchBox?: boolean
  productBaseUrl: string
  categoryBaseUrl: string
  nav4?: boolean
  colorScheme?: string
}

export const FashionSideNav: FC<FashionSideNavProps> = ({ show, setShow, showSearchBox, productBaseUrl, categoryBaseUrl, nav4, colorScheme }): JSX.Element => {
  return (
    <div
      className={`bg-white fixed top-0 bottom-0 w-72 z-50 duration-300 shadow-md pb-4 pt-10 overflow-y-auto ${show ? "left-0" : "-left-full"
        }`}
    >
      <button onClick={() => setShow(false)} className={`absolute top-3 right-3 text-lg ${colorScheme ? `text-${colorScheme}-600` : "text-blue-600"}`}>
        <FontAwesomeIcon icon={faClose} />
      </button>
      {showSearchBox && <div className="px-3 my-4">
        <SimpleSearchbox height="h-10" placeholder="Search" />
      </div>}
      <div>
        {show && fashionCategoriesData.map((navLink: linkType, index: number) =>
          navLink.subLinks && navLink.subLinks.length > 0 ? (
            <div key={index + 1}>
              <LinksTreeView productBaseUrl={nav4 ? navLink.label === "Categories" ? "/tricart-fashion/category" : "" : productBaseUrl} navLink={navLink as linkType} />
            </div>
          ) : (
            <div className="border-b border-zinc-200">
              <a href={navLink.label === "Blog" ? "#blog4" : "/"} onClick={handleSmoothScroll} className={`text-zinc-900 duration-300 fw_400 flex items-center gap-x-2 text-base border-none outline-none shadow-none py-3 px-3`}>
                {navLink.label}
              </a>
            </div>
          )
        )}
      </div>
      <div className="flex items-center justify-center gap-x-3 mt-10">
        <button className={`h-8 w-8 rounded-full flex items-center justify-center text-white text-sm bg-${colorScheme}-500`}>
          <FontAwesomeIcon icon={faFacebookF} />
        </button>
        <button className={`h-8 w-8 rounded-full flex items-center justify-center text-white text-sm bg-${colorScheme}-500`}>
          <FontAwesomeIcon icon={faXTwitter} />
        </button>
        <button className={`h-8 w-8 rounded-full flex items-center justify-center text-white text-sm bg-${colorScheme}-500`}>
          <FontAwesomeIcon icon={faInstagram} />
        </button>
      </div>
    </div>
  );
};
