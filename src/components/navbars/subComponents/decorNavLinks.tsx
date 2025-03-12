import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { BigContentDropdown2 } from "@/components/shared/bigContentDropdown2";
import { homeDecorCategories } from "@/data/homeDecorData";
import { useMediaQuery } from "@mui/material";
import { handleSmoothScroll } from "@/services/generalService";

// Separate components for better organization
interface ActionButtonProps {
    text: string;
    isBlack?: boolean;
    pathId: string
}

const ActionButton = ({ text, isBlack = false, pathId }: ActionButtonProps) => (
    <a href={pathId} onClick={handleSmoothScroll} className={`border-none outline-none shadow-none flex items-center justify-between px-5 gap-x-2 group fw_600 
        ${isBlack ? 'text-white bg-DECOR_PRIMARY' : 'text-DECOR_PRIMARY bg-zinc-100'} text-xs uppercase tracking-wider w-48 h-12`}>
        {text}
        <div className={`h-5 w-5 rounded-full group-hover:-mr-1 mr-1 duration-300 
            ${isBlack ? 'text-white' : 'text-DECOR_PRIMARY'} text-xxs flex items-center justify-center`}>
            <FontAwesomeIcon icon={faChevronRight} />
        </div>
    </a>
);

const Column4Content = () => (
    <div className="flex flex-col gap-y-4">
        <ActionButton text="New Furniture" pathId="#all-new" />
        <ActionButton text="Best Sellers" pathId="#best-seller" />
        <ActionButton text="On Sale" isBlack pathId="#on-sale" />
    </div>
);

const Column5Content = (img: StaticImageData) => (
    <div className="">
        <div className="flex flex-col gap-y-2 h-max w-full">
            <Image src={img} alt="Product Preview" className="w-full" />
            <div>
                <h1 className="text-zinc-700 fw_400 text-sm">
                    Decore your home with our new furniture collection
                </h1>
                <button className="mt-2 flex items-center gap-x-2 group fw_600 text-DECOR_PRIMARY text-sm w-max">
                    Shop Now
                    <div className="h-5 w-5 rounded-full group-hover:ml-2 duration-300 text-DECOR_PRIMARY text-xxs flex items-center justify-center">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </button>
            </div>
        </div>
    </div>
);

export const DecorNavLinks = () => {
    const [activeLabel, setActiveLabel] = useState("");
    const isLargeDesktop = useMediaQuery("(max-width:1580px)");

    const handleMouseEnter = (label: string) => setActiveLabel(label);
    const handleMouseLeave = () => setActiveLabel("");

    const shouldLeft = (index: number) => isLargeDesktop ? index < 3 : index < 6;

    return (
        <div className="flex items-center gap-x-10 w-full">
            {homeDecorCategories.map((navLink, index) => (
                <div
                    key={`navLink-${index}`}
                    onMouseEnter={() => handleMouseEnter(navLink.label)}
                    onMouseLeave={handleMouseLeave}
                    className={isLargeDesktop? "" : "relative"}
                >
                    <Link
                        href={navLink.link}
                        className={`${navLink.label === activeLabel ? "text-DECOR_PRIMARY " : "text-zinc-500 "
                            } duration-300 w-max whitespace-nowrap flex items-center fw_600 gap-x-2 text-sm border-none outline-none shadow-none py-4`}
                    >
                        {navLink.label}
                        {navLink.subLinks?.length > 0 && (
                            <FontAwesomeIcon icon={faChevronDown} />
                        )}
                    </Link>

                    {navLink.subLinks && activeLabel === navLink.label && (
                        <BigContentDropdown2
                            otherClasses="rounded-none drop-shadow-xl"
                            position={`top-full ${shouldLeft(index) ? "left-0" : "right-0"}`}
                            subLinks={navLink.subLinks}
                            column4Content={<Column4Content />}
                            column5Content={Column5Content(navLink.image)}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};
