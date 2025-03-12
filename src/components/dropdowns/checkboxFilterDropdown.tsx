import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC, useState } from "react";

interface CheckboxFilterDropdownProps {
    value: string[]
    label: string
    setValue: (value: string[]) => void;
    data: string[]
}
export const CheckboxFilterDropdown: FC<CheckboxFilterDropdownProps> = ({
    label, value, setValue, data
}): JSX.Element => {
    const [show, setShow] = useState(false)
    const isExist = (item: string) => value.find((v: string) => v === item)
    return (
        <div className="relative">
            <div onClick={() => setShow(!show)} className="cursor-pointer bg-zinc-100 h-10 w-40 flex items-center gap-x-4 justify-between px-2 rounded-md">
                <p className="text-zinc-500 text-sm fw_400">{label}</p>
                <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
            </div>
            {show && <ul className="absolute z-40 top-full mt-2 left-0 w-full bg-white drop-shadow-md rounded-md py-3">
                {data.map((item: string, index: number) => (<li onClick={() => isExist(item) ? setValue(value.filter((v: string) => v !== item)) : setValue([...value, item])} key={index + 1} className={`py-3 px-4 text-xs flex items-center gap-x-2 justify-between`}>
                    <div className="flex items-center gap-x-3">
                        <input type="checkbox" checked={isExist(item) ? true : false} className="electronics_checkbox cursor-pointer w-4 h-4" />
                        <span className="text-black fw_600 cursor-pointer uppercase text-xs">{item}</span>
                    </div>
                    {label === "Select Colors" && <p className="text-black fw_600 cursor-pointer uppercase text-xs">6</p>}
                </li>))}
            </ul>}
        </div >
    )
}