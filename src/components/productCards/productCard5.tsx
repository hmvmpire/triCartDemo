import Image from "next/image";
import { CustomRating } from "../shared/rating";
import React, { FC } from "react";
import { productType2 } from "@/Types/productPropsTypes";
import { useMediaQuery } from "@mui/material";

interface ProductCard5Props {
    product: productType2;
    size?: string
}

export const ProductCard5: FC<ProductCard5Props> = ({
    product, size
}): JSX.Element => {
    const [show, setShow] = React.useState(false);
    const matches = useMediaQuery("(max-width:640px)");

    return (
        <div className="duration-300 overflow-hidden group flex gap-x-3 lg:gap-x-4 items-center">
            <div className="bg-zinc-100 overflow-hidden relative h-max">
                <Image src={product.img} alt={"product img"} className="hover:scale-110 duration-1000 object-cover object-center h-20 lg:h-24 w-20 lg:w-24 min-w-20 lg:min-w-24" />
            </div>
            <div>
                <h2 className={`text-black sm_one_lines_elipsis text-xs fw_400`}>{product.label}</h2>
                <div className={`mt-1`}>
                    <CustomRating rating={product.rating} color="text-zinc-400" size="text-xxs" />
                </div>
                <p className={`text-sm text-zinc-700 mt-1 fw_600`}>{product.price}</p>
            </div>
        </div>
    )
}