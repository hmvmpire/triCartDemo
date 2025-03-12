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

interface ProductCard3Props {
    product: productType2;
    size?: string
}

export const ProductCard3: FC<ProductCard3Props> = ({
    product, size
}): JSX.Element => {
    const [show, setShow] = React.useState(false);
    const matches = useMediaQuery("(max-width:640px)");
    const cartAddItem = useCartAddItem();

    return (
        <div className="duration-300 px-1 sm:px-2 overflow-hidden group">
            <div className="bg-DECOR_PRIMARY-LIGHT overflow-hidden relative">
                <button className="text-white flex items-center justify-center gap-x-3 z-30 text-sm group-hover:bottom-0 -bottom-full duration-300 bg-DECOR_PRIMARY hover:bg-DECOR_PRIMARY-HOVER py-2 w-full absolute left-0 right-0">View Details
                    <FontAwesomeIcon icon={faArrowRightLong} className="text-sm" />
                </button>
                {product.tag && (
                    <div className="h-5 uppercase fw_400 flex items-center justify-center px-3 bg-DECOR_PRIMARY text-white z-30 text-xxs absolute top-2 left-2">
                        {product.tag}
                    </div>
                )}
                <div className="absolute top-4 right-4 z-0 duration-300 scale-0 group-hover:scale-100 group-hover:z-30 flex flex-col gap-y-3">
                    <button
                        onClick={() => cartAddItem(product)}
                        title="Add to cart"
                        className="bg-white drop-shadow-sm border hover:border-DECOR_PRIMARY hover:bg-DECOR_PRIMARY text-zinc-600 hover:text-white duration-500 h-10 w-10 rounded-full flex items-center justify-center"
                    >
                        <FontAwesomeIcon icon={faBagShopping} />
                    </button>
                    <button
                        title="Add to wishlist"
                        className="bg-white drop-shadow-sm border hover:border-DECOR_PRIMARY hover:bg-DECOR_PRIMARY text-zinc-600 hover:text-white duration-500 h-10 w-10 rounded-full flex items-center justify-center"
                    >
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <button
                        onClick={() => setShow(true)}
                        title="Quick View"
                        className="bg-white drop-shadow-sm border hover:border-DECOR_PRIMARY hover:bg-DECOR_PRIMARY text-zinc-600 hover:text-white duration-500 h-10 w-10 rounded-full flex items-center justify-center"
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <DetailsModal show={show} setShow={setShow} product={product} />
                <Link href={`/tricart-home-decore/product${product.link}`} className="border-none outline-none shdaow-none">
                    <Image src={product.img} alt={"product img"} className={`hover:scale-110 duration-1000 ${size === "lg" ? "h-full" : "h-72 sm:h-80"} object-contain w-full`} />
                </Link>
            </div>
            <div className="mt-2">
                <p className={`${size === "lg" ? `text-xxs sm:text-sm lg:text-base mb-2 ${matches ? "sm_one_lines_elipsis" : "one_lines_elipsis"}` : "text-xxs mb-1 sm_one_lines_elipsis"} text-zinc-400 fw_400`}>{product.categories}</p>
                <Link href={`/tricart-home-decore/product${product.link}`} className={`border-none outline-none shdaow-none text-DECOR_PRIMARY ${size === "lg" ? "text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl fw_600" : "text-sm sm:text-base fw_400"} one_lines_elipsis`}>{product.label}</Link>
                <div className={`${size === "lg" ? "mt-3" : "mt-1"}`}>
                    <CustomRating rating={product.rating} color="text-DECOR_PRIMARY " size={size === "lg" ? "text-base" : ""} />
                </div>
                <p className="mt-2 text-zinc-400 text-sm font-thin">SKU: {product.sku}</p>
                <p className={`${size === "lg" ? "text-md sm:text-md py-0 lg:text-2xl xl:text-4xl 2xl:text-4xl text-DECOR_PRIMARY mt-3" : "text-sm sm:text-lg text-DECOR_PRIMARY align-top"} fw_600`}>
                    {/* <span className="text-xs align-top">$</span> */}
                    {product.price}
                </p>

            </div>
        </div>
    )
}