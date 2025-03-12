import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import { ProtectorsDropdown } from "./protectorsDropdown";
import { categoriesData } from "@/data/electronicsData";



interface NavLinkProps {
}

export const ElectronicsNavLinks: FC<NavLinkProps> = ({
}): JSX.Element => {
  const [show, setShow] = useState("");

  return (
    <div className="flex items-center gap-x-10 justify-between">
      <div className="flex items-center gap-x-4 justify-between relative w-full">
        {categoriesData.map((navlink, index) => (
          <div
            key={index + 1}
            onMouseEnter={() => setShow(navlink.label)}
            onMouseLeave={() => setShow("")}
            className="relative"
          >
            <p className={`${navlink.label === show ? "text-ELECTRONICS_PRIMARY-HOVER" : "text-black"
              } duration-300 fw_600 flex items-center gap-x-2 pb-2 cursor-default`}>
              {navlink.label}
              {navlink.products && navlink.products.length > 0 && (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </p>
            {navlink.products && show === navlink.label &&
              (
                <ProtectorsDropdown categoryPath={navlink.link} subLinks={navlink.products} position={(navlink.label === "Cameras & Accessories" || navlink.label === "Laptops & Accessories" || navlink.label === "Mobile & Accessories") ? "right-0" : "left-0"} />)}
          </div>
        ))}
      </div>
    </div>
  );
};
