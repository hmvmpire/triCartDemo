import { useCart, useEmptyCart, useGetCartItems, useUpdateCart } from "@/redux/cart/cartHooks";
import { productType1, productType2 } from "@/Types/productPropsTypes";
import { useEffect } from "react";
import { CartItem } from "./cartItem";
import Link from "next/link";

const CartItemsList = () => {
    // const [list, setList] = useState<productType1[]>([])
    const cart = useCart();
    const updateCart = useUpdateCart()
    const getCartItems = useGetCartItems()
    const emptyCart = useEmptyCart()
    useEffect(() => {
        getCartItems()
    }, [])

    const handleUpdate = (item: productType1 | productType2) => {
        updateCart(item)
        getCartItems()
    }
    return (
        <div className="flex flex-col gap-y-10 w-full overflow-x-hidden">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-1">
                    <input type="text" placeholder="Coupon Code" className="px-3 text-sm border h-10 w-52 sm:w-60 text-black fw_400 bg-none outline-none shadow-none" />
                    <button className="bg-zinc-800 text-white text-xs uppercase h-10 w-24 fw_600 hover:bg-black duration-300">Apply</button>
                </div>
                <button onClick={emptyCart} className="bg-zinc-800 text-white text-xs uppercase h-10 w-32 fw_600 hover:bg-black duration-300">Empty Cart</button>
            </div>
            <div className="w-full overflow-x-auto">
                <div style={{ minWidth: "700px" }}>
                    <div className="grid grid-cols-12 border-b">
                        <p className="text-black text-xs sm:text-sm py-3 uppercase fw_600 col-span-6 flex justify-center">Product</p>
                        <p className="text-black text-xs sm:text-sm py-3 uppercase fw_600 col-span-2 flex justify-center">Price</p>
                        <p className="text-black text-xs sm:text-sm py-3 uppercase fw_600 col-span-2 flex justify-center">Quantity</p>
                        <p className="text-black text-xs sm:text-sm py-3 uppercase fw_600 col-span-2 flex justify-center">Subtotal</p>
                    </div>
                    {cart.items && cart.items.length > 0 ? cart.items.map((product: productType1, index: number) => (
                        <CartItem product={product} key={index + 1} handleUpdate={handleUpdate} />
                    )) :
                        <div className=" flex flex-col gap-y-4 items-center justify-center h-60">
                            <p className="text-base text-black fw_400 text-center">Your cart is empty!</p>
                            <Link href={"/"} className="outline-none border-none shadow-none flex items-center justify-center bg-gradient-to-r from-indigo-700 via-purple-700 to-purple-700 hover:w-60 rounded-full text-white text-sm uppercase h-12 w-52 fw_600 duration-300">Start Shoping</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default CartItemsList