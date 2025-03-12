import { CategoriesDropdown } from "@/components/dropdowns/categoriesDropdown"
import { CheckboxFilterDropdown } from "@/components/dropdowns/checkboxFilterDropdown"
import { PriceRangeFilterDropdown } from "@/components/dropdowns/priceRangeFilterDropdown"
import { SortingDropdown } from "@/components/dropdowns/sortingDropdown"
import { FC, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSliders } from "@fortawesome/free-solid-svg-icons/faSliders"
import { SideFilterBox1 } from "./sideFilterBox1"
import { faList, faTableCells } from "@fortawesome/free-solid-svg-icons"

interface FilterBox1Props {
    cardType: string
    setCardType: (cardType: string) => void;
}


export const FilterBox1: FC<FilterBox1Props> = ({
    cardType, setCardType
}): JSX.Element => {
    const [selectedCategory, setSelectedCategory] = useState("")
    const [price, setPrice] = useState("")
    const [sorting, setSorting] = useState("Default Sorting")
    const [colors, setColors] = useState<string[]>([])
    const [brands, setBrands] = useState<string[]>([])
    const [show, setShow] = useState(false)
    return (
        <div className="container1 flex flex-wrap items-center justify-between gap-5 my-5 p-4 bg-white rounded-md">
            <div className="hidden lg:flex items-center gap-x-4">
                <CategoriesDropdown value={selectedCategory} setValue={setSelectedCategory} />
                <PriceRangeFilterDropdown value={price} setValue={setPrice} />
                <CheckboxFilterDropdown data={["Black", "Green", "White", "Red"]} value={colors} setValue={setColors} label="Select Colors" />
                <CheckboxFilterDropdown data={["Apple", "Sumsang", "Vivo", "Infinix"]} value={brands} setValue={setBrands} label="Select Brands" />
            </div>
            <button onClick={() => setShow(true)} className="flex lg:hidden items-center gap-x-2 bg-zinc-100 text-xs fw_400 rounded-sm py-3 px-3 justify-center">
                <FontAwesomeIcon icon={faSliders} /> <span>Filters</span> </button>
            <SideFilterBox1 show={show} setShow={setShow} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} price={price} setPrice={setPrice} colors={colors} setColors={setColors} brands={brands} setBrands={setBrands} />
            <div className="flex items-center gap-x-4">
                <SortingDropdown otherClassName="bg-zinc-100 rounded-md" hoverColor="hover:text-ELECTRONICS_PRIMARY-HOVER" textColor="text-ELECTRONICS_PRIMARY-HOVER" data={["Default Sorting", "Sort By Popularity", "Sort By Average Rating", "Sort By Latest", "Sort By Price: Low to High", "Sort By Price: High to Low"]} value={sorting} setValue={setSorting} />
                <select className="hidden sm:block bg-zinc-100 rounded-md py-2 lg:py-0 lg:h-10 w-16 fw_400 text-black px-2 outline-none">
                    <option className="px-2">10</option>
                    <option className="px-2">12</option>
                    <option className="px-2">15</option>
                    <option className="px-2">20</option>
                </select>
                <div className="hidden sm:flex items-center gap-x-1">
                    <button onClick={() => setCardType("grid")} className="bg-zinc-100 h-10 w-10 flex items-center justify-center rounded-md">
                        <FontAwesomeIcon icon={faTableCells} className={cardType === "grid" ? "text-ELECTRONICS_PRIMARY-HOVER" : ""} />
                    </button>
                    <button onClick={() => setCardType("list")} className="bg-zinc-100 h-10 w-10 flex items-center justify-center rounded-md">
                        <FontAwesomeIcon icon={faList} className={cardType === "list" ? "text-ELECTRONICS_PRIMARY-HOVER" : ""} />
                    </button>
                </div>
            </div>
        </div>
    )
}