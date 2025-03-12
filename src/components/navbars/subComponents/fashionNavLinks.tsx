import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import { fashionCategoriesData } from "@/data/fashionData";
import { BigContentDropdown3 } from "@/components/shared/bigContentDropdown3";
import { handleSmoothScroll } from "@/services/generalService";
import { StaticImageData } from "next/image";

export const FashionNavLinks = () => {
    const [show, setShow] = useState("");
    const column4Content = (img: StaticImageData) =>
        <div style={{ backgroundImage: `url(${img.src})` }} className="border-2 border-white relative bg-center bg-cover px-3 py-5 flex flex-col items-center justify-between gap-x-4 min-h-72 h-full w-full">
           <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center">
           <button
                className={`bg-white text-fashionPrimary text-sm w-32 h-10 fw_400 duration-300 hover:bg-fashionPrimary hover:text-white`}
            >
                View Sale
            </button>
           </div>
        </div>


    return (
        <div id="nav4" className="flex items-center gap-x-6">
            {fashionCategoriesData.map((navlink, index) => (
                <div
                    key={index + 1}
                    onMouseEnter={() => setShow(navlink.label)}
                    onMouseLeave={() => setShow("")}
                    className={`relative`}
                >
                    {navlink.label === "Blog" ?
                        <a href="#blog4" onClick={handleSmoothScroll} className={`${navlink.label === show ? "bg-white text-black" : "text-white"
                            } duration-300 fw_600 flex items-center gap-x-2 text-xs uppercase border-none outline-none shadow-none py-3 px-4`}>
                            {navlink.label}
                        </a>
                        : <Link
                            href={navlink.link}
                            className={`${navlink.label === show ? "bg-white text-black" : "text-white"
                                } duration-300 fw_600 flex items-center gap-x-2 text-xs uppercase border-none outline-none shadow-none py-3 px-4`}
                        >
                            {navlink.label}
                            {navlink.subLinks && navlink.subLinks.length > 0 && (
                                <FontAwesomeIcon icon={faChevronDown} />
                            )}
                        </Link>}
                    {navlink.subLinks &&
                        show === navlink.label && (
                            <div className="">
                                <BigContentDropdown3 position="top-full left-1/2 transform -translate-x-1/2 -mt-1" width="750px" otherClasses="drop-shadow-lg px-3 py-4" subLinks={navlink.subLinks} column4Content={<div className="col-span-4">{column4Content(navlink.img)}</div>} />
                            </div>
                        )}
                </div>
            ))}
        </div>
    );
};
