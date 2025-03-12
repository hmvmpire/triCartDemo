import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC, useState } from "react";

interface SortingDropdownProps {
    value: string
    otherClassName?: string
    setValue: (value: string) => void;
    data: string[]
    hoverColor?: string
    textColor?: string
}
export const SortingDropdown: FC<SortingDropdownProps> = ({
    value, setValue, data, otherClassName, hoverColor, textColor
}): JSX.Element => {
    const [show, setShow] = useState(false)
    return (
        <div className="relative">
            <div onClick={() => setShow(!show)} className={`cursor-pointer ${otherClassName ? otherClassName : "bg-zinc-100 rounded-md"} py-3 lg:py-0 lg:h-10 w-44 flex items-center gap-x-4 justify-between px-3`}>
                <p className="text-black text-xs lg:text-sm fw_400 whitespace-nowrap overflow-hidden">{value}</p>
                <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
            </div>
            {show && <ul className="absolute z-40 top-full mt-2 left-0 w-52 bg-white drop-shadow-md rounded-md py-3">
                {data.map((item: string, index: number) => (<li onClick={() => { setValue(item); setShow(false) }} key={index + 1} className={`py-3 px-4 cursor-pointer text-sm fw_400 ${hoverColor? hoverColor : "hover:text-blue-700"} duration-300 ${value === item ? textColor? textColor : "text-blue-700" : "text-black"}`}>{item}</li>))}
            </ul>}
        </div>
    )
}