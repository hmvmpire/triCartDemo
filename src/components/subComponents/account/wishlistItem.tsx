import { DetailsModal } from "@/components/productCards/subComponents/detailsModal";
import { productType1, productType2 } from "@/Types/productPropsTypes";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface WishlistItemProps {
    product: productType1 | productType2;
    handleDelete: (val: string) => void;
}

export const WishlistItem: FC<WishlistItemProps> = ({
    product, handleDelete
}): JSX.Element => {
    const [show, setShow] = React.useState(false);

    const nav1Route =
        typeof window !== "undefined" &&
        window.location.pathname.includes("/tricart-electronics")
    const nav2Route = typeof window !== "undefined" &&
        window.location.pathname.includes("/tricart-tools")
    const nav3Route = typeof window !== "undefined" &&
        window.location.pathname.includes("/tricart-home-decore")
    const nav4Route = typeof window !== "undefined" &&
        window.location.pathname.includes("/tricart-fashion")

    const templateBasePath = nav1Route ? "/tricart-electronics" : nav2Route ? "/tricart-tools" : nav3Route ? "/tricart-home-decore" : nav4Route ? "/tricart-fashion" : ""


    return (
        <div className="grid grid-cols-12 border-b py-3">
            <div className="col-span-5 flex items-center gap-x-2">
                <div className="w-20 min-w-20 h-20 relative">
                    <button onClick={() => handleDelete(product.label)} title="Remove item from cart" className="h-5 w-5 flex items-center justify-center text-xs border text-zinc-600 hover:text-red-500 rounded-full absolute -top-2 -right-2 bg-white  drop-shadow-md"><FontAwesomeIcon icon={faClose} /></button>
                    {product.images && <Image src={product.images[0]} alt="product img" className="w-20 h-20 object-cover" />}
                </div>
                <p className="text-sm fw_600 text-black text-center">{product.label}</p>
            </div>
            <div className="col-span-2 flex items-center justify-center text-sm text-center">
                ${product.price}
            </div>
            <div className="col-span-2 flex items-center justify-center fw_600 text-center">
                In Stock
            </div>
            <div className="col-span-3 flex flex-col gap-y-2 items-center">
                <Link href={templateBasePath + "/product" +  product.link} className="border-none outline-none shadow-none flex items-center justify-center bg-zinc-700 hover:bg-black rounded-sm duration-300 text-white h-10 px-5 w-max fw_600 uppercase text-xs">Select Options</Link>
                <button onClick={() => setShow(true)} className="bg-zinc-100 hover:bg-zinc-200 duration-300 text-black h-10 rounded-sm px-5 w-max fw_600 uppercase text-xs">Quick View</button>
            </div>
            <DetailsModal show={show} setShow={setShow} product={product} />
        </div>
    )
}