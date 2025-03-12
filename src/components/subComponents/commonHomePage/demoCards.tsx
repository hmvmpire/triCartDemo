import { homePages } from "@/data/MainPageData"
import Image from "next/image"
import Link from "next/link"

export const DemoCards = () => {
    return (
        <div id="demo" className="bg-white">
            <div className="container3 mx-auto py-28 sm:py-32 lg:py-40 px-3">
                <div>
                    <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase fw_700 text-center text-black leading-lose lg:leading-[3.5rem]`}>Unique Templates Demo<br /> In One Project</h2>
                </div>
                <div className="mt-20 md:mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {homePages.slice(0, 4).map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden drop-shadow-xl duration-300"
                        >
                            <Link href={item.slug}>
                                <div className="relative">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={400}
                                        height={300}
                                        className="w-full h-80 object-cover"
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center fw_600 text-base text-white">Preview</div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                                        {item.name}
                                    </h3>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}