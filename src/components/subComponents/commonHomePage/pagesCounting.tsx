import { techs, templates } from "@/data/MainPageData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export const PagesCounting = () => {
    return (
        <>
            <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-purple-700 py-20 flex justify-center">
                <div className="container3">
                    <p className="text-orange-500 text-center text-xl sm:text-2xl fw_700">Four In One</p>
                    <p className="uppercase text-white text-3xl sm:text-4xl md:text-5xl fw_700 mt-3 text-center">Buy One Get 3 Free</p>
                    <p className="text-center mt-8 text-lg sm:text-xl text-white fw_400">"Explore a stunning collection of website templates tailored to your needs.
                        Select the perfect design <br className="hidden lg:block" />and effortlessly customize it to reflect your unique style."</p>
                    <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                        {templates.map((page, index) => (
                            <Link href={page.link} key={index + 1} className="border-none outline-none shadow-none hover:scale-95 px-4 py-10 sm:p-10 flex flex-col items-center gap-y-4 justify-center bg-white rounded-lg overflow-hidden duration-300">
                                <FontAwesomeIcon icon={page.icon} className="w-10 h-10 text-purple-700" />
                                <p className="fw_400 text-center text-black text-base sm:text-lg lg:text-xl">{page.name}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div id="tech" className="bg-white py-32">
                <div className="container3 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-10 gap-y-16 sm:gap-y-10">
                    {techs.map((page, index) => (
                        <div key={index + 1} className="flex items-start gap-x-4">
                            <FontAwesomeIcon icon={page.icon} className="w-8 h-8 text-purple-700" />
                            <div className="flex flex-col gap-y-2">
                                <p className="text-black fw_400">
                                    {page.title}
                                </p>
                                <p>{page.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}