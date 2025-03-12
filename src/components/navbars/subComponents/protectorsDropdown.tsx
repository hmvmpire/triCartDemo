import { subLinkType1, subLinkType2 } from "@/Types/navbarProsTypes";
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { productType1 } from "@/Types/productPropsTypes";

interface ProtectorsDropdownProps {
  subLinks: productType1[];
  categoryPath: string
  position?: string
}

export const ProtectorsDropdown: FC<ProtectorsDropdownProps> = ({
  subLinks, categoryPath, position
}): JSX.Element => {
  return (
    <div className={`rounded-md bg-white border p-4 w-max absolute top-full ${position ? position : "left-0"} z-30 drop-shadow-sm`}>
      <div className="grid grid-cols-2 gap-3">
        {subLinks.slice(0, 4).map((subLink, index: number) =>
        (
          <Link
            key={index + 1}
            href={"/tricart-electronics/product" + subLink.link}
            className="border-none outline-none shadow-none w-full"
          >
            <div className="flex items-center gap-x-3 bg-zinc-100 py-2 pl-2 pr-4 w-80 text-black fw_400 text-sm cursor-pointer hover:bg-zinc-200 duration-300">
              <div className="w-20 min-w-20 h-20 p-2 flex items-center justify-center bg-white">
                <Image src={subLink.images[0]} alt="product image" className="w-20 min-w-20 h-20 object-contain" />
              </div>
              {subLink.label}
            </div>
          </Link>
        )
        )}
      </div>
      <Link href={"/tricart-electronics/category/"+ categoryPath } className="border-none outline-none shadow-none text-white bg-ELECTRONICS_PRIMARY w-40 h-10 flex items-center gap-x-2 text-sm mt-8 justify-center hover:gap-x-4 duration-300">View All <FontAwesomeIcon icon={faChevronRight} /> </Link>
    </div>
  );
};
