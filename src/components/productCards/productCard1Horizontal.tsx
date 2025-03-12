import { productType1 } from "@/Types/productPropsTypes";
import React, { FC } from "react";
import { ImagesCarousel } from "./subComponents/imagesCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBagShopping,
    faSearch,
    faStar,
    faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { DetailsModal } from "./subComponents/detailsModal";
import { CustomRating } from "../shared/rating";
import Link from "next/link";
import Image from "next/image";
import { useCartAddItem } from "@/redux/cart/cartHooks";

interface ProductCard1HorizontalProps {
    product: productType1;
    ishorizontal2?: boolean
    productBaseUrl?: string
    hoverText?: string
    bgColor?: string
    highLightedBg?: string
}

export const ProductCard1Horizontal: FC<ProductCard1HorizontalProps> = ({
    product, ishorizontal2, productBaseUrl, hoverText, bgColor, highLightedBg
}): JSX.Element => {
    const [show, setShow] = React.useState(false);
    const cartAddItem = useCartAddItem();

    return (
        <div style={{ boxShadow: ishorizontal2 ? "0px 0px 20px -7px lightGray" : "" }} className={`relative group flex gap-x-5 p-6 ${bgColor ? bgColor : "bg-white"} ${ishorizontal2 ? "" : "items-center"}`}>
            <DetailsModal show={show} setShow={setShow} product={product} />
            <Link href={productBaseUrl + product.link} className={`border-none outline-none shadow-none w-60 min-w-60 h-60 p-3 relative ${ishorizontal2 ? "bg-zinc-100" : ""}`}>
                {product.tag && (
                    <div className={`rounded-full h-5 uppercase fw_400 flex items-center justify-center px-3 ${highLightedBg} text-white z-30 text-xxs absolute top-4 left-4`}>
                        {product.tag}
                    </div>
                )}
                <Image src={product.images[0]} alt="product image" className="h-full w-full object-contain" />
            </Link>
            <div className="flex flex-col gap-y-2 w-full">
                <p className="text-xs">{product.categories}</p>
                <Link href={productBaseUrl + product.link} className={`border-none outline-none shadow-none fw_600 text-black ${hoverText ? hoverText : "hover:text-blue-500"} text-base one_lines_elipsis`}>
                    {product.label}
                </Link>
                <CustomRating rating={4.5} color="text-zinc-600" />
                <p className="text-zinc-600 two_lines_elipsis text-sm">{product.description} {product.description} {product.description}</p>
                <p className="text-black fw_600 text-lg">
                    {product.price}
                </p>
                <div className="flex gap-x-3">
                    <button
                        onClick={() => cartAddItem(product)}
                        title="Add to cart"
                        className={`drop-shadow-sm text-white  ${highLightedBg} duration-500 h-10 w-10 rounded-full flex items-center justify-center`}
                    >
                        <FontAwesomeIcon icon={faBagShopping} />
                    </button>
                    <button
                        title="Add to wishlist"
                        className={`drop-shadow-sm text-white ${highLightedBg} duration-500 h-10 w-10 rounded-full flex items-center justify-center`}
                    >
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <button
                        onClick={() => setShow(true)}
                        title="Quick View"
                        className={`drop-shadow-sm text-white ${highLightedBg} duration-500 h-10 w-10 rounded-full flex items-center justify-center`}
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
        </div>
    );
};
