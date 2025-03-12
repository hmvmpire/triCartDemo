import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Breadcrumb } from "../shared/breadcrumb"
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome"
import { ImagesCarousel } from "./subComponents/imagesCarousel"
import { CustomRating } from "../shared/rating";
import { FC, useState } from "react";
import { QuantityHandler2 } from "../shared/quantityHandler2";
import { faCalendar, faHeart, faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { useMediaQuery } from "@mui/material";
import { useAddToCartWithQty } from "@/redux/cart/cartHooks";
import { productType1 } from "@/Types/productPropsTypes";
import moment from "moment";
import { CategoryPropType } from "@/Types/categoryPropsTypes";


interface ElectronicsProductHeaderProps {
    product: productType1;
    category: CategoryPropType;
}


export const ElectronicsProductHeader: FC<ElectronicsProductHeaderProps> = ({
    product, category
}): JSX.Element => {
    const [color, setColor] = useState("")
    const [quantity, setQuantity] = useState(0)
    const matches = useMediaQuery("(max-width:1130px)");
    const matches2 = useMediaQuery("(max-width:1024px)");
    const breadcrumbData = [
        { name: <FontAwesomeIcon icon={faHome} />, link: "/" },
        { name: category && category.label, link: category && category.link },
        { name: product && product.label, link: "/" },
    ]
    const cartAddItem = useAddToCartWithQty();

    return (product &&
        <div className="border-t py-5 mt-0">
            <div className="container1">
                <Breadcrumb breadcrumbData={breadcrumbData} />
                <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-y-8 md:gap-y-0 md:gap-x-5 md:relative">
                    <div className="md:sticky md:h-max md:top-4">
                        {product && product.images && product.images.length > 0 && <ImagesCarousel imagesData={product.images} />}
                    </div>
                    <div className="md:sticky md:h-max md:top-4">
                        <div className="">
                            <h1 className="fw_700 text-3xl text-black">{product.label}</h1>
                            <div className="flex items-center gap-x-3 mt-2">
                                <CustomRating rating={4.67} color="text-ELECTRONICS_PRIMARY-HOVER" />
                                <p className="text-xs text-zinc-400 fw_400 flex items-cener gap-x-2">3 customer reviews <span>|</span> Add a review</p>
                            </div>
                        </div>
                        <h3 className="fw_600 text-2xl mt-6">${product.price}</h3>
                        <p className="fw_400 text-zinc-500 mt-5">{product.description}</p>
                        <p className="text-xs flex items-center gap-x-1 mt-5 text-zinc-500 fw_400">
                            SKU:
                            <span className="text-black fw_700">{product.sku}</span>
                        </p>
                        <p className="text-xs flex items-center gap-x-1 mt-3 text-zinc-500 fw_400">
                            Category:
                            <span className="text-black fw_700">{product.categories}</span>
                        </p>
                        <div className="bg-ELECTRONICS_PRIMARY-LIGHT w-full rounded-lg px-8 py-10 mt-5 flex flex-col items-center gap-y-8">
                            <div className="flex items-center flex-col">
                                <p className="text-black fw_600 text-base">Color:</p>
                                <div className="mt-2 flex items-center gap-x-3">
                                    <button onClick={() => setColor("black")} className={`p-1 border border-black rounded-full ${color === "black" ? "border-opacity-100" : "border-opacity-0"}`}>
                                        <div className="h-8 w-8 rounded-full bg-black"></div>
                                    </button>
                                    <button onClick={() => setColor("white")} className={`p-1 border border-black rounded-full ${color === "white" ? "border-opacity-100" : "border-opacity-0"}`}>
                                        <div className="h-8 w-8 rounded-full bg-white"></div>
                                    </button>
                                </div>
                            </div>
                            <QuantityHandler2 quantity={quantity} setQuantity={setQuantity} size="12" />
                            <button onClick={() => cartAddItem({ ...product, qty: quantity })} className="text-white fw_600 rounded-full h-14 w-4/5 sm:w-1/2 mx-auto bg-ELECTRONICS_PRIMARY hover:bg-ELECTRONICS_PRIMARY-HOVER uppercase">Add to cart</button>
                            <button className="uppercase text-zinc-500 -mt-1 flex items-center gap-x-1 text-sm">
                                <FontAwesomeIcon icon={faHeart} />
                                <span className="text-xs">Add to wishlist</span>
                            </button>
                        </div>
                        <div className="mt-5 flex flex-col sm:flex-row items-center gap-y-3 sm:gap-y-0 sm:gap-x-4 justify-between">
                            <div className="flex gap-x-2">
                                <FontAwesomeIcon icon={faCalendar} className="text-black text-xl" />
                                <span className="text-zinc-500 fw_400 text-sm xl:text-base">
                                    Order now and your order ships by <span className="fw_600 text-black">{moment().add(5, "days").format("ddd, MMM DD")}</span>
                                </span>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <button className="bg-ELECTRONICS_PRIMARY hover:bg-ELECTRONICS_PRIMARY-HOVER text-white text-sm w-8 h-8 rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </button>
                                <button className="bg-ELECTRONICS_PRIMARY hover:bg-ELECTRONICS_PRIMARY-HOVER text-white text-sm w-8 h-8 rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon={faXTwitter} />
                                </button>
                                <button className="bg-ELECTRONICS_PRIMARY hover:bg-ELECTRONICS_PRIMARY-HOVER text-white text-sm w-8 h-8 rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-y-3 sm:gap-y-0 sm:gap-x-3 lg:gap-x-5 mt-6">
                            <div className="bluish_bg2 rounded-md flex items-center gap-x-2 justify-center w-max px-2 h-8">
                                <FontAwesomeIcon icon={faQuestionCircle} />
                                <span className={`${matches ? "text-xxs" : "text-xs"} fw_600`}>Need Help? Chat with an Expert</span>
                            </div>
                            <div className="rounded-full pl-2 lg:pl-3 overflow-hidden border border-lime-500 w-max flex items-center gap-x-1 lg:gap-x-3">
                                <FontAwesomeIcon icon={faPhone} className="text-xs lg:text-sm" />
                                <span className="fw_600 text-xs lg:text-sm">1234567890</span>
                                <button className={`bg-lime-500 hover:bg-lime-400 duration-300 text-white fw_400 ${matches2 ? "text-xxs w-16 h-6" : "text-xs w-20 h-8"} rounded-full fw_600`}>Call US</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}