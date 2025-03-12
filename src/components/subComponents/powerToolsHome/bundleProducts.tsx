import { ProductCard2 } from "@/components/productCards/productCard2"
import { toolsProductsData } from "@/data/toolsData"
import { productType2 } from "@/Types/productPropsTypes"
import { useMediaQuery } from "@mui/material"
import { useEffect, useState } from "react"
import header2Bg from "../../../static/header2Bg.jpeg";

export const BundleProducts = () => {
    const matches = useMediaQuery("(max-width:1024px)");
    const matches4 = useMediaQuery("(max-width:766px)");
    const matches2 = useMediaQuery("(max-width:1480px)");
    const matches3 = useMediaQuery("(max-width:1130px)");
    const [list, setList] = useState<productType2[]>([])

    useEffect(() => {
        setList(toolsProductsData.filter((item, index) => index < 3))
    }, [])
    return (
        <div className="py-10 md:py-20 bg-center bg-cover bg-no-repeat" style={{backgroundImage:`linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${header2Bg.src})`}}>
            <div className="container1">
                <div className="grid grid-cols-12 gap-y-8 lg:gap-y-0 lg:gap-x-5">
                    <div className="col-span-12 lg:col-span-3">
                        <h1 className={`fw_700 text-black ${matches2 ? matches3 ? "text-2xl sm:text-4xl lg:text-2xl" : "text-3xl" : "text-4xl"} ${matches ? matches4 ? "" : "h2_line_height" : matches3 ? "" : "h2_line_height"}`}>Essential Tools<br />
                            To Renew With<br />
                            Tricart Products</h1>
                        <p className={`tracking-widest text-black ${matches2 ? "text-xl" : "text-2xl"} mt-4 fw_400`}>Big Sale, ends soon!</p>
                        <p className="text-sm text-black mt-6">Viewing essential tools available</p>
                    </div>
                    <div className="col-span-12 lg:col-span-9">
                        <div className="grid grid-cols-2 sm:grid-cols-3">
                            {list.map((product, index) => (
                                <ProductCard2 textColor="text-black group-hover:text-zinc-800" product={product} key={index + 1} />
                            ))}
                        </div>
                        {list.length !== toolsProductsData.length && <div className="w-full flex justify-center mt-10">
                            <button onClick={() => setList(toolsProductsData)} className="fw_600 mx-auto text-white bg-black hover:bg-zinc-900 duration-300 rounded-md h-14 w-80">Load More...</button>
                        </div>}
                    </div>

                </div>
            </div>
        </div>
    )
}