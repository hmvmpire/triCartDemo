import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { BigContentDropdown } from "../../shared/bigContentDropdown";
import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { AllToolCategoriesDropdown } from "./allToolCategoriesDropdown";
import powerTools from '../../../static/products.jpg'
import brands from '../../../static/brands.jpg'
import accessories from '../../../static/accessories.jpeg'
import { toolsNavlinks } from "@/data/toolsData";

export const ToolsNavLinks = () => {
    const [show, setShow] = useState("");
    const column4Content3 = <div className="col-span-9">
        <div style={{ backgroundImage: `url(${brands.src})` }} className="bg-center bg-cover rounded-2xl px-3 py-5 flex flex-col items-center justify-between gap-x-4 h-full min-h-52">
        </div>
    </div>
    const column4Content2 = <div className="col-span-3">
        <div style={{ backgroundImage: `url(${accessories.src})` }} className="bg-center bg-cover rounded-2xl px-3 py-5 flex flex-col items-center justify-between gap-x-4 h-full min-h-52">
        </div>
    </div>
    const column4Content1 = <div className="col-span-12">
        <div style={{ backgroundImage: `url(${powerTools.src})` }} className="bg-center bg-cover rounded-2xl px-3 py-5 flex flex-col items-center justify-between gap-x-4 h-full min-h-52">
        </div>
    </div>
    return (
        <div className="w-full bg-TOOLS_PRIMARY rounded-lg h-16 px-5 flex items-center gap-x-4 justify-between">
            <div className="flex items-center gap-x-14 h-full">
                <div
                    className="h-full relative departmentBtn"
                >
                    <div className={`text-black hover:underline fw_600 flex items-center gap-x-2 border-none outline-none shadow-none h-full text-sm cursor-pointer`}>
                        <FontAwesomeIcon icon={faBars} className="text-black text-base" />
                        All Categories
                    </div>
                    <AllToolCategoriesDropdown />
                </div>
                {toolsNavlinks.map((navlink, index) => (
                    <div
                        key={index + 1}
                        className="h-full relative"
                        onMouseEnter={() => setShow(navlink.label)}
                        onMouseLeave={() => setShow("")}
                    >
                        <Link
                            href={navlink.link}
                            className={`${navlink.label === show ? "underline" : ""
                                } duration-300 fw_600 flex items-center gap-x-2 text-black border-none outline-none shadow-none h-full text-sm`}
                        >
                            {navlink.label}
                        </Link>
                        {navlink.subLinks &&
                            show === "Products" &&
                            navlink.label === "Products" && (
                                <BigContentDropdown hoverColor="hover:underline hover:text-black" productBaseUrl="/tricart-tools/category" column4Content={column4Content1} subLinks={navlink.subLinks} position="top-full left-0 mt-0" width="750px" otherClasses="drop-shadow-lg px-3 py-4" />
                            )}
                        {navlink.subLinks && show === "Accessories" && navlink.label === "Accessories" && (
                            <BigContentDropdown hoverColor="hover:underline hover:text-black" productBaseUrl="/tricart-tools/category" column4Content={column4Content2} subLinks={navlink.subLinks} position="top-full left-0 mt-0" width="750px" otherClasses="drop-shadow-lg px-3 py-4" />
                        )}
                        {navlink.subLinks && show === "Brands" && navlink.label === "Brands" && (
                            <BigContentDropdown hoverColor="hover:underline hover:text-black" productBaseUrl="/tricart-tools/category" column4Content={column4Content3} subLinks={navlink.subLinks} position="top-full left-0 mt-0" width="750px" otherClasses="drop-shadow-lg px-3 py-4" />
                        )}
                    </div>
                ))}
            </div>
            <Link
                href={"/tricart-tools"}
                className={`duration-300 fw_600 flex items-center gap-x-2 border-none outline-none shadow-none h-full text-black hover:underline text-sm`}
            >
                Best Offers here
            </Link>
        </div>
    );
};
