import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";

interface NavbarSearchboxProps {
  placeholder: string;
  border?: string
  bgColor?: string
}

export const NavbarSearchbox: FC<NavbarSearchboxProps> = ({
  placeholder,
  border,
  bgColor
}): JSX.Element => {
  const [searchVal, setSearchVal] = useState("")
  return (
    <div className="relative">
      <div className={`flex items-center gap-x-2 w-full rounded-full h-12 ${bgColor ? bgColor : "bg-white"} drop-shadow-sm overflow-hidden pl-4 pr-4 ${border ? border : ""} `}>
        <input
          type="text"
          value={searchVal}
          onChange={(e: any) => setSearchVal(e.target.value)}
          placeholder={placeholder}
          className="w-full h-full outline-none shadow-none border-none text-sm bg-transparent"
        />
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
};
