import Image from "next/image";
import { CustomRating } from "../shared/rating";
import React, { FC } from "react";
import { productType2 } from "@/Types/productPropsTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { DetailsModal } from "./subComponents/detailsModal";
import { useMediaQuery } from "@mui/material";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons/faArrowRightLong";
import Link from "next/link";
import { useCartAddItem } from "@/redux/cart/cartHooks";

interface ProductCard4Props {
    product: productType2;
    size?: string
}

export const ProductCard4: FC<ProductCard4Props> = ({
    product, size
}): JSX.Element => {
    const [show, setShow] = React.useState(false);
    const matches = useMediaQuery("(max-width:640px)");
    const cartAddItem = useCartAddItem();

    return (
        <div className="duration-300 overflow-hidden group border border-white hover:border-zinc-200">
            <div className="bg-zinc-100 overflow-hidden relative">
                <button className="text-black flex items-center justify-center gap-x-3 z-30 text-sm group-hover:bottom-0 -bottom-full duration-300 bg-fashionPrimary-MED_LIGHT hover:gap-x-6 group py-2 w-full absolute left-0 right-0">View Details
                    <FontAwesomeIcon icon={faArrowRightLong} className="text-sm" />
                </button>
                {product.tag && (
                    <div className="h-5 uppercase fw_400 flex items-center justify-center px-3 bg-fashionPrimary text-white z-30 text-xxs absolute top-2 left-2">
                        {product.tag}
                    </div>
                )}
                <div className={`absolute top-2 sm:top-4 right-2 sm:right-4 duration-300 ${matches ? "z-30" : "z-0 scale-0 group-hover:scale-100 group-hover:z-30"} flex flex-col gap-y-1 sm:gap-y-3`}>
                    <button
                        onClick={() => cartAddItem(product)}
                        title="Add to cart"
                        className="bg-fashionPrimary text-xs sm:text-base drop-shadow-sm hover:bg-fashionPrimary-HOVER text-white duration-500 h-8 w-8 rounded-full flex items-center justify-center"
                    >
                        <FontAwesomeIcon icon={faBagShopping} />
                    </button>
                    <button
                        title="Add to wishlist"
                        className="bg-fashionPrimary text-xs sm:text-base drop-shadow-sm hover:bg-fashionPrimary-HOVER text-white duration-500 h-8 w-8 rounded-full flex items-center justify-center"
                    >
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <button
                        onClick={() => setShow(true)}
                        title="Quick View"
                        className="bg-fashionPrimary text-xs sm:text-base drop-shadow-sm hover:bg-fashionPrimary-HOVER text-white duration-500 h-8 w-8 rounded-full flex items-center justify-center"
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <DetailsModal show={show} setShow={setShow} product={product} />
                <Link href={`/tricart-fashion/product${product.link}`} className="border-none outline-none shdaow-none">
                    <Image src={product.img} alt={"product img"} className="hover:scale-110 duration-1000 h-60 object-cover w-full" />
                </Link>
            </div>
            <div className="pt-2 pb-3 flex flex-col items-center">
                <p className={`${size === "lg" ? `text-xxs sm:text-sm lg:text-base mb-2 ${matches ? "sm_one_lines_elipsis" : "one_lines_elipsis"}` : "text-xxs mb-1 sm_one_lines_elipsis"} text-zinc-400 fw_400 text-center`}>{product.categories}</p>
                <Link href={`/tricart-fashion/product${product.link}`} className={`border-none outline-none shdaow-none text-black ${matches ? "sm_one_lines_elipsis" : "one_lines_elipsis"} text-xs sm:text-sm fw_400 text-center`}>{product.label}</Link>
                <div className={`${size === "lg" ? "mt-3" : "mt-1"} flex justify-center`}>
                    <CustomRating rating={product.rating} color="text-zinc-400" size={size === "lg" ? "text-base" : ""} />
                </div>
                <p className={`${size === "lg" ? "text-sm sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-zinc-800 mt-3" : "text-sm sm:text-base text-zinc-700 mt-1"} fw_600 text-center`}>{product.price}</p>
            </div>
        </div>
    )
}