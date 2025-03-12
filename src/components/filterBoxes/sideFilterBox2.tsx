import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useEffect, useState } from "react";
import { Filterbox2 } from "./filterBox2";

interface sideFilterBox2Props {
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
    size: string;
    setSize: (value: string) => void
}

export const SideFilterBox2: FC<sideFilterBox2Props> = ({ show, setShow, size, setSize, selectedCategory, setSelectedCategory, price, setPrice, colors, setColors, brands, setBrands }): JSX.Element => {

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
            className={`bg-white fixed top-0 bottom-0 w-72 z-50 duration-300 shadow-md pb-4 pt-10 overflow-y-auto px-5 ${show ? "left-0" : "-left-full"
                }`}
        >
            <button onClick={() => setShow(false)} className="absolute top-3 right-3 text-lg text-blue-600">
                <FontAwesomeIcon icon={faClose} />
            </button>
            <Filterbox2 selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} size={size} setSize={setSize} price={price} setPrice={setPrice} colors={colors} setColors={setColors} brands={brands} setBrands={setBrands} />
        </div>
    );
};
