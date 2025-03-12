import { categoriesData } from "@/data/electronicsData";
import { CategoryPropType } from "@/Types/categoryPropsTypes";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC, useState } from "react";

interface CategoriesDropdownProps {
    value: string
    setValue: (value: string) => void;
}
export const CategoriesDropdown: FC<CategoriesDropdownProps> = ({
    value, setValue
}): JSX.Element => {
    const [show, setShow] = useState(false)
    return (
        <div className="relative">
            <div onClick={() => setShow(!show)} className="cursor-pointer bg-zinc-100 h-10 w-40 flex items-center gap-x-4 justify-between px-2 rounded-md">
                <p className="text-zinc-500 text-sm fw_400 one_lines_elipsis">{value? value : "All Categories"}</p>
                <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
            </div>
            {show && <ul className="absolute z-40 top-full mt-2 left-0 w-60 bg-white drop-shadow-md rounded-md py-3">
                {categoriesData.map((item: CategoryPropType, index: number) => (<li onClick={() => { setValue(item.label); setShow(false) }} key={index + 1} className={`py-3 px-4 cursor-pointer text-xs fw_600 hover:text-ELECTRONICS_PRIMARY-HOVER duration-300 uppercase ${value === item.label ? "text-ELECTRONICS_PRIMARY-HOVER" : "text-black"}`}>{item.label}</li>))}
            </ul>}
        </div>
    )
}