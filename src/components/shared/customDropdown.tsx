import { subLinkType1, subLinkType2 } from "@/Types/navbarProsTypes";
import Link from "next/link";
import { FC } from "react";

interface CustomDropdownProps {
  subLinks: (subLinkType1 | subLinkType2)[];
  position?: string;
  width?: string,
  otherClasses?: string
  productBaseUrl: string
  hoverColor?: string
}

export const CustomDropdown: FC<CustomDropdownProps> = ({
  subLinks, position, width, otherClasses, productBaseUrl, hoverColor
}): JSX.Element => {
  return (
    <div className={` ${otherClasses ? otherClasses : "rounded-md drop-shadow-sm border p-6"} bg-white ${width ? width : "w-60 sm:w-80"} absolute ${position ? position : "top-full right-0"} z-30 flex flex-col gap-y-3`}>
      {subLinks.map((subLink, index: number) =>
        "label" in subLink ? (
          <Link
            key={index + 1}
            href={productBaseUrl + subLink.link}
            className={`border-none outline-none shadow-none duration-300 w-max flex items-center gap-x-2 text-sm fw_400 text-zinc-500 ${hoverColor? hoverColor : "hover:text-blue-600"}`}
          >
            {subLink.label}
          </Link>
        ) : (
          <div></div>
        )
      )}
    </div>
  );
};
