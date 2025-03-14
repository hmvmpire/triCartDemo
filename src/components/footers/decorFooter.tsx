import Image from "next/image"
import blackLogo from '../../static/decorFooterLogo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter"
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram"
import Link from "next/link"
import { useState } from "react"
import { toast } from "react-toastify"
import { handleSmoothScroll } from "@/services/generalService"

export const DecorFooter = () => {
    const [email, setEmail] = useState<any>("")
    return (
        <div className="py-10 px-3 sm:px-5 lg:px-10 bg-DECOR_PRIMARY-LIGHT border-t">
            <div className="grid grid-cols-12 gap-y-10 lg:gap-y-5 xl:gap-y-0 sm:gap-x-5 pt-14 pb-20 border-b border-zinc-300">
                <div className="col-span-12 lg:col-span-4 xl:col-span-3">
                    <Image src={blackLogo} alt="blackLogo" className="cursor-pointer w-32" />
                    <div className="mt-8 flex flex-col gap-y-2">
                        <p className="text-base text-DECOR_PRIMARY fw_400">portotheme@portotheme.com</p>
                        <p className="text-base text-DECOR_PRIMARY fw_400">(800) 123-4567</p>
                        <p className="text-base text-DECOR_PRIMARY fw_400">100 Tricart Ave TF, New York, USA</p>
                    </div>
                    <div className="flex items-center gap-x-5 mt-8">
                        <button className="text-DECOR_PRIMARY text-xl h-10 w-10 flex items-center justify-center hover:bg-white hover:bg-opacity-70 rounded-full duration-300">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </button>
                        <button className="text-DECOR_PRIMARY text-xl h-10 w-10 flex items-center justify-center hover:bg-white hover:bg-opacity-70 rounded-full duration-300">
                            <FontAwesomeIcon icon={faXTwitter} />
                        </button>
                        <button className="text-DECOR_PRIMARY text-xl h-10 w-10 flex items-center justify-center hover:bg-white hover:bg-opacity-70 rounded-full duration-300">
                            <FontAwesomeIcon icon={faInstagram} />
                        </button>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-8 xl:col-span-6 gap-y-5 sm:gap-y-0 grid grid-cols-1 sm:grid-cols-3">
                    <div>
                        <h2 className="text-zinc-800 text-base tracking-widest fw_600 uppercase">Tricart</h2>
                        <ul className="mt-6 flex flex-col gap-y-3 sm:gap-y-5">
                            <Link href="/tricart-home-decore/about-us" className="border-none outline-none shadow-none text-sm text-DECOR_PRIMARY fw_400">About Us</Link>
                            <Link href="/tricart-home-decore/about-us" className="border-none outline-none shadow-none text-sm text-DECOR_PRIMARY fw_400">Showrooms</Link>
                            <Link href="/tricart-home-decore/contact-us" className="border-none outline-none shadow-none text-sm text-DECOR_PRIMARY fw_400">Contact Us</Link>
                            <a href="#blog3" onClick={handleSmoothScroll} className="border-none outline-none shadow-none text-sm text-DECOR_PRIMARY fw_400">Blog</a>

                        </ul>
                    </div>
                    <div>
                        <h2 className="text-zinc-800 text-base tracking-widest fw_600 uppercase">Categories</h2>
                        <ul className="mt-6 flex flex-col gap-y-3 sm:gap-y-5">
                            <Link href="/tricart-home-decore/contact-us" className="border-none outline-none shadow-none text-sm text-DECOR_PRIMARY fw_400">Help & FAQs</Link>
                            <Link href="/tricart-home-decore/account/my-account" className="border-none outline-none shadow-none text-sm text-DECOR_PRIMARY fw_400">Login / Register</Link>
                            <Link href="/tricart-home-decore/account/orders" className="border-none outline-none shadow-none text-sm text-DECOR_PRIMARY fw_400">Track Your Order</Link>
                            <Link href="/tricart-home-decore/privacy-policy" className="border-none outline-none shadow-none text-sm text-DECOR_PRIMARY fw_400">Shipping & Returns</Link>
                            <Link href="/tricart-home-decore/terms-&-conditions" className="border-none outline-none shadow-none text-sm text-DECOR_PRIMARY fw_400">Accessibity</Link>

                        </ul>
                    </div>
                    <div>
                        <h2 className="text-zinc-800 text-base tracking-widest fw_600 uppercase">Support</h2>
                        <ul className="mt-6 flex flex-col gap-y-3 sm:gap-y-5">
                            <Link href="/tricart-home-decore/contact-us" className="border-none outline-none shadow-none text-sm text-DECOR_PRIMARY fw_400">Help & FAQs</Link>
                            <Link href="/tricart-home-decore/account/my-account" className="border-none outline-none shadow-none text-sm text-DECOR_PRIMARY fw_400">Login / Register</Link>
                            <Link href="/tricart-home-decore/account/orders" className="border-none outline-none shadow-none text-sm text-DECOR_PRIMARY fw_400">Track Your Order</Link>
                            <Link href="/tricart-home-decore/privacy-policy" className="border-none outline-none shadow-none text-sm text-DECOR_PRIMARY fw_400">Shipping & Returns</Link>
                            <Link href="/tricart-home-decore/terms-&-conditions" className="border-none outline-none shadow-none text-sm text-DECOR_PRIMARY fw_400">Accessibility</Link>

                        </ul>
                    </div>
                </div>
                <div className="col-span-12 xl:col-span-3">
                    <h2 className="text-zinc-800 text-base tracking-widest fw_600 uppercase">JOIN OUR MAILING LIST</h2>
                    <form onSubmit={(e) => { e.preventDefault(); if (email) { toast.success("Subscribed successfully!"); setEmail("") } }} className="flex overflow-hidden mt-5">
                        <input value={email} onChange={(e: any) => setEmail(e.target.value)} className="px-3 h-12 bg-transparent border-none outline-none shadow-none bg-white w-full text-sm" placeholder="E-mail" />
                        <button type="submit" className="bg-DECOR_PRIMARY hover:bg-DECOR_PRIMARY-HOVER text-DECOR_PRIMARY-LIGHT text-xs fw_600 w-32 min-w-32 h-12">Subscribe</button>
                    </form>
                    <p className="text-sm mt-5 text-zinc-700 fw_400">By subscribing, you agree to our <Link href="/tricart-home-decore/terms-&-conditions" className="border-none outline-none shadow-none fw_600 text-DECOR_PRIMARY hover:text-DECOR_PRIMARY-HOVER duration-300 underline">Terms of Use</Link> and <Link href="/tricart-home-decore/privacy-policy" className="border-none outline-none shadow-none fw_600 text-DECOR_PRIMARY hover:text-DECOR_PRIMARY-HOVER duration-300 underline">Privacy Policy</Link>.</p>
                </div>

            </div>
            <div className="pb-14 pt-12">
                <p className="text-sm text-zinc-500">© Tricart eCommerce. 2024 - All Rights Reserved</p>

            </div>
        </div>
    )
}