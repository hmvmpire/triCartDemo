import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Breadcrumb } from "../shared/breadcrumb"
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome"
import { CustomRating } from "../shared/rating";
import { FC, useState } from "react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { productType2 } from "@/Types/productPropsTypes";
import { QuantityHandler } from "../shared/quantityHandler";
import { useAddToCartWithQty } from "@/redux/cart/cartHooks";
import { ImagesCarousel3 } from "./subComponents/imagesCarousel3";
import { linkType } from "@/Types/navbarProsTypes";


interface FashionProductHeaderProps {
    product: productType2;
    category: linkType
}

export const FashionProductHeader: FC<FashionProductHeaderProps> = ({
    product, category
}): JSX.Element => {
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")
    const [quantity, setQuantity] = useState(1)
    const breadcrumbData = [
        { name: <FontAwesomeIcon icon={faHome} />, link: "/tricart-fashion" },
        { name: category && category.label, link: category && category.link },
        { name: product && product.label && product.label, link: "/" },
    ]
    const cartAddItem = useAddToCartWithQty();

    return (product &&
        <div className="py-5 mt-0">
            <div className="container3">
                <Breadcrumb breadcrumbData={breadcrumbData} />
                <div className="grid grid-cols-12 mt-5 gap-y-8 md:gap-y-0 md:gap-x-5 md:relative">
                    <div className="col-span-12 md:col-span-6 md:sticky md:h-max md:top-4">
                        {product.images && product.images.length > 0 && <ImagesCarousel3 imagesData={product.images} />}
                    </div>
                    <div className="col-span-12 md:col-span-6 md:sticky md:h-max md:top-4">
                        <div className="">
                            <h1 className="fw_600 text-3xl text-black">{product.label}</h1>
                            <div className="flex items-center gap-x-3 mt-2">
                                <CustomRating rating={4.67} color="text-ELECTRONICS_PRIMARY-HOVER" />
                                <p className="text-xs text-zinc-400 fw_400 flex items-cener gap-x-2">3 customer reviews <span>|</span> Add a review</p>
                            </div>
                        </div>
                        <h3 className="fw_600 text-2xl mt-6">{product.price}</h3>
                        <p className="fw_400 text-zinc-500 mt-5">{product.description} Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p className="text-black fw_600 text-xs flex items-center gap-x-2 mt-5">
                            SKU:
                            <span className="text-zinc-600 fw_400">1234567890</span>
                        </p>
                        <p className="text-xs text-black flex items-center gap-x-2 mt-3 fw_600">
                            Category:
                            <span className="text-zinc-600 fw_400">{product.categories}</span>
                        </p>
                        <div className="flex items-center gap-x-6 mt-6">
                            <p className="text-black fw_600 text-sm uppercase w-16">Color:</p>
                            <select value={color} onChange={(e) => setColor(e.target.value)} className="border pl-2 py-2 text-sm w-48 outline-none">
                                <option>Choose an option</option>
                                <option>Black</option>
                                <option>Yellow</option>
                                <option>Red</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-x-6 mt-2">
                            <p className="text-black fw_600 text-sm uppercase w-16">Size:</p>
                            <select value={size} onChange={(e) => setSize(e.target.value)} className="border pl-2 py-2 text-sm w-48 outline-none">
                                <option>Choose an option</option>
                                <option>Small</option>
                                <option>Medium</option>
                                <option>Large</option>
                            </select>
                        </div>
                        <div className="mt-6 flex flex-col gap-y-8">

                            <div className="flex items-center gap-x-3 py-4 border-t border-b">
                                <QuantityHandler quantity={quantity} setQuantity={setQuantity} size="10" />
                                <button onClick={() => cartAddItem({ ...product, qty: quantity })} className="text-white fw_600 rounded-sm h-10 w-36 text-xs bg-fashionPrimary hover:bg-indigo-600 uppercase">Add to cart</button>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <div className="flex items-center gap-x-2">
                                    <button className="border-zinc-200 border text-black text-sm w-8 h-8 rounded-full flex items-center justify-center">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </button>
                                    <button className="border-zinc-200 border text-black text-sm w-8 h-8 rounded-full flex items-center justify-center">
                                        <FontAwesomeIcon icon={faXTwitter} />
                                    </button>
                                    <button className="border-zinc-200 border text-black text-sm w-8 h-8 rounded-full flex items-center justify-center">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </button>
                                </div>
                                <button className="uppercase text-zinc-800 fw_700 -mt-1 flex items-center gap-x-1 text-sm">
                                    <FontAwesomeIcon icon={faHeart} />
                                    <span className="text-xs">Add to wishlist</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}