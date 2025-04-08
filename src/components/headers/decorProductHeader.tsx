import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Breadcrumb } from "../shared/breadcrumb"
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome"
import { ImagesCarousel } from "./subComponents/imagesCarousel"
import { CustomRating } from "../shared/rating";
import { FC, useState } from "react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { productType2 } from "@/Types/productPropsTypes";
import { QuantityHandler } from "../shared/quantityHandler";
import { useAddToCartWithQty } from "@/redux/cart/cartHooks";
import { linkType } from "@/Types/navbarProsTypes";
import DecorAccordian from "./subComponents/decorAccordian";


interface DecorProductHeaderProps {
    product: productType2;
    category: linkType
}

export const DecorProductHeader: FC<DecorProductHeaderProps> = ({
    product, category
}): JSX.Element => {
    const [color, setColor] = useState("")
    const [quantity, setQuantity] = useState(1)
    const breadcrumbData = [
        { name: <FontAwesomeIcon icon={faHome} />, link: "/tricart-home-decore" },
        { name: category && category.label, link: category && category.link },
        { name: product && product.label && product.label, link: "/" },
    ]
    const cartAddItem = useAddToCartWithQty();
    return (product &&
        <div className="py-5 mt-0 px-3 m:px-5 lg:px-10">
            <Breadcrumb breadcrumbData={breadcrumbData} />
            <div className="grid grid-cols-12 mt-5 gap-y-8 md:gap-y-0 md:gap-x-5 md:relative pb-14 border-b">
                <div className="col-span-12 md:col-span-6 md:sticky md:h-max md:top-4">
                    {product.images && product.images.length > 0 && <ImagesCarousel bgColor="bg-zinc-100" imagesData={product.images} />}
                </div>
                <div className="col-span-12 md:col-span-6 md:sticky md:h-max md:top-4">
                    <div className="">
                        <h1 className="fw_600 text-3xl text-DECOR_PRIMARY">{product.label}</h1>
                        <div className="flex items-center gap-x-3 mt-2">
                            <CustomRating rating={4.67} color="text-DECOR_PRIMARY" />
                            <p className="text-xs text-zinc-400 fw_400 flex items-cener gap-x-2">3 customer reviews <span>|</span> Add a review</p>
                        </div>
                    </div>
                    <h3 className="fw_600 text-2xl mt-6">{product.price}</h3>
                    <p className="fw_400 text-DECOR_PRIMARY mt-5">{product.description} Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <p className="text-DECOR_PRIMARY fw_600 text-xs flex items-center gap-x-2 mt-5">
                        SKU:
                        <span className="text-DECOR_PRIMARY fw_400">{product.sku}</span>
                    </p>
                    <p className="text-xs text-DECOR_PRIMARY flex items-center gap-x-2 mt-3 fw_600">
                        Category:
                        <span className="text-DECOR_PRIMARY fw_400">{product.categories}</span>
                    </p>
                    <div className="flex items-center gap-x-6 mt-6">
                        <p className="text-DECOR_PRIMARY fw_600 text-sm uppercase">Color:</p>
                        <div className="mt-2 flex items-center gap-x-2">
                            <button onClick={() => setColor("black")} className={`p-1 flex items-center justify-center border rounded-full ${color === "black" ? "border-black" : "border-white"}`}>
                                <div className="h-5 w-5 rounded-full bg-black"></div>
                            </button>
                            <button onClick={() => setColor("red")} className={`p-1 flex items-center justify-center border rounded-full ${color === "red" ? "border-red-500" : "border-white"}`}>
                                <div className="h-5 w-5 rounded-full bg-red-500"></div>
                            </button>
                        </div>
                    </div>
                    <div className="mt-3 flex flex-col gap-y-8">

                        <div className="flex items-center gap-x-3 py-3 border-t border-b">
                            <QuantityHandler quantity={quantity} setQuantity={setQuantity} size="10" />
                            <button onClick={() => cartAddItem({ ...product, qty: quantity })} className="text-white fw_600 rounded-sm h-10 w-36 text-xs bg-DECOR_PRIMARY hover:bg-DECOR_PRIMARY-HOVER uppercase">Add to cart</button>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <div className="flex items-center gap-x-2">
                                <button className="border-zinc-200 border text-DECOR_PRIMARY text-sm w-8 h-8 rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </button>
                                <button className="border-zinc-200 border text-DECOR_PRIMARY text-sm w-8 h-8 rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon={faXTwitter} />
                                </button>
                                <button className="border-zinc-200 border text-DECOR_PRIMARY text-sm w-8 h-8 rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </button>
                            </div>
                            <button className="uppercase text-zinc-800 fw_700 -mt-1 flex items-center gap-x-1 text-sm">
                                <FontAwesomeIcon icon={faHeart} />
                                <span className="text-xs">Add to wishlist</span>
                            </button>
                        </div>
                    </div>
                    <div className="mt-4">
                        <DecorAccordian />
                    </div>
                    <div className="mt-5">
                        <h1 className="fw_600 text-DECOR_PRIMARY tracking-wide">Specs</h1>
                        <div className="mt-3">
                            <div className="bg-zinc-100 fw_600 border-b border-zinc-200 text-DECOR_PRIMARY rounded-sm h-12 text-xs sm:text-sm text-DECOR_PRIMARY px-2 sm:px-5 flex items-center justify-between md:justify-start gap-x-4">
                                <p>Dimentions</p>
                            </div>
                            <div className="grid grid-cols-2 gap-x-4 border-b border-zinc-200">
                                <div className="fw_400 text-DECOR_PRIMARY rounded-sm h-12 text-xs sm:text-sm text-DECOR_PRIMARY px-2 sm:px-5 flex items-center justify-between gap-x-4">
                                    <p>Arm Height</p>
                                    <p className="text-DECOR_PRIMARY fw_600 text-right">27"</p>
                                </div>
                                <div className="fw_400 text-DECOR_PRIMARY rounded-sm h-12 text-xs sm:text-sm text-DECOR_PRIMARY px-2 sm:px-5 flex items-center justify-between gap-x-4">
                                    <p>Interior Seat Width</p>
                                    <p className="text-DECOR_PRIMARY fw_600 text-right">54"</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-x-4 border-b border-zinc-200">
                                <div className="fw_400 text-DECOR_PRIMARY rounded-sm h-12 text-xs sm:text-sm text-DECOR_PRIMARY px-2 sm:px-5 flex items-center justify-between gap-x-4">
                                    <p>Leg Height</p>
                                    <p className="text-DECOR_PRIMARY fw_600 text-right">4"</p>
                                </div>
                                <div className="fw_400 text-DECOR_PRIMARY rounded-sm h-12 text-xs sm:text-sm text-DECOR_PRIMARY px-2 sm:px-5 flex items-center justify-between gap-x-4">
                                    <p>Overall Dimentions</p>
                                    <p className="text-DECOR_PRIMARY fw_600 text-right">62"W x 65"D x 32"H</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-x-4 border-b border-zinc-200">
                                <div className="fw_400 text-DECOR_PRIMARY rounded-sm h-12 text-xs sm:text-sm text-DECOR_PRIMARY px-2 sm:px-5 flex items-center justify-between gap-x-4">
                                    <p>Product Weight</p>
                                    <p className="text-DECOR_PRIMARY fw_600 text-right">200Lbs</p>
                                </div>
                                <div className="fw_400 text-DECOR_PRIMARY rounded-sm h-12 text-xs sm:text-sm text-DECOR_PRIMARY px-2 sm:px-5 flex items-center justify-between gap-x-4">
                                    <p>Seat Depth</p>
                                    <p className="text-DECOR_PRIMARY fw_600 text-right">53"</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-x-4 border-b border-zinc-200">
                                <div className="fw_400 text-DECOR_PRIMARY rounded-sm h-12 text-xs sm:text-sm text-DECOR_PRIMARY px-2 sm:px-5 flex items-center justify-between gap-x-4">
                                    <p>Seat Height</p>
                                    <p className="text-DECOR_PRIMARY fw_600 text-right">17"</p>
                                </div>
                            </div>
                            <div className="bg-zinc-100 fw_600 border-b border-zinc-200 text-DECOR_PRIMARY rounded-sm h-12 text-xs sm:text-sm text-DECOR_PRIMARY px-2 sm:px-5 flex items-center justify-between md:justify-start gap-x-4">
                                <p>Materials</p>
                            </div>
                            <div className="grid grid-cols-2 gap-x-4">
                                <div className="fw_400 text-DECOR_PRIMARY rounded-sm h-12 text-xs sm:text-sm text-DECOR_PRIMARY px-2 sm:px-5 flex items-center justify-between gap-x-4">
                                    <p>Frame</p>
                                    <p className="text-DECOR_PRIMARY fw_600 text-right">Cerused Oak</p>
                                </div>
                                <div className="fw_400 text-DECOR_PRIMARY rounded-sm h-12 text-xs sm:text-sm text-DECOR_PRIMARY px-2 sm:px-5 flex items-center justify-between gap-x-4">
                                    <p>Seat</p>
                                    <p className="text-DECOR_PRIMARY fw_600 text-right">Hand-Woven Seagrass</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}