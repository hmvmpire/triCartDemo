import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import { toast } from "react-toastify";

export const NewsLetter = () => {
    const [email, setEmail] = useState<any>("")
    return (
        <div className="bg-TOOLS_PRIMARY py-8 sm:py-0 sm:h-48 flex items-center">
            <div className="container1">
                <div className="grid grid-cols-12 gap-y-5 lg:gap-y-0 lg:gap-x-6 sm:px-10 lg:px-0">
                    <div className="col-span-12 lg:col-span-5 flex items-center">
                        <div className="flex flex-col sm:flex-row items-center gap-y-5 sm:gap-y-0 sm:gap-x-5 sm:gap-x-10 text-black">
                            <FontAwesomeIcon icon={faEnvelope} className="text-5xl" />
                            <div>
                                <p className="text-lg sm:text-xl fw_600 text-center sm:text-left">Subscribe Newsletter</p>
                                <p className="text-xs sm:text-sm text-zinc-700 text-center sm:text-left leading-5 mt-2">Get all the latest information on Events, Sales and Offers. Sign up for newsletter today</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-7 flex items-center">
                        <form onSubmit={(e) => { e.preventDefault(); if (email) { toast.success("Subscribed successfully!"); setEmail("") } }} className="flex items-center gap-x-3 w-full">
                            <input value={email} onChange={(e: any) => setEmail(e.target.value)} required type="email" placeholder="Email Address" className="text-xs sm:text-sm h-10 sm:h-12 px-3 bg-white border-none outline-none shadow-none rounded-lg w-full" />
                            <button type="submit" className="text-xs sm:text-sm fw_400 bg-black text-white h-10 sm:h-12 rounded-lg w-40">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}