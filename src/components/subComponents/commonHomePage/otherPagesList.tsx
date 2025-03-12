import { otherPages } from "@/data/MainPageData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export const OtherPagesList = () => {
    return (
        <div id="pages" className="bg-indigo-50 py-40 bg-opacity-70">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 container3">
                {otherPages.map((page, index) => (
                    <Link href={page.slug} key={index + 1} className="border-none outline-none p-4 h-40 flex flex-col items-center justify-center gap-y-4 bg-white rounded-lg overflow-hidden drop-shadow-sm hover:drop-shadow-xl duration-300">
                        <FontAwesomeIcon icon={page.icon} className="w-6 sm:w-8 h-6 sm:h-8 text-purple-700" />
                        <p className="fw_400 text-center text-black text-base sm:text-lg">{page.title}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}