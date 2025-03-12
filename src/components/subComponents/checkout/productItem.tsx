import { QuantityHandler } from "@/components/shared/quantityHandler";
import { useDeleteItem, useUpdateCart } from "@/redux/cart/cartHooks";
import { productType1 } from "@/Types/productPropsTypes";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

interface ProductItemProps {
    product: productType1;
    handleUpdate: (val: productType1) => void
}

export const ProductItem: FC<ProductItemProps> = ({
    product, handleUpdate
}): JSX.Element => {
    const [quantity, setQuantity] = useState(1)
    useEffect(() => {
        if (product && product.qty) {
            setQuantity(product.qty)
        }
    }, [product])

    const deleteItem = useDeleteItem()
    const itemPrice = () => {
        if (product.price.toString().includes("–")) {
            const p = product.price.toString().split(" ")
            const q = p[0].split("$")
            return q[1]
        } else {
            return product.price.toString()
        }
    }

    return (
        <div className="flex gap-x-2 py-2">
            <div className="w-16 min-w-16 h-16 relative">
                {product.images && <Image src={product.images[0]} alt="product img" className="w-16 h-16" />}
            </div>
            <div className="flex flex-col gap-y-2 w-full">
                <div className="flex items-start justify-between gap-x-2">
                    <p className="text-sm fw_400 text-black ">{product.label}</p>
                    <button title="Remove item from cart" onClick={() => deleteItem(product.label)} className="h-5 w-5 flex items-center justify-center text-xs border text-zinc-600 hover:text-red-500 rounded-full bg-white drop-shadow-sm"><FontAwesomeIcon icon={faClose} /></button>
                </div>
                <div className="flex items-center gap-x-2 justify-between">
                    <QuantityHandler quantity={quantity} size="6" setQuantity={(val => { setQuantity(val); handleUpdate({ ...product, qty: val }) })} />
                    {product.price && <p className="fw_600 text-black text-sm">
                        ${parseInt(itemPrice()) * (product.qty ?? 0)}
                    </p>}
                </div>
            </div>
        </div>
    )
}