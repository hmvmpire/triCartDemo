import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import Link from "next/link";
import { faFacebookF, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { SimpleSearchbox } from "@/components/searchBoxes/simpleSearchbox";
import { CategoryPropType } from "@/Types/categoryPropsTypes";
import { ElectronicsLinkTreeView } from "./electronicsLinkTreeView";

interface ElectronicsSideNavProps {
  show: boolean;
  setShow: (show: boolean) => void;
  dataList: CategoryPropType[]
  showSearchBox?: boolean
  productBaseUrl: string
  categoryBaseUrl: string
  nav4?: boolean
  colorScheme?: string
}

export const ElectronicsSideNav: FC<ElectronicsSideNavProps> = ({ show, setShow, dataList, showSearchBox, productBaseUrl, categoryBaseUrl, nav4, colorScheme }): JSX.Element => {
  return (
    <div
      className={`bg-white fixed top-0 bottom-0 w-72 z-50 duration-300 shadow-md pb-4 pt-10 overflow-y-auto ${show ? "left-0" : "-left-full"
        }`}
    >
      <button onClick={() => setShow(false)} className={`absolute top-3 right-3 text-lg ${colorScheme ? `text-${colorScheme}-600` : "text-blue-600"}`}>
        <FontAwesomeIcon icon={faClose} />
      </button>
      {showSearchBox && <div className="px-3 mt-4">
        <SimpleSearchbox height="h-10" placeholder="Search" />
      </div>}
      <div>
        {show && dataList.map((navLink, index: number) =>
          navLink.products && navLink.products.length > 0 ? (
            <div key={index + 1}>
              <ElectronicsLinkTreeView productBaseUrl={productBaseUrl} navLink={navLink as CategoryPropType} />
            </div>
          ) : (
            <div
              key={index + 1}
              className="min-h-14 border-b px-3 flex items-center"
            >
              <Link href={categoryBaseUrl + navLink.link} className="border-none outline-none shadow-none text-zinc-700 text-sm fw_400">{navLink.label}</Link>
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
