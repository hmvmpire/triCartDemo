import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight"
import { CheckoutStepper } from "../cart/checkoutStepper"
import { BillingForm } from "./billingForm"
import { CouponCodeAccordion } from "./couponCodeAccordion"
import { ItemsList } from "./itemsList"
import { useCart, useGetCartItems } from "@/redux/cart/cartHooks"
import { productType1, productType2 } from "@/Types/productPropsTypes"
import { useMediaQuery } from "@mui/material"
import Link from "next/link"

export const CheckoutMain = () => {
    const matches = useMediaQuery("(max-width:1024px)");

    const [shipping, setShipping] = useState("paid")
    const [payment, setPayment] = useState("Direct bank transfer")
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
            <div className="container3 flex flex-col pb-20">
                <div className="flex justify-center py-10">
                    <CheckoutStepper step={2} />
                </div>
                <div className="mb-3 bg-white rounded-md px-4 py-4 sm:px-8">
                    <CouponCodeAccordion />
                </div>
                <div className="flex gap-y-10 lg:gap-x-5 flex-col lg:flex-row">
                    <div className="w-full bg-white rounded-md p-4 sm:p-8">
                        <BillingForm setShow={() => { }} setAddress={() => { }} />
                    </div>
                    <div className="bg-white rounded-md p-4 sm:p-8 h-max" style={{ width: matches ? "100%" : "30rem", minWidth: matches ? "100%" : "30rem" }}>
                        <div className="p-4 sm:p-8 border border-zinc-200">
                            <h1 className="fw_600 text-lg uppercase text-black">Your Order</h1>
                            <ItemsList />
                            <div className="flex items-center gap-x-4 justify-between mt-12 pb-4 border-b">
                                <p className="text-sm fw_600">Subtotal</p>
                                <p className="text-sm fw_600">${parseFloat(allsubtotal().toString()).toFixed(2)}</p>
                            </div>
                            <div className="py-5 border-b">
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
                            <div className="flex items-center gap-x-4 justify-between py-6 border-b">
                                <p className="text-base fw_700 text-black">Total</p>
                                <p className="text-2xl fw_700 text-black">${shipping === "paid" ? parseFloat((allsubtotal() + 10).toString()).toFixed(2) : parseFloat(allsubtotal().toString()).toFixed(2)}</p>
                            </div>
                            <div className="py-6 border-b">
                                <p className="text-sm fw_600 mb-4">Payment Method</p>

                                <label className="flex items-center gap-x-2 text-sm fw_400 mt-6 cursor-pointer">
                                    <input onChange={() => setPayment("Direct bank transfer")} checked={payment === "Direct bank transfer"} type="radio" className="w-4 h-4 radio_inp" />
                                    Direct bank transfer
                                </label>
                                {payment === "Direct bank transfer" && <p className="text-sm mt-1 text-zinc-400">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>}
                                <label className="flex items-center gap-x-2 text-sm fw_400 mt-6 cursor-pointer">
                                    <input onChange={() => setPayment("Cash on delivery")} checked={payment === "Cash on delivery"} type="radio" className="w-4 h-4 radio_inp" />
                                    Cash on delivery
                                </label>
                                {payment === "Cash on delivery" && <p className="text-sm mt-1 text-zinc-400">Pay with cash upon delivery.</p>}
                                <label className="flex items-center gap-x-2 text-sm fw_400 mt-6 cursor-pointer">
                                    <input onChange={() => setPayment("PayPal")} checked={payment === "PayPal"} type="radio" className="w-4 h-4 radio_inp" />
                                    PayPal
                                </label>
                                {payment === "PayPal" && <p className="text-sm mt-1 text-zinc-400">Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>}
                            </div>
                            <Link href={templateBasePath + "/order-creation"} className="border-none outline-none shadow-none text-white bg-zinc-800 hover:bg-black duration-300 group h-12 w-full fw_600 text-xs uppercase mt-10 flex items-center gap-x-4 justify-center">Place Order
                                <FontAwesomeIcon icon={faArrowRight} className="text-base group-hover:ml-4 duration-500" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}