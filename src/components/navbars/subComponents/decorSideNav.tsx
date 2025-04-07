import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { LinksTreeView } from "./linksTreeView";
import { linkType, } from "@/Types/navbarProsTypes";
import Link from "next/link";
import { faFacebookF, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { SimpleSearchbox } from "@/components/searchBoxes/simpleSearchbox";

interface DecorSideNavProps {
  show: boolean;
  setShow: (show: boolean) => void;
  dataList: linkType[]
  showSearchBox?: boolean
  categoryBaseUrl: string
}

export const DecorSideNav: FC<DecorSideNavProps> = ({ show, setShow, dataList, showSearchBox, categoryBaseUrl }): JSX.Element => {
  return (
    <div
      className={`bg-white fixed top-0 bottom-0 w-72 z-50 duration-300 shadow-md pb-4 pt-10 overflow-y-auto ${show ? "left-0" : "-left-full"
        }`}
    >
      <button onClick={() => setShow(false)} className={`absolute top-3 right-3 text-lg text-black`}>
        <FontAwesomeIcon icon={faClose} />
      </button>
      {showSearchBox && <div className="px-3 mt-4">
        <SimpleSearchbox height="h-10" placeholder="Search" />
      </div>}
      <div>
        {show && dataList.map((navLink: linkType, index: number) =>
          navLink.subLinks && navLink.subLinks.length > 0 ? (
            <div key={index + 1}>
              <LinksTreeView productBaseUrl={""} navLink={navLink as linkType} />
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
        <button className={`h-8 w-8 rounded-full flex items-center justify-center text-white text-sm bg-black`}>
          <FontAwesomeIcon icon={faFacebookF} />
        </button>
        <button className={`h-8 w-8 rounded-full flex items-center justify-center text-white text-sm bg-black`}>
          <FontAwesomeIcon icon={faXTwitter} />
        </button>
        <button className={`h-8 w-8 rounded-full flex items-center justify-center text-white text-sm bg-black`}>
          <FontAwesomeIcon icon={faInstagram} />
        </button>
      </div>
    </div>
  );
};
