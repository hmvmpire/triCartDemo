import { subLinkType1, subLinkType2 } from "@/Types/navbarProsTypes";
import Link from "next/link";
import { FC } from "react";

interface BigContentDropdownProps {
  subLinks: (subLinkType1 | subLinkType2)[];
  position?: string;
  width?: string,
  otherClasses?: string
  dropdownFooterContent?: JSX.Element
  column4Content?: JSX.Element
  productBaseUrl?: string
  hoverColor?: string
}

export const BigContentDropdown: FC<BigContentDropdownProps> = ({
  subLinks,
  position, width, otherClasses, dropdownFooterContent, column4Content, productBaseUrl, hoverColor
}): JSX.Element => {
  return (
    <div style={{ width: width ? width : "100%" }} className={` bg-white border p-6 absolute ${position ? position : "top-full left-0"} z-30 ${otherClasses ? otherClasses : "rounded-md drop-shadow-sm border p-6"}`}>
      <div className="grid grid-cols-12 gap-4">
        {subLinks.map((subLink, index: number) =>
          "categoryName" in subLink ? (
            <div className={`col-span-3 ${index === 0 ? "" : ""}`}>
              <div key={index + 1} className="flex flex-col gap-y-4">
                <p className="fw_600 text-sm">{subLink.categoryName}</p>
                <ul className="flex flex-col gap-y-3 w-max">
                  {subLink.links &&
                    subLink.links.length > 0 &&
                    subLink.links.map((link: subLinkType2, ind: number) => (
                      <li key={ind + 1} className="w-max">
                        <Link
                          href={productBaseUrl + link.link}
                          className={`border-none outline-none shadow-none duration-300 w-max flex items-center gap-x-2 text-sm fw_400 text-zinc-500 ${hoverColor ? hoverColor : "hover:text-blue-600"}`}
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
        {column4Content}
      </div>
      {dropdownFooterContent}
    </div>
  );
};
