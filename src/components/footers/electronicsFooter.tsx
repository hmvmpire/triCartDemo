import Image from "next/image"
import blackLogo from '../../static/blackLogo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter"
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram"
import { toast } from "react-toastify"
import { useState } from "react"
import Link from "next/link"
import { handleSmoothScroll } from "@/services/generalService"

export const ElectronicsFooter = () => {
    const [email, setEmail] = useState<any>("")
    return (
        <div className="bg-white">
            <div className="container1 pb-10 pt-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-5 lg:gap-0 sm:gap-x-5">
                    <div className="">
                        <Image src={blackLogo} alt="blackLogo" className="cursor-pointer w-32" />
                        <div className="mt-8">
                            <p className="text-sm text-zinc-500 fw_400">Address: 1234 Street, Suite 500, New York, NY</p>
                            <button className="underline text-black text-sm fw_400">
                                Get Direction
                            </button>
                        </div>
                        <p className="text-zinc-500 fw_400 text-sm mt-6">
                            Email: <span className="fw_600 text-black">you@portotheme.com</span>
                        </p>
                        <p className="text-zinc-500 fw_400 text-sm mt-6">
                            Phone: <span className="fw_600 text-black">1234567890</span>
                        </p>
                        <div className="flex items-center gap-x-3 mt-8">
                            <button className="bg-ELECTRONICS_PRIMARY hover:bg-ELECTRONICS_PRIMARY-HOVER duration-300 text-white w-10 h-10 rounded-full flex items-center justify-center">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </button>
                            <button className="bg-ELECTRONICS_PRIMARY hover:bg-ELECTRONICS_PRIMARY-HOVER duration-300 text-white w-10 h-10 rounded-full flex items-center justify-center">
                                <FontAwesomeIcon icon={faXTwitter} />
                            </button>
                            <button className="bg-ELECTRONICS_PRIMARY hover:bg-ELECTRONICS_PRIMARY-HOVER duration-300 text-white w-10 h-10 rounded-full flex items-center justify-center">
                                <FontAwesomeIcon icon={faInstagram} />
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2">
                        <div>
                            <h2 className="text-black text-xl fw_600">Company</h2>
                            <ul className="mt-5 flex flex-col gap-y-2 sm:gap-y-3">
                                <li className="text-sm fw_400"><Link href="/tricart-electronics/about-us" className="border-none outline-none shadow-none text-zinc-600 hover:text-black duration-300"> About Us</Link> </li>
                                <li className="text-sm fw_400"><a href="#popularCategories1" onClick={handleSmoothScroll} className="border-none outline-none shadow-none text-zinc-600 hover:text-black duration-300"> Shop</a> </li>
                                <li className="text-sm fw_400"><Link href="/tricart-electronics/contact-us" className="border-none outline-none shadow-none text-zinc-600 hover:text-black duration-300"> Contact Us</Link> </li>
                                <li className="text-sm fw_400"><a href="#blogs1" onClick={handleSmoothScroll} className="border-none outline-none shadow-none text-zinc-600 hover:text-black duration-300"> Blog</a> </li>

                            </ul>
                        </div>
                        <div className="block sm:hidden lg:block">
                            <h2 className="text-black text-xl fw_600">Support</h2>
                            <ul className="mt-5 flex flex-col gap-y-2 sm:gap-y-3">
                                <li className="text-sm fw_400"><Link href="/tricart-electronics/contact-us" className="border-none outline-none shadow-none text-zinc-600 hover:text-black duration-300"> Help & FAQs</Link> </li>
                                <li className="text-sm fw_400"><Link href="/account/my-account" className="border-none outline-none shadow-none text-zinc-600 hover:text-black duration-300"> Login / Register</Link> </li>
                                <li className="text-sm fw_400"><Link href="/account/orders" className="border-none outline-none shadow-none text-zinc-600 hover:text-black duration-300"> Track Your Order</Link> </li>
                                <li className="text-sm fw_400"><Link href="/tricart-electronics/terms-&-conditions" className="border-none outline-none shadow-none text-zinc-600 hover:text-black duration-300"> Shipping & Returns</Link> </li>
                                <li className="text-sm fw_400"><Link href="#" className="border-none outline-none shadow-none text-zinc-600 hover:text-black duration-300"> Accessibility</Link> </li>

                            </ul>
                        </div>
                    </div>
                    <div className="hidden sm:block lg:hidden">
                        <h2 className="text-black text-xl fw_600">Support</h2>
                        <ul className="mt-5 flex flex-col gap-y-2 sm:gap-y-3">
                            <li className="text-sm fw_400"><Link href="/tricart-electronics/contact-us" className="border-none outline-none shadow-none text-zinc-600 hover:text-black duration-300"> Help & FAQs</Link> </li>
                            <li className="text-sm fw_400"><Link href="/account/my-account" className="border-none outline-none shadow-none text-zinc-600 hover:text-black duration-300"> Login / Register</Link> </li>
                            <li className="text-sm fw_400"><Link href="/account/orders" className="border-none outline-none shadow-none text-zinc-600 hover:text-black duration-300"> Track Your Order</Link> </li>
                            <li className="text-sm fw_400"><Link href="/tricart-electronics/terms-&-conditions" className="border-none outline-none shadow-none text-zinc-600 hover:text-black duration-300"> Shipping & Returns</Link> </li>
                            <li className="text-sm fw_400"><Link href="#" className="border-none outline-none shadow-none text-zinc-600 hover:text-black duration-300"> Accessibility</Link> </li>

                        </ul>
                    </div>
                    <div className="">
                        <h2 className="text-black text-xl fw_600">Subscribe to Our Newsletter</h2>
                        <form onSubmit={(e) => { e.preventDefault(); if (email) { toast.success("Subscribed successfully!"); setEmail("") } }} className="flex items-center gap-x-2 border rounded-full overflow-hidden p-2 mt-5">
                            <input value={email} onChange={(e: any) => setEmail(e.target.value)} required type="email" className="px-3 bg-transparent border-none outline-none shadow-none text-zinc-600 hover:text-black duration-300 w-full text-sm" placeholder="Email Address..." />
                            <button type="submit" className="bg-ELECTRONICS_PRIMARY hover:bg-ELECTRONICS_PRIMARY-HOVER text-white text-xs fw_600 w-20 min-w-20 h-8 rounded-full">Subscribe</button>
                        </form>
                        <p className="text-sm mt-5 text-zinc-700 fw_400">By subscribing, you agree to our <Link href="/tricart-electronics/terms-&-conditions" className="border-none outline-none shadow-none fw_600 text-zinc-600 hover:text-black duration-300 underline">Terms of Use</Link> and <Link href="/tricart-electronics/privacy-policy" className="border-none outline-none shadow-none fw_600 text-zinc-600 hover:text-black duration-300 underline">Privacy Policy</Link>.</p>
                    </div>

                </div>
                <div className="pb-8 pt-12">
                    <p className="text-sm text-zinc-500">© Tricart eCommerce. 2024 - All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}