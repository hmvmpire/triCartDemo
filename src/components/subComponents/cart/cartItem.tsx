import { QuantityHandler } from "@/components/shared/quantityHandler";
import { useDeleteItem, useUpdateCart } from "@/redux/cart/cartHooks";
import { productType1, productType2 } from "@/Types/productPropsTypes";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

interface CartItemProps {
    product: productType1 | productType2;
    handleUpdate: (val: productType1 | productType2) => void
}

export const CartItem: FC<CartItemProps> = ({
    product, handleUpdate
}): JSX.Element => {
    const [quantity, setQuantity] = useState(1)
    useEffect(() => {
        if (product && product.qty) {
            setQuantity(product.qty)
        }
    }, [product])

    const deleteItem = useDeleteItem()
    const allsubtotal = () => {
        if (product.price.toString().includes("–")) {
            const p = product.price.toString().split(" ")
            const q = p[0].split("$")
            return parseFloat(q[1]) * (product.qty ?? 0)
        } else {
            return parseInt(product.price as string) * (product.qty ?? 0)
        }
    };


    const itemPrice = () => {
        if (product.price.toString().includes("–")) {
            const p = product.price.toString().split(" ")
            const q = p[0].split("$")
            return q[1]
        } else {
            return product.price
        }
    }
    return (
        <div className="grid grid-cols-12 border-b py-3">
            <div className="col-span-6 flex items-center gap-x-2">
                <div className="w-20 min-w-20 h-20 relative">
                    <button title="Remove item from cart" onClick={() => deleteItem(product.label)} className="h-5 w-5 flex items-center justify-center text-xs border text-zinc-600 hover:text-red-500 rounded-full absolute -top-2 -right-2 bg-white  drop-shadow-md"><FontAwesomeIcon icon={faClose} /></button>
                    {product.images && <Image src={product.images[0]} alt="product img" className="w-20 h-20" />}
                </div>
                <p className="text-sm fw_600 text-black ">{product.label}</p>
            </div>
            <div className="col-span-2 flex items-center justify-center text-sm">
                ${itemPrice()}
            </div>
            <div className="col-span-2 flex items-center justify-center">
                <QuantityHandler quantity={quantity} size="8" setQuantity={(val => { setQuantity(val); handleUpdate({ ...product, qty: val }) })} />
            </div>
            <div className="col-span-2 flex items-center justify-center fw_600 text-black text-sm">
                ${allsubtotal()}
            </div>
        </div>
    )
}