import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useEffect, useState } from "react";

interface sideFilterBox1Props {
    show: boolean;
    setShow: (show: boolean) => void;
    selectedCategory: string
    setSelectedCategory: (value: string) => void;
    price: string
    setPrice: (value: string) => void;
    colors: string[];
    setColors: (value: string[]) => void;
    brands: string[];
    setBrands: (value: string[]) => void;
}

export const SideFilterBox1: FC<sideFilterBox1Props> = ({ show, setShow, selectedCategory, setSelectedCategory, price, setPrice, colors, setColors, brands, setBrands }): JSX.Element => {

    const [val1, setVal1] = useState("1")
    const [val2, setVal2] = useState("10")

    useEffect(() => {
        if (price) {
            let a = price.split("-")
            setVal1(a[0])
            setVal2(a[1])
        }
        else {
            setVal1("1")
            setVal2("10")
        }
    }, [show])
    const isColorExist = (item: string) => colors.find((v: string) => v === item)
    const isBrandExist = (item: string) => brands.find((v: string) => v === item)

    return (
        <div
            className={`bg-white fixed top-0 bottom-0 w-72 z-50 duration-300 shadow-md pb-4 pt-10 overflow-y-auto px-5 flex flex-col gap-y-10 ${show ? "left-0" : "-left-full"
                }`}
        >
            <button onClick={() => setShow(false)} className="absolute top-3 right-3 text-lg text-blue-600">
                <FontAwesomeIcon icon={faClose} />
            </button>
            <div>
                <h1 className="fw_600 text-black text-base">All Categories</h1>
                <ul className="mt-4">
                    {["cases", "Chargers", "Cables", "Glasses"].map((item: string, index: number) => (<li onClick={() => { setSelectedCategory(item); setShow(false) }} key={index + 1} className={`py-3 px-4 cursor-pointer text-xs fw_600 hover:text-blue-700 duration-300 uppercase ${selectedCategory === item ? "text-blue-700" : "text-black"}`}>{item}</li>))}
                </ul>
            </div>
            <div>
                <h1 className="fw_600 text-black text-base">Select Price</h1>
                <div className="mt-4">
                    <div className="flex items-center gap-x-2">
                        <input type="number" value={val1} className="border outline-none w-24 h-10 text-center px-2" onChange={(e) => parseInt(e.target.value) > 0 && parseInt(e.target.value) < parseInt(val2) && setVal1(e.target.value)} />
                        -
                        <input type="number" value={val2} className="border outline-none w-24 h-10 text-center px-2" onChange={(e) => parseInt(e.target.value) > parseInt(val1) && setVal2(e.target.value)} />
                    </div>
                    <button onClick={() => { setPrice(val1 + "-" + val2); setShow(false) }} className="bg-black text-white w-full h-10 mt-5 hover:bg-zinc-800 duration-300 outline-none">Filter</button>
                </div>
            </div>
            <div>
                <h1 className="fw_600 text-black text-base">Select Colors</h1>
                <ul className="mt-4">
                    {["Black", "Green", "White", "Red"].map((item: string, index: number) => (<li onClick={() => isColorExist(item) ? setColors(colors.filter((v: string) => v !== item)) : setColors([...colors, item])} key={index + 1} className={`py-3 px-4 text-xs flex items-center gap-x-2 justify-between`}>
                        <div className="flex items-center gap-x-3">
                            <input type="checkbox" checked={isColorExist(item) ? true : false} className="cursor-pointer w-4 h-4" />
                            <span className="text-black fw_600 cursor-pointer uppercase text-xs">{item}</span>
                        </div>
                        <p className="text-black fw_600 cursor-pointer uppercase text-xs">6</p>
                    </li>))}
                </ul>
            </div>
            <div>
                <h1 className="fw_600 text-black text-base">Select Brands</h1>
                <ul className="mt-4">
                    {["Apple", "Sumsang", "Vivo", "Infinix"].map((item: string, index: number) => (<li onClick={() => isBrandExist(item) ? setBrands(brands.filter((v: string) => v !== item)) : setBrands([...brands, item])} key={index + 1} className={`py-3 px-4 text-xs flex items-center gap-x-2 justify-between`}>
                        <div className="flex items-center gap-x-3">
                            <input type="checkbox" checked={isBrandExist(item) ? true : false} className="cursor-pointer w-4 h-4" />
                            <span className="text-black fw_600 cursor-pointer uppercase text-xs">{item}</span>
                        </div>

                    </li>))}
                </ul>
            </div>
        </div>
    );
};
