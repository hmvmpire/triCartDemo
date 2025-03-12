import { productType2 } from "@/Types/productPropsTypes";
import Image from "next/image";
import React, { FC } from "react";
import { CustomRating } from "../shared/rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons/faHeart";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons/faArrowRightLong";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { DetailsModal } from "./subComponents/detailsModal";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";

interface ProductCard2Props {
    product: productType2;
    textColor?: string
}

export const ProductCard2: FC<ProductCard2Props> = ({
    product,
    textColor
}): JSX.Element => {
    const [show, setShow] = React.useState(false);
    const matches3 = useMediaQuery("(max-width:1130px)");

    return (
        <div className="group hover:-mt-4 relative z-0 hover:z-20 hover:bg-white duration-300 hover:drop-shadow-xl p-2 overflow-hidden hover:overflow-visible h-max">
            <div className="bg-zinc-100 overflow-hidden relative">
                {product.tag && (
                    <div className="h-5 uppercase fw_600 flex items-center justify-center px-3 bg-TOOLS_PRIMARY text-white z-30 text-xxs absolute top-2 left-2">
                        {product.tag}
                    </div>
                )}
                <Link href={`/tricart-tools/product${product.link}`} className="border-none outline-none shdaow-none">
                    <Image src={product.img} alt={"product img"} className="hover:scale-110 duration-1000 object-contain h-72" />
                </Link>
            </div>
            <div className="mt-2">
                <p className={`text-xxs ${textColor ? textColor : "text-zinc-400"} fw_400 sm_one_lines_elipsis uppercase`}>{product.categories}</p>
                <Link href={`/tricart-tools/product${product.link}`} className={`${textColor ? textColor : "text-black"} hover:text-TOOLS_PRIMARY border-none outline-none shdaow-none text-sm sm:text-base fw_400 my-1`}>{product.label}</Link>
                <CustomRating rating={product.rating} color={textColor ? textColor : "text-zinc-400"} />
                <p className={`text-sm sm:text-lg fw_600 mt-2 ${textColor ? textColor : ""}`}>{product.price}</p>
                <div className={`top-full left-0 right-0 absolute group-hover:bg-white -mt-1 h-32 w-full px-3`}>
                    <div className="group-hover:mt-1 mt-3 duration-300">
                        <p className="text-xs three_lines_elipsis">{product.description}</p>
                        <div className="mt-2  flex items-center gap-x-1">
                            <button className="bg-zinc-100 hover:bg-black hover:text-white text-xl h-10 w-10 min-w-10 text-zinc-600 duration-300 flex items-center justify-center">
                                <FontAwesomeIcon icon={faHeart} />
                            </button>
                            <Link href={`/tricart-tools/product${product.link}`} className="border-none outline-none shadow-none bg-zinc-800 hover:bg-black h-10 w-full text-white duration-300 flex items-center justify-center gap-x-3">
                                <FontAwesomeIcon icon={faArrowRightLong} className="text-xl" />
                                {matches3 ? "" : "Select Options"}
                            </Link>
                            <button onClick={() => setShow(true)} className="bg-zinc-100 hover:bg-black hover:text-white text-xl h-10 w-10 min-w-10 text-zinc-600 duration-300 flex items-center justify-center">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                            <DetailsModal show={show} setShow={setShow} product={product} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}