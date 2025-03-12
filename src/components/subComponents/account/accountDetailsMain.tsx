import { Layout } from "@/components/subComponents/account/layout"
import { ProfileType } from "@/Types/profileType"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { toast } from "react-toastify"

const defaultDetails = {
    firstName: "Danial",
    lastName: "Waris",
    displayName: "Danii",
    email: "miandanial524@gmail.com"
}

const AccountDetailsMain = () => {
    const [finalData, setFinalData] = useState<ProfileType | null>(defaultDetails)

    const handleChange = (key: string, value: string) => {
        const updated = { ...finalData, [key]: value }
        setFinalData(updated as ProfileType)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFinalData(finalData as ProfileType)
        toast.success("User data updated successfully!")
    }
    return (
        <div>
            <Layout title={"Account Dashboard"}>
                <div className="">
                    <div className="flex items-center gap-x-4">
                        <FontAwesomeIcon icon={faUser} className="text-4xl text-zinc-700" />
                        <h1 className="fw_700 text-zinc-700 text-2xl">Account Details</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="grid grid-cols-12 sm:gap-x-4 gap-y-6 mt-10">
                        <div className="col-span-12 sm:col-span-6 flex flex-col gap-y-1">
                            <label className="fw_400 text-black text-sm">First Name<span className="text-red-500">*</span></label>
                            <input type="text" value={finalData?.firstName} onChange={(e) => handleChange("firstName", e.target.value)} required className="text-sm bg-zinc-100 h-12 w-full px-3 outline-none shadow-none" />
                        </div>
                        <div className="col-span-12 sm:col-span-6 flex flex-col gap-y-1">
                            <label className="fw_400 text-black text-sm">Last Name<span className="text-red-500">*</span></label>
                            <input type="text" value={finalData?.lastName} onChange={(e) => handleChange("lastName", e.target.value)} required className="text-sm bg-zinc-100 h-12 w-full px-3 outline-none shadow-none" />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1">
                            <label className="fw_400 text-black text-sm">Display Name<span className="text-red-500">*</span></label>
                            <input type="text" value={finalData?.displayName} onChange={(e) => handleChange("displayName", e.target.value)} required className="text-sm bg-zinc-100 h-12 w-full px-3 outline-none shadow-none" />
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-1">
                            <label className="fw_400 text-black text-sm">Email Address<span className="text-red-500">*</span></label>
                            <input type="email" value={finalData?.email} onChange={(e) => handleChange("email", e.target.value)} required className="text-sm bg-zinc-100 h-12 w-full px-3 outline-none shadow-none" />
                        </div>
                        <div className="col-span-12 border px-10 py-14 flex flex-col gap-y-4">
                            <h3 className="fw_700 text-black text-lg uppercase">Password Change</h3>
                            <div className="w-full flex flex-col gap-y-1 mt-4">
                                <label className="fw_400 text-black text-sm">Current Password (leave blank to leave unchanged)</label>
                                <input type="password" className="text-sm bg-zinc-100 h-12 w-full px-3 outline-none shadow-none" />
                            </div>
                            <div className="w-full flex flex-col gap-y-1">
                                <label className="fw_400 text-black text-sm">New Password (leave blank to leave unchanged)</label>
                                <input type="password" className="text-sm bg-zinc-100 h-12 w-full px-3 outline-none shadow-none" />
                            </div>
                            <div className="w-full flex flex-col gap-y-1">
                                <label className="fw_400 text-black text-sm">Confirm New Password (leave blank to leave unchanged)</label>
                                <input type="password" className="text-sm bg-zinc-100 h-12 w-full px-3 outline-none shadow-none" />
                            </div>
                        </div>
                        <button type="submit" className="bg-zinc-700 hover:bg-black rounded-sm duration-300 text-white mt-5 h-12 w-52 fw_600 uppercase text-sm">Save Changes</button>
                    </form>
                </div>
            </Layout>
        </div>
    )
}

export default AccountDetailsMain