import { SortingDropdown } from "@/components/dropdowns/sortingDropdown"
import { Filterbox2 } from "@/components/filterBoxes/filterBox2"
import { Breadcrumb } from "@/components/shared/breadcrumb"
import { faHome, faList, faSliders, faTableCells } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC, useState } from "react"
import { useMediaQuery } from "@mui/material"
import { ProductCard1Horizontal } from "@/components/productCards/productCard1Horizontal"
import { productType1, productType2 } from "@/Types/productPropsTypes"
import { SideFilterBox2 } from "@/components/filterBoxes/sideFilterBox2"
import { ProductCard2 } from "@/components/productCards/productCard2"
import { linkType, subLinkType1, subLinkType2 } from "@/Types/navbarProsTypes"

interface ToolsCategoryMainProps {
    category: linkType;
    subCategory: subLinkType1 | subLinkType2;
}


export const ToolsCategoryMain: FC<ToolsCategoryMainProps> = ({
    category, subCategory
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

    const breadcrumbData = [
        { name: <FontAwesomeIcon icon={faHome} />, link: "/" },
        { name: (subCategory && 'label' in subCategory) ? subCategory.label : (subCategory && 'categoryName' in subCategory) ? subCategory.categoryName : category && category.label, link: "/" },
    ]

    return (category &&
        <div className="container1">
            <div className="relative w-full bg-center bg-cover bg-no-repeat mb-4 rounded-lg" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${category.img?.src || ''})` }}>
                <div className="absolute top-5 left-5 z-20">
                    <Breadcrumb hoverColor="hover:text-TOOLS_PRIMARY-HOVER" linkColor="text-TOOLS_PRIMARY" breadcrumbData={breadcrumbData} />
                </div>
                <div className=" px-4 h-72 flex gap-y-3 flex-col justify-center items-center relative">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl fw_700 text-TOOLS_PRIMARY">{category.label}</h1>
                    {category?.products && <p className="text-white text-smtext-center">{category?.products[0].description}</p>}
                </div>
            </div>
            <button onClick={() => setShow(true)} className="fixed top-24 left-0 z-40 flex lg:hidden items-center gap-x-2 bg-zinc-100 text-sm fw_400 text-TOOLS_PRIMARY drop-shadow-md rounded-sm py-3 px-3 justify-center">
                <FontAwesomeIcon icon={faSliders} /> </button>
            <SideFilterBox2 size={size} setSize={setSize} show={show} setShow={setShow} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} price={price} setPrice={setPrice} colors={colors} setColors={setColors} brands={brands} setBrands={setBrands} />
            <div className="flex gap-x-5 pb-10">
                <div className="hidden lg:block w-72 xl:w-80 min-w-72 xl:min-w-80 sticky h-full top-20">
                    <Filterbox2 selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} size={size} setSize={setSize} price={price} setPrice={setPrice} colors={colors} setColors={setColors} brands={brands} setBrands={setBrands} />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between p-4 lg:p-0 bg-zinc-200 lg:bg-transparent">
                        <SortingDropdown hoverColor="hover:text-TOOLS_PRIMARY" textColor="text-TOOLS_PRIMARY" otherClassName="lg:border rounded-sm bg-white lg:bg-transparent" data={["Default Sorting", "Sort By Popularity", "Sort By Average Rating", "Sort By Latest", "Sort By Price: Low to High", "Sort By Price: High to Low"]} value={sorting} setValue={setSorting} />
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
                        {cardType === "list" && <>{!matches ? <div className="grid grid-cols-1 gap-y-10">
                            {category.products?.map((product, index) => (
                                <ProductCard1Horizontal highLightedBg="bg-TOOLS_PRIMARY hover:bg-TOOLS_PRIMARY-HOVER" hoverText="hover:text-TOOLS_PRIMARY" productBaseUrl="/tricart-tools/product" product={product as unknown as productType1} key={index + 1} ishorizontal2={true} />
                            ))}
                        </div> : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-6">
                            {category.products?.map((product, index) => (
                                <ProductCard2 product={product as unknown as productType2} key={index + 1} />
                            ))}
                        </div>}
                        </>
                        }
                        {cardType === "grid" && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-6">
                            {category.products?.map((product, index) => (
                                <ProductCard2 product={product as unknown as productType2} key={index + 1} />
                            ))}
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}