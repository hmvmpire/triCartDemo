import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare"
import Link from "next/link"
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons"

export const HelpConp = () => {
    return (
        <div className="container1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0 md:gap-x-3 lg:gap-x-5">
                <div className="bg-ELECTRONICS_PRIMARY rounded-lg px-6 sm:px-16 md:px-6 lg:px-10 xl:px-16 py-4 h-36 sm:h-44 flex items-center gap-x-5 sm:gap-x-8 xl:gap-x-12">
                    <div className="flex items-center gap-x-4">
                        <FontAwesomeIcon icon={faQuestionCircle} className="text-6xl text-white" />
                        <div className="">
                            <h2 className="text-xl sm:text-2xl xl:text-3xl fw_700 text-white">Need Any Help?</h2>
                            <p className="text-xs sm:text-sm xl:text-base text-white">We are here to help you with any queastion?</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white border rounded-lg px-6 sm:px-16 md:px-6 lg:px-10 xl:px-16 py-4 h-52 sm:h-44 flex flex-col sm:flex-row sm:items-center gap-y-4 sm:gap-y-0 sm:gap-x-4 justify-center sm:justify-between">
                    <div className="flex flex-col gap-y-3">
                        <div className="text-black flex items-center gap-x-3">
                            <FontAwesomeIcon icon={faPhone} className="text-3xl" /><p className="fw_700 text-black text-2xl md:text-lg lg:text-2xl xl:text-3xl">1234567890</p>
                        </div>
                        <Link href="/contact-us" className="flex items-center justify-center border-none outline-none shadow-none gap-x-3 text-black text-sm xl:text-base bg-zinc-200 w-32 xl:w-40 h-10 xl:h-12 fw_600 justify-center rounded-sm">Online Help
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </Link>
                    </div>
                    <div className="flex flex-col gap-y-2 sm:gap-y-4 items-start">
                        <p className="text-sm xl:text-lg fw_600 text-zinc-500">Monday to Saturday - 8am - 6pm</p>
                        <Link href="/contact-us" className="text-ELECTRONICS_PRIMARY-HOVER text-sm xl:text-lg underline fw_600 border-none outline-none shadow-none">Frequently Asked Questions</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}