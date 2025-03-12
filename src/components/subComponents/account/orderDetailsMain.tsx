import { Layout } from "@/components/subComponents/account/layout"
import { faArrowLeftLong, faBoxOpen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import moment from "moment"
import { useRouter } from "next/router"

const OrderDetailsMain = () => {
    const router = useRouter()
    return (
        <div>
            <Layout title={"Account Dashboard"}>
                <div className="w-full">
                    <div className="flex items-center gap-x-4">
                        <FontAwesomeIcon icon={faBoxOpen} className="text-4xl text-zinc-700" />
                        <h1 className="fw_700 text-zinc-700 text-2xl">Order #5564</h1>
                    </div>
                    <div className="sm:flex sm:gap-x-3 sm:justify-evenly grid grid-cols-3 gap-y-5 mt-8">
                        <div className="flex flex-col sm:items-center">
                            <p className="text-zinc-700 text-xs">Order No.</p>
                            <p className="text-zinc-600 text-sm fw_600">5564</p>
                        </div>
                        <div className="flex flex-col sm:items-center">
                            <p className="text-zinc-700 text-xs">Status</p>
                            <p className="text-black text-sm fw_600">On Hold</p>
                        </div>
                        <div className="flex flex-col sm:items-center">
                            <p className="text-zinc-700 text-xs">Date</p>
                            <p className="text-zinc-600 text-sm fw_600 whitespace-nowrap">{moment().format("MMMM DD, YYYY")}</p>
                        </div>
                        <div className="flex flex-col sm:items-center">
                            <p className="text-zinc-700 text-xs">Total</p>
                            <p className="text-zinc-600 text-sm fw_600">$168.00</p>
                        </div>
                        <div className="flex flex-col sm:items-center">
                            <p className="text-zinc-700 text-xs">Payment Method</p>
                            <p className="text-zinc-600 text-sm fw_600">Bank Transfer</p>
                        </div>
                    </div>
                    <div className="mt-8 border-2 border-zinc-200 p-6">
                        <p className="fw_700 text-base text-zinc-700">Your Order</p>
                        <div className="mt-8">
                            <p className="fw_700 text-zinc-700 text-sm uppercase">Products</p>
                            <hr className="my-2" />
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-black fw_400">JBL Tune 720BT - Grey × 2</p>
                                    <p className="text-xs text-zinc-500">Color: Grey</p>
                                </div>
                                <p className="text-sm fw_600">$168.00</p>
                            </div>
                        </div>
                        <div className="pb-4 flex items-center justify-between mt-8 border-b border-zinc-200">
                            <p className="text-black fw_400 text-sm">Subtotal:</p>
                            <p className="text-sm fw_600 text-zinc-600">$168.00</p>
                        </div>
                        <div className="py-6 flex items-center justify-between border-b border-zinc-200">
                            <p className="text-black fw_400 text-sm">Shipping:</p>
                            <p className="text-sm fw_600 text-zinc-600">Flat rate</p>
                        </div>
                        <div className="py-6 flex items-center justify-between border-b border-zinc-200">
                            <p className="text-black fw_400 text-sm">Payment Method:</p>
                            <p className="text-sm fw_600 text-zinc-600">Credit Card</p>
                        </div>
                        <div className="pt-6 flex items-center justify-between">
                            <p className="text-zinc-700 fw_600 text-lg">Total</p>
                            <p className="text-xl fw_600 text-zinc-700">$168.00</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-y-0 mt-16">
                        <div>
                            <h2 className="text-xl fw_600 text-black">Billing Address</h2>
                            <div className="text-zinc-600 text-sm mt-4 flex flex-col gap-y-1">
                                <p>John Smith</p>
                                <p>A Street</p>
                                <p>Masury</p>
                                <p>Balochistan</p>
                                <p>44438</p>
                                <p>Pakistan</p>
                                <p>03074886527</p>
                                <p className="mt-4">danii@gmail.com</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl fw_600 text-black">Shipping Address</h2>
                            <div className="text-zinc-600 text-sm mt-4 flex flex-col gap-y-1">
                                <p>John Smith</p>
                                <p>A Street</p>
                                <p>Masury</p>
                                <p>Balochistan</p>
                                <p>44438</p>
                                <p>Pakistan</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => router.back()} className="flex items-center gap-x-3 fw_600 hover:bg-zinc-200 hover:text-black mt-10 text-zinc-700 uppercase text-xs bg-zinc-100 px-4 py-2 rounded-sm">
                        <FontAwesomeIcon icon={faArrowLeftLong} className="text-sm" />
                        Back to List

                    </button>
                </div>
            </Layout>
        </div>
    )
}

export default OrderDetailsMain