import { SortingDropdown } from "@/components/dropdowns/sortingDropdown"
import { Filterbox2 } from "@/components/filterBoxes/filterBox2"
import { faList, faSliders, faTableCells } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC, useState } from "react"
import { useMediaQuery } from "@mui/material"
import { ProductCard1Horizontal } from "@/components/productCards/productCard1Horizontal"
import { productType1, productType2 } from "@/Types/productPropsTypes"
import { ProductCard3 } from "@/components/productCards/productCard3"
import { SideFilterBox2 } from "@/components/filterBoxes/sideFilterBox2"
import { linkType } from "@/Types/navbarProsTypes"


interface DecorCategoryMainProps {
    category: linkType;
}


export const DecorCategoryMain: FC<DecorCategoryMainProps> = ({
    category,
}): JSX.Element => {
    const [selectedCategory, setSelectedCategory] = useState("")
    const [price, setPrice] = useState("10-114")
    const [size, setSize] = useState("")
    const [sorting, setSorting] = useState("Default Sorting")
    const [colors, setColors] = useState<string[]>([])
    const [brands, setBrands] = useState<string[]>([])
    const [cardType, setCardType] = useState("grid")
    const matches = useMediaQuery("(max-width:640px)");
    const [show, setShow] = useState(false)

    return (category &&
        <div className="px-3 sm:px-5 lg:px-10">
            <button onClick={() => setShow(true)} className="fixed top-40 left-0 z-40 flex lg:hidden items-center gap-x-2 bg-zinc-100 text-sm fw_400 text-blue-700 drop-shadow-md rounded-sm py-3 px-3 justify-center">
                <FontAwesomeIcon icon={faSliders} /> </button>
            <SideFilterBox2 size={size} setSize={setSize} show={show} setShow={setShow} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} price={price} setPrice={setPrice} colors={colors} setColors={setColors} brands={brands} setBrands={setBrands} />
            <div className="flex gap-x-5 pb-10">
                <div className="hidden lg:block w-72 xl:w-80 min-w-72 xl:min-w-80 sticky h-full top-20">
                    <Filterbox2 selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} size={size} setSize={setSize} price={price} setPrice={setPrice} colors={colors} setColors={setColors} brands={brands} setBrands={setBrands} />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between lg:justify-end gap-x-4 p-4 lg:p-0 bg-zinc-100 lg:bg-transparent">
                        <SortingDropdown hoverColor="hover:text-zinc-500" textColor="text-zinc-500" otherClassName="lg:border rounded-sm bg-white lg:bg-transparent" data={["Default Sorting", "Sort By Popularity", "Sort By Average Rating", "Sort By Latest", "Sort By Price: Low to High", "Sort By Price: High to Low"]} value={sorting} setValue={setSorting} />
                        <div className="flex items-center gap-x-4">
                            <select className="block border rounded-sm py-2 lg:py-0 lg:h-10 w-16 fw_400 text-black px-2 outline-none">
                                <option className="px-2">10</option>
                                <option className="px-2">12</option>
                                <option className="px-2">15</option>
                                <option className="px-2">20</option>
                            </select>
                            <div className="hidden sm:flex items-center gap-x-1">
                                <button onClick={() => setCardType("grid")} className={`${cardType === "grid" ? "border-black" : "border-zinc-200"} border h-10 w-10 flex items-center justify-center rounded-sm`}>
                                    <FontAwesomeIcon icon={faTableCells} />
                                </button>
                                <button onClick={() => setCardType("list")} className={`${cardType === "list" ? "border-black" : "border-zinc-200"} border h-10 w-10 flex items-center justify-center rounded-sm`}>
                                    <FontAwesomeIcon icon={faList} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5 pb-10">
                        {cardType === "list" &&
                            <>
                                {!matches ? <div className="grid grid-cols-1 gap-y-10">
                                    {category.products?.map((product, index) => (
                                        <ProductCard1Horizontal highLightedBg="bg-zinc-700 hover:bg-black" bgColor="bg-zinc-100" hoverText="hover:text-zinc-500" productBaseUrl="/tricart-home-decore/product" product={product as unknown as productType1} key={index + 1} />
                                    ))}
                                </div> : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-6">
                                    {category.products?.map((product, index) => (
                                        <ProductCard3 product={product as unknown as productType2} key={index + 1} />
                                    ))}
                                </div>}
                            </>
                        }
                        {cardType === "grid" && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-6">
                            {category.products?.map((product, index) => (
                                <ProductCard3 product={product as unknown as productType2} key={index + 1} />
                            ))}
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}