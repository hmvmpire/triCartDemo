import { subLinkType1, subLinkType2 } from "@/Types/navbarProsTypes";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import { FC } from "react";

interface BigContentDropdown2Props {
    subLinks: (subLinkType1 | subLinkType2)[];
    position?: string;
    otherClasses?: string
    dropdownFooterContent?: JSX.Element
    column4Content?: JSX.Element
    column5Content?: JSX.Element
}

export const BigContentDropdown2: FC<BigContentDropdown2Props> = ({
    subLinks,
    position, otherClasses, dropdownFooterContent, column4Content, column5Content
}): JSX.Element => {
    const isLargeDesktop = useMediaQuery("(max-width:1580px)");

    return (
        <div style={{}} className={`${isLargeDesktop ? "w-full" : "w-max"} bg-white border p-6 absolute ${position ? position : "top-full left-0"} z-30 ${otherClasses ? otherClasses : "rounded-md drop-shadow-sm border p-6"}`}>
            <div className={`${isLargeDesktop ? "grid grid-cols-3" : "flex"} gap-x-4`}>
                <div className="flex flex-col gap-y-4 w-60">
                    {subLinks.map((subLink, index: number) =>
                        "categoryName" in subLink ? (
                            <div className={`w-full ${index === 0 ? "" : ""}`}>
                                <div key={index + 1} className="flex flex-col gap-y-4 w-full">
                                    <p className="fw_600">{subLink.categoryName}</p>
                                    <ul className="flex flex-col w-full">
                                        {subLink.links &&
                                            subLink.links.length > 0 &&
                                            subLink.links.map((link: subLinkType2, ind: number) => (
                                                <li key={ind + 1} className="w-full">
                                                    <Link
                                                        href={link.link}
                                                        className="border-none outline-none shadow-none duration-300 flex items-center gap-x-2 text-sm fw_400 py-3 px-3 w-full text-zinc-500 hover:text-black hover:bg-zinc-100"
                                                    >
                                                        {link.label}
                                                    </Link>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <div></div>
                        )
                    )}
                </div>
                <div className="w-52">
                    {column4Content}
                </div>
                <div className="w-72">
                    {column5Content}
                </div>
            </div>
            {dropdownFooterContent}
        </div>
    );
};
