import { useEffect, useState } from "react"
import CartItemsList from "./cartItemsList"
import { CheckoutStepper } from "./checkoutStepper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight"
import Link from "next/link"
import { useCart, useGetCartItems } from "@/redux/cart/cartHooks"
import { productType1, productType2 } from "@/Types/productPropsTypes"

export const CartMain = () => {
    const [shipping, setShipping] = useState("paid")
    const cart = useCart();
    const getCartItems = useGetCartItems()
    useEffect(() => {
        getCartItems()
    }, [])

    const allsubtotal = (): number => {
        return cart.items.reduce((total: number, item: productType1 | productType2) => {
            if (item.price.toString().includes("–")) { // Type guard for productType2
                const p = item.price.toString().split(" ")
                const q = p[0].split("$")
                return total + (parseFloat(q[1]) * (item.qty ?? 0));
            } else {
                return total + (parseInt(item.price as string) * (item.qty ?? 0));
            }
        }, 0);
    };

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
        <div className="bg-zinc-100">
            <div className="container3 flex flex-col gap-y-10 pb-20">
                <div className="flex justify-center py-10">
                    <CheckoutStepper step={1} />
                </div>
                <div className="flex gap-y-10 lg:gap-x-5 flex-col lg:flex-row">
                    <div className="w-full bg-white rounded-md p-4 sm:p-8">
                        <CartItemsList />
                    </div>
                    <div className="w-full min-w-full lg:w-96 lg:min-w-96 bg-white rounded-md p-4 sm:p-8 h-max">
                        <div className="p-8 border border-zinc-200">
                            <h1 className="fw_600 text-lg uppercase text-black">Cart Totals</h1>
                            <div className="flex items-center gap-x-4 justify-between mt-12 pb-4 border-b">
                                <p className="text-sm fw_600">Subtotal</p>
                                <p className="text-sm fw_600">${parseFloat(allsubtotal().toString()).toFixed(2)}</p>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm fw_600">Shipping</p>
                                <label className="flex items-center gap-x-2 text-sm fw_400 mt-6 cursor-pointer">
                                    <input onChange={() => setShipping("paid")} checked={shipping === "paid"} type="radio" className="w-4 h-4 radio_inp" />
                                    Flat rate $10.00
                                </label>
                                <label className="flex items-center gap-x-2 text-sm fw_400 mt-3 cursor-pointer">
                                    <input onChange={() => setShipping("free")} checked={shipping === "free"} type="radio" className="w-4 h-4 radio_inp" />
                                    Free Shipping
                                </label>
                            </div>
                            <div className="py-10 border-b flex flex-col gap-y-4">
                                <select className="text-sm border py-2 w-full px-3" onChange={() => { }}>
                                    <option>Pakistan</option>
                                    <option>UAE</option>
                                    <option>America</option>
                                    <option>Canada</option>
                                    <option>England</option>
                                </select>
                                <select className="text-sm border py-2 w-full px-3" onChange={() => { }}>
                                    <option>Azad kashmir</option>
                                    <option>Faislabad</option>
                                    <option>Lahore</option>
                                    <option>Sialkot</option>
                                    <option>Islamabad</option>
                                </select>
                                <input type="text" placeholder="Town / City" className="text-sm border py-2 w-full px-3 outline-none shadow-none" />
                                <input type="text" placeholder="Zip Code" className="text-sm border py-2 w-full px-3 outline-none shadow-none" />
                            </div>
                            <div className="flex items-center gap-x-4 justify-between mt-6">
                                <p className="text-base fw_700 text-black">Total</p>
                                <p className="text-base fw_700 text-black">${shipping === "paid" ? parseFloat((allsubtotal() + 10).toString()).toFixed(2) : parseFloat(allsubtotal().toString()).toFixed(2)}</p>
                            </div>
                            <Link href={templateBasePath + "/checkout"} className="outline-none shadow-none border-none bg-zinc-800 hover:bg-black text-white duration-300 group h-12 w-full fw_600 text-xs uppercase mt-10 flex items-center gap-x-4 justify-center">Proceed To Checkout
                                <FontAwesomeIcon icon={faArrowRight} className="text-base group-hover:ml-4 duration-500" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}