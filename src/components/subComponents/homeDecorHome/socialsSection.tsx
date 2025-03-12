import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { homeDecorMainCategories } from "@/data/homeDecorData"
import { CompHeading } from "@/components/shared/compHeading"

export const SocialsSection = () => {
    return (
        <div id="blog3" className="px-3 sm:px-5 lg:px-10 pt-10 pb-14">
            <CompHeading title={"Follow Us"} rightContent={null} justify="justify-start" headingSize="text-xl" />
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 2xl:grid-cols-6 gap-4">
                {homeDecorMainCategories.map((item, index) => (
                    index < 6 &&
                    <div key={index + 1} className="overflow-hidden relative group rounded-xl bg-DECOR_PRIMARY-LIGHT">
                        <div className="h-full w-full text-white text-6xl absolute group-hover:left-0 -left-full bg-DECOR_PRIMARY-HOVER bg-opacity-50 z-30 duration-500 flex items-center justify-center">
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                        <Image src={item.img} alt="blog1" className="h-full w-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    )
}