import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { FC } from "react";

interface Nav2SearchboxProps {
  placeholder: string;
}

export const Nav2SearchBox: FC<Nav2SearchboxProps> = ({
  placeholder,
}): JSX.Element => {
  const router = useRouter()
  return (
    <div className="flex items-center gap-x-2 w-full rounded-lg h-12 bg-white overflow-hidden pl-4 pr-3 border-2 border-TOOLS_PRIMARY">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-full outline-none shadow-none border-none text-sm"
      />
      <select onChange={() => router.push("/tricart-tools/category/fashion")} className="bg-transparent border-none outline-none shadow-none mr-4 text-xs">
        <option className="cursor-pointer">All Categories</option>
        <option className="cursor-pointer">Kitchen</option>
        <option className="cursor-pointer">Electronics</option>
        <option className="cursor-pointer">Fashion</option>
        <option className="cursor-pointer">Sports</option>
        <option className="cursor-pointer">Luggage</option>
        <option className="cursor-pointer">Automative</option>
      </select>
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
};
