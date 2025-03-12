import { AddressType } from "@/Types/addressTypes";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface BillingFormProps {
    show?: string,
    setShow: (val: string) => void;
    setAddress: (val: AddressType) => void
    address?: AddressType;
    backArrow?: boolean
}

export const BillingForm: React.FC<BillingFormProps> = ({
    show, setShow, setAddress, backArrow, address
}): JSX.Element => {
    const [finalData, setFinalData] = useState<AddressType | null>(null)

    const handleChange = (key: string, value: string) => {
        const updated = { ...finalData, [key]: value }
        setFinalData(updated as AddressType)
    }

    useEffect(() => {
        if (address && address.firstName) {
            setFinalData(address as AddressType);
        }
    }, [address])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setAddress(finalData as AddressType)
        toast.success(`${show === "billingForm" ? "Biiling" : "Shipping"} address updated successfully!`)
        setShow("")
    }
    return (
        <div>
            <div className="flex items-center gap-x-4">
                {backArrow && <button onClick={() => setShow("")} className="text-2xl text-black hover:text-black">
                    <FontAwesomeIcon icon={faArrowLeftLong} />
                </button>}
                <h1 className="fw_600 text-lg text-black">{show === "billingForm" ? "Biiling" : "Shipping"} Information</h1>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-12 mt-8 sm:gap-x-4 gap-y-6">
                <div className="col-span-12 sm:col-span-6 flex flex-col gap-y-1">
                    <label className="fw_400 text-black text-sm">First Name<span className="text-red-500">*</span></label>
                    <input type="text" value={finalData?.firstName} onChange={(e) => handleChange("firstName", e.target.value)} required className="text-sm bg-zinc-100 text-black h-12 w-full px-3 outline-none shadow-none" />
                </div>
                <div className="col-span-12 sm:col-span-6 flex flex-col gap-y-1">
                    <label className="fw_400 text-black text-sm">Last Name<span className="text-red-500">*</span></label>
                    <input type="text" value={finalData?.lastName} onChange={(e) => handleChange("lastName", e.target.value)} required className="text-sm bg-zinc-100 text-black h-12 w-full px-3 outline-none shadow-none" />
                </div>
                <div className="col-span-12 flex flex-col gap-y-1">
                    <label className="fw_400 text-black text-sm">Company Name <span className="text-zinc-500">(Optional)</span></label>
                    <input type="text" value={finalData?.companyName} onChange={(e) => handleChange("companyName", e.target.value)} className="text-sm bg-zinc-100 text-black h-12 w-full px-3 outline-none shadow-none" />
                </div>
                <div className="col-span-12 flex flex-col gap-y-1">
                    <label className="fw_400 text-black text-sm">Country / Region<span className="text-red-500">*</span></label>
                    <select value={finalData?.country} onChange={(e) => handleChange("country", e.target.value)} className="text-sm bg-zinc-100 text-black h-12 w-full px-3">
                        <option>Pakistan</option>
                        <option>UAE</option>
                        <option>America</option>
                        <option>Canada</option>
                        <option>England</option>
                    </select>
                </div>
                <div className="col-span-12 flex flex-col gap-y-1">
                    <label className="fw_400 text-black text-sm">Street Address<span className="text-red-500">*</span></label>
                    <input type="text" value={finalData?.streetAddress1} onChange={(e) => handleChange("streetAddress1", e.target.value)} required placeholder="House number and street name" className="text-sm bg-zinc-100 text-black h-12 w-full px-3 outline-none shadow-none" />
                    <input type="text" value={finalData?.streetAddress2} onChange={(e) => handleChange("streetAddress2", e.target.value)} placeholder="Appartment, suite, unit, etc (optional)" className="mt-3 text-sm bg-zinc-100 text-black h-12 w-full px-3 outline-none shadow-none" />
                </div>
                <div className="col-span-12 flex flex-col gap-y-1">
                    <label className="fw_400 text-black text-sm">Town / City<span className="text-red-500">*</span></label>
                    <input type="text" value={finalData?.city} onChange={(e) => handleChange("city", e.target.value)} required className="text-sm bg-zinc-100 text-black h-12 w-full px-3 outline-none shadow-none" />
                </div>
                <div className="col-span-12 flex flex-col gap-y-1">
                    <label className="fw_400 text-black text-sm">State / Country<span className="text-red-500">*</span></label>
                    <select value={finalData?.state} onChange={(e) => handleChange("state", e.target.value)} className="text-sm bg-zinc-100 text-black h-12 w-full px-3">
                        <option>Azad kashmir</option>
                        <option>Faislabad</option>
                        <option>Lahore</option>
                        <option>Sialkot</option>
                        <option>Islamabad</option>
                    </select>
                </div>
                <div className="col-span-12 flex flex-col gap-y-1">
                    <label className="fw_400 text-black text-sm">Postcode / Zip<span className="text-red-500">*</span></label>
                    <input type="text" value={finalData?.zip} onChange={(e) => handleChange("zip", e.target.value)} required className="text-sm bg-zinc-100 text-black h-12 w-full px-3 outline-none shadow-none" />
                </div>
                <div className="col-span-12 flex flex-col gap-y-1">
                    <label className="fw_400 text-black text-sm">Phone<span className="text-red-500">*</span></label>
                    <input type="number" value={finalData?.phone} onChange={(e) => handleChange("phone", e.target.value)} required className="num_ipnut text-sm bg-zinc-100 text-black h-12 w-full px-3 outline-none shadow-none" />
                </div>
                <div className="col-span-12 flex flex-col gap-y-1">
                    <label className="fw_400 text-black text-sm">Email Address<span className="text-red-500">*</span></label>
                    <input type="email" value={finalData?.email} onChange={(e) => handleChange("email", e.target.value)} required className="text-sm bg-zinc-100 text-black h-12 w-full px-3 outline-none shadow-none" />
                </div>
                <div className="col-span-12">
                    <label className="fw_400 text-black text-sm flex items-center gap-x-3">
                        <input type="checkbox" className="text-black h-4 w-4 outline-none shadow-none" />
                        Ship to a different address?
                    </label>
                </div>
                <div className="col-span-12 flex flex-col gap-y-1">
                    <label className="fw_400 text-black text-sm">Order Notes <span className="text-zinc-500">(Optional)</span></label>
                    <textarea rows={5} value={finalData?.description} onChange={(e) => handleChange("description", e.target.value)} className="text-sm bg-zinc-100 text-black w-full px-3 py-2 outline-none shadow-none" >
                    </textarea>
                </div>
                <button type="submit" className="bg-zinc-800 hover:bg-black duration-300 text-white mt-5 h-12 w-52 fw_600 uppercase text-sm">Save & Continue</button>
            </form>
        </div>
    )
}