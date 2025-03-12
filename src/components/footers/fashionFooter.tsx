import { handleSmoothScroll } from "@/services/generalService"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter"
import { faAddressBook, faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight"
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useState } from "react"
import { toast } from "react-toastify"

export const FashionFooter = () => {
    const [email, setEmail] = useState<any>("")
    const nav4Route = typeof window !== "undefined" &&
        window.location.pathname.includes("/tricart-fashion")
    return (
        <div className="bg-fashionPrimary-LIGHT pt-16">
            <div className={!nav4Route ? "container1" : "container3"}>
                <div className="grid grid-cols-12 md:gap-x-5 gap-y-8 pb-8">
                    <div className="col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-4">
                        <h1 className="text-black fw_700 text-sm sm:text-base uppercase">Contact Info</h1>
                        <div className="mt-2 w-72">
                            <div className="flex items-center gap-x-5 py-5 border-b border-zinc-700">
                                <FontAwesomeIcon icon={faAddressBook} className="text-black text-2xl" />
                                <div>
                                    <h3 className="text-black fw_600 text-xs uppercase">Address</h3>
                                    <p className="text-zinc-600 mt-1 text-xs lg:text-sm">123 Street Name, City, England</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-5 py-5 border-b border-zinc-700">
                                <FontAwesomeIcon icon={faPhone} className="text-black text-2xl" />
                                <div>
                                    <h3 className="text-black fw_600 text-xs uppercase">Phone</h3>
                                    <p className="text-zinc-600 mt-1 text-xs lg:text-sm">Toll Free (123) 456-7890</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-5 py-5">
                                <FontAwesomeIcon icon={faEnvelope} className="text-black text-2xl" />
                                <div>
                                    <h3 className="text-black fw_600 text-xs uppercase">Email</h3>
                                    <p className="text-zinc-600 mt-1 text-xs lg:text-sm">mail@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-2">
                        <div>
                            <h2 className="text-black fw_700 text-sm sm:text-base uppercase">Account</h2>
                            <ul className="mt-6 flex flex-col gap-y-3 sm:gap-y-5">
                                <Link href="/tricart-fashion/about-us" className="border-none outline-none shadow-none text-xs lg:text-sm text-zinc-600 fw_400 flex items-center gap-x-3 hover:text-black">
                                    <FontAwesomeIcon icon={faChevronRight} className="text-black text-xxs" />
                                    About Us</Link>
                                <Link href="/tricart-fashion/contact-us" className="border-none outline-none shadow-none text-xs lg:text-sm text-zinc-600 fw_400 flex items-center gap-x-3 hover:text-black">
                                    <FontAwesomeIcon icon={faChevronRight} className="text-black text-xxs" />
                                    Contact Us</Link>
                                <Link href="/tricart-fashion/account/my-account" className="border-none outline-none shadow-none text-xs lg:text-sm text-zinc-600 fw_400 flex items-center gap-x-3 hover:text-black">
                                    <FontAwesomeIcon icon={faChevronRight} className="text-black text-xxs" />
                                    My Account</Link>
                                <Link href="/tricart-fashion/account/orders" className="border-none outline-none shadow-none text-xs lg:text-sm text-zinc-600 fw_400 flex items-center gap-x-3 hover:text-black">
                                    <FontAwesomeIcon icon={faChevronRight} className="text-black text-xxs" />
                                    Order History</Link>
                                <a href="#nav4" onClick={handleSmoothScroll} className="border-none outline-none shadow-none text-xs lg:text-sm text-zinc-600 fw_400 flex items-center gap-x-3 hover:text-black">
                                    <FontAwesomeIcon icon={faChevronRight} className="text-black text-xxs" />
                                    Advanced Search</a>

                            </ul>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
                        <div>
                            <h2 className="text-black fw_700 text-sm sm:text-base uppercase">Main Features</h2>
                            <ul className="mt-6 flex flex-col gap-y-3 sm:gap-y-5">
                                <Link href="/" className="border-none outline-none shadow-none text-xs lg:text-sm text-zinc-600 fw_400 flex items-center gap-x-3 hover:text-black">
                                    <FontAwesomeIcon icon={faChevronRight} className="text-black text-xxs" />
                                    Super Fast Theme
                                </Link>
                                <Link href="/" className="border-none outline-none shadow-none text-xs lg:text-sm text-zinc-600 fw_400 flex items-center gap-x-3 hover:text-black">
                                    <FontAwesomeIcon icon={faChevronRight} className="text-black text-xxs" />
                                    1st Fully Working Ajax Theme
                                </Link>
                                <Link href="/" className="border-none outline-none shadow-none text-xs lg:text-sm text-zinc-600 fw_400 flex items-center gap-x-3 hover:text-black">
                                    <FontAwesomeIcon icon={faChevronRight} className="text-black text-xxs" />
                                    10 Unique Shop Layouts
                                </Link>
                                <Link href="/" className="border-none outline-none shadow-none text-xs lg:text-sm text-zinc-600 fw_400 flex items-center gap-x-3 hover:text-black">
                                    <FontAwesomeIcon icon={faChevronRight} className="text-black text-xxs" />
                                    Powerful Admin Panel
                                </Link>
                                <Link href="/" className="border-none outline-none shadow-none text-xs lg:text-sm text-zinc-600 fw_400 flex items-center gap-x-3 hover:text-black">
                                    <FontAwesomeIcon icon={faChevronRight} className="text-black text-xxs" />
                                    Mobile & Retina Optimized</Link>
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-12 lg:col-span-3">
                        <h2 className="text-black fw_700 text-sm sm:text-base uppercase">NewsLetter</h2>
                        <div className="mt-5">
                            <p className="text-zinc-600 text-xs lg:text-sm">Get all the latest information on Events, Sales and Offers. Sign up for newsletter today.</p>
                            <form onSubmit={(e) => { e.preventDefault(); if (email) { toast.success("Subscribed successfully!"); setEmail("") } }} className="pr-3 flex items-center gap-x-1 bg-white mt-5 h-10">
                                <input value={email} onChange={(e: any) => setEmail(e.target.value)} placeholder="Email Address..." className="italic bg-transparent text-xs text-black w-full h-full border-none outline-none shadow-none px-3" />
                                <button type="submit" className="text-black outline-none shadow-none border-none text-sm fw_600">GO</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-y-3 md:gap-y-0 md:gap-x-5 pb-10 md:pb-14 border-t border-zinc-700 pt-10 justify-between flex-col md:flex-row">
                    <p className="text-xs text-zinc-600">© Tricart eCommerce. 2024. All Rights Reserved.</p>
                    <div className="flex items-center gap-x-3 text-black">
                        <button className="h-8 w-8 rounded-full flex items-center justify-center text-sm bg-fashionPrimary hover:bg-fashionPrimary-HOVER duration-300 text-white">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </button>
                        <button className="h-8 w-8 rounded-full flex items-center justify-center text-sm bg-fashionPrimary hover:bg-fashionPrimary-HOVER duration-300 text-white">
                            <FontAwesomeIcon icon={faXTwitter} />
                        </button>
                        <button className="h-8 w-8 rounded-full flex items-center justify-center text-sm bg-fashionPrimary hover:bg-fashionPrimary-HOVER duration-300 text-white">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}