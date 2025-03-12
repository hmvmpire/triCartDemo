import { handleSmoothScroll } from "@/services/generalService"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF"
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMediaQuery } from "@mui/material"
import Link from "next/link"

export const ToolsFooter = () => {
    const matches = useMediaQuery("(max-width:1480px)");

    return (
        <div className="footer2Bg">
            <div className="container1">
                <div className="grid grid-cols-12 gap-y-10 border-b border-zinc-700 py-20">
                    <div className={`${matches ? "col-span-12 sm:col-span-6" : "col-span-3"} flex flex-col gap-y-5`}>
                        <h2 className="text-white text-lg fw_600">Contact Info</h2>
                        <div>
                            <p className="text-xs text-white p-0 m-0 uppercase">ADDRESS</p>
                            <p className="fw_600 text-base text-zinc-400 p-0 m-0">123 Street Name, City, US</p>
                        </div>
                        <div>
                            <p className="text-xs text-white p-0 m-0 uppercase">Phone</p>
                            <p className="fw_600 text-base text-zinc-400 p-0 m-0">Toll Free (123) 456-7890</p>
                        </div>
                        <div>
                            <p className="text-xs text-white p-0 m-0 uppercase">Email</p>
                            <p className="fw_600 text-base text-zinc-400 p-0 m-0">mail@example.com</p>
                        </div>
                        <div className="mt-3 flex items-center gap-x-4">
                            <button className="text-sm h-10 w-10 rounded-full bg-zinc-700 hover:bg-zinc-400 duration-300 bg-opacity-20 flex items-center justify-center text-white">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </button>
                            <button className="text-sm h-10 w-10 rounded-full bg-zinc-700 hover:bg-zinc-400 duration-300 bg-opacity-20 flex items-center justify-center text-white">
                                <FontAwesomeIcon icon={faXTwitter} />
                            </button> <button className="text-sm h-10 w-10 rounded-full bg-zinc-700 hover:bg-zinc-400 duration-300 bg-opacity-20 flex items-center justify-center text-white">
                                <FontAwesomeIcon icon={faInstagram} />
                            </button>
                        </div>
                    </div>
                    <div className={`${matches ? "col-span-12 sm:col-span-6" : "col-span-4"} flex flex-col gap-y-6`}>
                        <h2 className="text-white text-lg fw_600">Customer Services</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                            <Link href="/tricart-tools/contact-us" className="border-none outline-none shadow-none hover:text-white text-zinc-400 fw_400 duration-300">Contact Us</Link>
                            <Link href="/tricart-tools" className="border-none outline-none shadow-none hover:text-white text-zinc-400 fw_400 duration-300">Corporate Sales</Link>
                            <Link href="/tricart-tools/privacy-policy" className="border-none outline-none shadow-none hover:text-white text-zinc-400 fw_400 duration-300">Delivery Policy</Link>
                            <Link href="/tricart-tools/privacy-policy" className="border-none outline-none shadow-none hover:text-white text-zinc-400 fw_400 duration-300">Privacy Policy</Link>
                            <Link href="/tricart-tools/privacy-policy" className="border-none outline-none shadow-none hover:text-white text-zinc-400 fw_400 duration-300">Exchange & Return Policy</Link>
                            <Link href="/tricart-tools/terms-&-conditions" className="border-none outline-none shadow-none hover:text-white text-zinc-400 fw_400 duration-300">Terms Of Use</Link>
                            <Link href="/tricart-tools/terms-&-conditions" className="border-none outline-none shadow-none hover:text-white text-zinc-400 fw_400 duration-300">Payment Policy</Link>
                            <Link href="/tricart-tools/terms-&-conditions" className="border-none outline-none shadow-none hover:text-white text-zinc-400 fw_400 duration-300">Cookie Policy</Link>
                            <Link href="/tricart-tools/terms-&-conditions" className="border-none outline-none shadow-none hover:text-white text-zinc-400 fw_400 duration-300">Electronic Invoice</Link>
                        </div>
                    </div>
                    <div className={`${matches ? "col-span-12 sm:col-span-6" : "col-span-2"} flex flex-col gap-y-6`}>
                        <h2 className="text-white text-lg fw_600">About Us</h2>
                        <div className="grid grid-cols-1 gap-y-6 text-sm">
                            <Link href="/tricart-tools/about-us" className="border-none outline-none shadow-none hover:text-white text-zinc-400 fw_400 duration-300">About Us</Link>
                            <Link href="/tricart-tools/about-us" className="border-none outline-none shadow-none hover:text-white text-zinc-400 fw_400 duration-300">Our Stores</Link>
                            <Link href="/tricart-tools/about-us" className="border-none outline-none shadow-none hover:text-white text-zinc-400 fw_400 duration-300">Carreers</Link>
                            <a href="#brands2" onClick={handleSmoothScroll} className="border-none outline-none shadow-none hover:text-white text-zinc-400 fw_400 duration-300">Brands</a>
                        </div>
                    </div>
                    <div className={`${matches ? "col-span-12 sm:col-span-6" : "col-span-3"} flex flex-col gap-y-6`}>
                        <h2 className="text-white text-lg fw_600">Top 5 FAQs</h2>
                        <div className="grid grid-cols-1 gap-y-6 text-sm">
                            <Link href="/tricart-tools/contact-us" className="border-none outline-none shadow-none hover:text-white text-zinc-400 fw_400 duration-300">Technical support contacts?</Link>
                            <Link href="/tricart-tools/contact-us" className="border-none outline-none shadow-none hover:text-white text-zinc-400 fw_400 duration-300">How do I know the date of my delivery?</Link>
                            <Link href="/tricart-tools/contact-us" className="border-none outline-none shadow-none hover:text-white text-zinc-400 fw_400 duration-300">My product did not arrive?</Link>
                            <Link href="/tricart-tools/contact-us" className="border-none outline-none shadow-none hover:text-white text-zinc-400 fw_400 duration-300">What are the payment methods?</Link>
                            <Link href="/tricart-tools/contact-us" className="border-none outline-none shadow-none hover:text-white text-zinc-400 fw_400 duration-300">Product availability?</Link>
                            <Link href="/tricart-tools/contact-us" className="border-none outline-none shadow-none text-white flex items-center gap-x-2 mt-2 duration-300 fw_600">Read More
                                <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="pb-20 pt-8">
                    <p className="text-sm text-zinc-500 text-center sm:text-left">© Tricart eCommerce. 2024 - All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
} 