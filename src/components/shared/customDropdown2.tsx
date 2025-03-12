import { subLinkType1, subLinkType2 } from "@/Types/navbarProsTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FC } from "react";

interface CustomDropdown2Props {
    subLinks: (subLinkType1 | subLinkType2)[];
    position?: string;
    width?: string,
    otherClasses?: string
}

export const CustomDropdown2: FC<CustomDropdown2Props> = ({
    subLinks, position, width, otherClasses
}): JSX.Element => {
    return (
        <div className={` ${otherClasses ? otherClasses : "rounded-md drop-shadow-sm border"} p-2 bg-white ${width ? width : "w-60 sm:w-80"} absolute ${position ? position : "top-full right-0"} z-30 flex flex-col gap-y-2`}>
            {subLinks.map((subLink, index: number) =>
                "label" in subLink ? (
                    <Link
                        key={index + 1}
                        href={subLink.link}
                        className={`bg-white drop-shadow-sm rounded-md border border-zinc-100 hover:border-b hover:border-zinc-100 w-full outline-none shadow-none duration-300 flex items-center gap-x-4 hover:gap-x-8 text-sm fw_400 text-black hover:text-blue-700 px-4 py-3`}
                    >
                        {subLink.icon && <FontAwesomeIcon icon={subLink.icon} className="" />}
                        {subLink.label}
                    </Link>
                ) : (
                    <div></div>
                )
            )}
        </div>
    );
};
