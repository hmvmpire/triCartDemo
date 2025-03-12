import { linkType, subLinkType1, subLinkType2 } from "@/Types/navbarProsTypes";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { allToolCategories } from "@/data/toolsData";


interface ToolCategoriesSubDropdownProps {
    searchKey: string;
    indicatorPosition?: string
    relatedImg: StaticImageData
}

export const ToolCategoriesSubDropdown: FC<ToolCategoriesSubDropdownProps> = ({
    searchKey, indicatorPosition, relatedImg
}): JSX.Element => {
    const [subLinks, setSubLinks] = useState<subLinkType1[]>([]);

    useEffect(() => {
        const filteredLinks = (allToolCategories as linkType[])
            .filter((item) => item.label === searchKey)
            .flatMap((item) => item.subLinks);
        setSubLinks(filteredLinks as subLinkType1[]);
    }, [allToolCategories, searchKey]);

    return (
        <div style={{ width: "800px" }} className={`depDropdown bg-white border absolute z-30 top-0 left-full drop-shadow-xl p-6`}>
            {indicatorPosition && <div className={`absolute h-4 w-4 bg-white -left-2 ${indicatorPosition} rotate-45`}></div>}
            <div className="grid grid-cols-12 gap-x-4">
                <div className={`h-max ${subLinks.length > 1 ? "col-span-6" : "col-span-3"}`}>
                    <div className="grid grid-cols-2 gap-4">
                        {subLinks.map((subLink, index: number) =>
                            "categoryName" in subLink ? (
                                <div key={index + 1} className="flex flex-col gap-y-5">
                                    <Link href={subLink.link as string} className="uppercase text-sm border-none outline-none shadow-none text-black fw_600 hover:underline">{subLink.categoryName}</Link>
                                    <ul className="flex flex-col gap-y-4 w-max">
                                        {subLink.links &&
                                            subLink.links.length > 0 &&
                                            subLink.links.map((link: subLinkType2, ind: number) => (
                                                <li key={ind + 1} className="w-max">
                                                    <Link
                                                        href={link.link}
                                                        className="border-none outline-none shadow-none w-max flex items-center gap-x-2 text-sm fw_400 text-zinc-600 hover:underline"
                                                    >
                                                        {link.label}
                                                    </Link>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            ) : (
                                <div></div>
                            )
                        )}
                    </div>
                </div>
                <div className={`${subLinks.length > 1 ? "col-span-6" : "col-span-9"}`}>
                    <Image src={relatedImg} alt="relatedImg" className="object-cover" />
                </div>
            </div>
        </div>
    );
};
