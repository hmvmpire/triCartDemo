import { SubCategories } from "@/data/toolsData"
import { stringToSlug } from "@/services/generalService";
import { useMediaQuery } from "@mui/material";
import Image from "next/image"
import Link from "next/link";

export const SubCategoriesList = () => {
    const matches1 = useMediaQuery("(max-width:1480px)");

    return (
        <div className={`container1 grid gap-x-4 py-8 ${matches1 ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-4 xl:grid-cols-6" : "grid-cols-6"}`}>
            {SubCategories.map((item, index) => (
                <div key={index + 1} className="flex flex-col items-center gap-y-3 px-5 py-3 group">
                    <Link href={`/tricart-tools/category/${stringToSlug(item.title)}`} className="h-28 w-28 p-1 rounded-full border-none outline-none shadow-none overflow-hidden flex items-center justify-center bg-zinc-100 group-hover:brightness-75 duration-500 group">
                        <Image src={item.img} alt="sub category img" className="object-contain group-hover:scale-125 duration-1000" />
                    </Link>
                    <div className=" flex flex-col items-center">
                        <Link href={`/tricart-tools/category/${stringToSlug(item.title)}`} className="text-base text-black border-none outline-none shadow-none hover:text-blue-700 leading-6 fw_600 text-center">{item.title}</Link>
                        <p className="text-zinc-400 fw_400 text-sm mt-1 text-center">{item.productsLength} products</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
