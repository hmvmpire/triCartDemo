import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC, useEffect, useState } from "react";

interface PriceRangeFilterDropdownProps {
    value: string
    setValue: (value: string) => void;
}
export const PriceRangeFilterDropdown: FC<PriceRangeFilterDropdownProps> = ({
    value, setValue
}): JSX.Element => {
    const [show, setShow] = useState(false)
    const [val1, setVal1] = useState("1")
    const [val2, setVal2] = useState("10")

    useEffect(() => {
        if (value) {
            let a = value.split("-")
            setVal1(a[0])
            setVal2(a[1])
        }
        else {
            setVal1("1")
            setVal2("10")
        }
    }, [show])
    return (
        <div className="relative">
            <div onClick={() => setShow(!show)} className="cursor-pointer bg-zinc-100 h-10 w-40 flex items-center gap-x-4 justify-between px-2 rounded-md">
                <p className="text-zinc-500 text-sm fw_400">Select Price</p>
                <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
            </div>
            {show && <div className="absolute z-40 top-full mt-2 left-0 w-60 bg-white drop-shadow-md rounded-md p-3">
                <div className="flex items-center gap-x-2">
                    <input type="number" value={val1} className="border outline-none w-24 h-10 text-center px-2" onChange={(e) => parseInt(e.target.value) > 0 && parseInt(e.target.value) < parseInt(val2) && setVal1(e.target.value)} />
                    -
                    <input type="number" value={val2} className="border outline-none w-24 h-10 text-center px-2" onChange={(e) => parseInt(e.target.value) > parseInt(val1) && setVal2(e.target.value)} />
                </div>
                <button onClick={() => { setValue(val1 + "-" + val2); setShow(false) }} className="bg-black text-white w-full h-10 mt-5 hover:bg-zinc-800 duration-300 outline-none">Filter</button>
            </div>}
        </div>
    )
}