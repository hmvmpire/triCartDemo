import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useMemo, useState } from "react";
import { LinksTreeView } from "./linksTreeView";
import { linkType } from "@/Types/navbarProsTypes";
import Link from "next/link";
import { SimpleSearchbox } from "@/components/searchBoxes/simpleSearchbox";
import { faFacebookF, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { allToolCategories, toolsNavlinks } from "@/data/toolsData";

interface ToolsSideNavProps {
    show: boolean;
    setShow: (show: boolean) => void;
}

export const ToolsSideNav: FC<ToolsSideNavProps> = ({ show, setShow }): JSX.Element => {
    const [tab, setTab] = useState(0)
    const [linksData, setLinksData] = useState(toolsNavlinks)
    return (
        <div
            className={`bg-white fixed top-0 bottom-0 w-72 z-50 duration-300 shadow-md pb-4 pt-10 overflow-y-auto ${show ? "left-0" : "-left-full"
                }`}
        >
            <button onClick={() => setShow(false)} className="absolute top-3 right-3 text-lg text-TOOLS_PRIMARY">
                <FontAwesomeIcon icon={faClose} />
            </button>
            <div className="px-3 mt-4">
                <SimpleSearchbox height="h-10" placeholder="Variation" />
            </div>
            <div className="flex items-end mt-6">
                <button onClick={() => { setTab(0); setLinksData(toolsNavlinks) }} className={`border-b-2 pb-3 fw_600 ${tab === 0 ? "text-TOOLS_PRIMARY border-TOOLS_PRIMARY" : "text-black border-zinc-200"} w-1/2 outline-none shadow-none text-sm`}>Main Menu</button>
                <button onClick={() => { setTab(1); setLinksData(allToolCategories) }} className={`border-b-2 pb-3 fw_600 ${tab === 1 ? "text-TOOLS_PRIMARY border-TOOLS_PRIMARY" : "text-black border-zinc-200"} w-1/2 outline-none shadow-none text-sm`}>Categories</button>
            </div>
            {useMemo(() => (<div className="mt-5">
                {show && linksData.map((navLink, index) =>
                    navLink.subLinks && navLink.subLinks.length > 0 ? (
                        <div key={index + 1}>
                            <LinksTreeView productBaseUrl={tab === 1 ? "" : "/tricart-tools/category"} navLink={navLink as linkType} />
                        </div>
                    ) : (
                        <div
                            key={index + 1}
                            className="min-h-14 border-b px-3 flex items-center"
                        >
                            <Link href={navLink.link} className="border-none outline-none shadow-none text-black text-sm fw_600">{navLink.label}</Link>
                        </div>
                    )
                )}
            </div>), [show, linksData])}
            <div className="flex items-center justify-center gap-x-3 mt-10">
                <button className="h-8 w-8 flex items-center justify-center text-white text-sm bg-TOOLS_PRIMARY">
                    <FontAwesomeIcon icon={faFacebookF} />
                </button>
                <button className="h-8 w-8 flex items-center justify-center text-white text-sm bg-blue-400">
                    <FontAwesomeIcon icon={faXTwitter} />
                </button>
                <button className="h-8 w-8 flex items-center justify-center text-white text-sm bg-yellow-900">
                    <FontAwesomeIcon icon={faInstagram} />
                </button>
            </div>
        </div>
    );
};
