import { Layout } from "@/components/subComponents/account/layout"
import { BillingForm } from "@/components/subComponents/checkout/billingForm"
import { AddressType } from "@/Types/addressTypes"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const defaultAddress = { firstName: "John", lastName: "Smith", country: "Pakistan", city: "Lahore", zip: "44438", email: "miandanial524@gmail.com", phone: "03074886527", state: "Azad kashmir", streetAddress1: "A Street" }
const AddressesMain = () => {
    const [billingAddress, setBillingAddress] = useState<AddressType | null>(defaultAddress)
    const [shippingAddress, setShippingAddress] = useState<AddressType | null>(defaultAddress)
    const [show, setShow] = useState("")
    const nav1Route =
        typeof window !== "undefined" &&
        window.location.pathname.includes("/tricart-electronics")
    const nav2Route = typeof window !== "undefined" &&
        window.location.pathname.includes("/tricart-tools")
    const nav3Route = typeof window !== "undefined" &&
        window.location.pathname.includes("/tricart-home-decore")
    const nav4Route = typeof window !== "undefined" &&
        window.location.pathname.includes("/tricart-fashion")

    const templateBasePath = nav1Route ? "/tricart-electronics" : nav2Route ? "/tricart-tools" : nav3Route ? "/tricart-home-decore" : nav4Route ? "/tricart-fashion" : "/"

    return (
        <div>
            <Layout title={"Account Dashboard"} baseUrl={templateBasePath}>
                {show === "billingForm" || show === "shippingForm" ?
                    <BillingForm show={show} setShow={setShow} address={show === "billingForm" ? billingAddress as AddressType : shippingAddress as AddressType} setAddress={show === "billingForm" ? setBillingAddress : setShippingAddress} backArrow={true} />
                    : <div className="">
                        <div className="flex items-center gap-x-4">
                            <FontAwesomeIcon icon={faLocationDot} className="text-4xl text-zinc-700" />
                            <h1 className="fw_700 text-zinc-700 text-2xl">Addresses</h1>
                        </div>
                        <p className="text-sm fw_400 text-zinc-600 mt-5">The following addresses will be used on the checkout page by default.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 sm:gap-x-5 mt-10">
                            <div>
                                <h3 className="fw_600 text-lg text-black">Billing Address</h3>
                                <div className="mt-4 flex flex-col gap-y-1">
                                    <p className="text-zinc-400 fw_400 text-sm">{billingAddress?.firstName} {billingAddress?.lastName}</p>
                                    <p className="text-zinc-400 fw_400 text-sm">{billingAddress?.streetAddress1}</p>
                                    <p className="text-zinc-400 fw_400 text-sm">{billingAddress?.city}, OR {billingAddress?.zip}</p>
                                </div>
                                <button onClick={() => setShow("billingForm")} className="bg-zinc-700 hover:bg-black duration-300 text-white rounded-sm mt-5 h-12 w-52 fw_600 uppercase text-sm">Edit Billing Address</button>
                            </div>
                            <div>
                                <h3 className="fw_600 text-lg text-black">Shipping Address</h3>
                                <div className="mt-4 flex flex-col gap-y-1">
                                    <p className="text-zinc-400 fw_400 text-sm">{shippingAddress?.firstName} {shippingAddress?.lastName}</p>
                                    <p className="text-zinc-400 fw_400 text-sm">{shippingAddress?.streetAddress1}</p>
                                    <p className="text-zinc-400 fw_400 text-sm">{shippingAddress?.city}, OR {shippingAddress?.zip}</p>
                                </div>
                                <button onClick={() => setShow("shippingForm")} className="bg-zinc-700 hover:bg-black duration-300 text-white rounded-sm mt-5 h-12 w-52 fw_600 uppercase text-sm">Edit Shipping Address</button>
                            </div>
                        </div>
                    </div>}
            </Layout>
        </div>
    )
}

export default AddressesMain