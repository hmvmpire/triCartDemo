
import { ProductCard4 } from "@/components/productCards/productCard4"
import { fashionProductsData } from "@/data/fashionData"
import { productType2 } from "@/Types/productPropsTypes"
import { useEffect, useState } from "react"

export const TopRatedProducts = () => {
    const [list, setList] = useState<productType2[]>([])

    useEffect(() => {
        setList(fashionProductsData.filter((item, index) => index > 2))
    }, [])
    return (
        <div id="products4" className="container3">
            <div className="pt-16 pb-16 md:pb-20 border-b">
                <div className="flex flex-col items-center">
                    <h1 className="fw_700 text-zinc-900 text-center text-2xl uppercase">Top Rated Products</h1>
                    <p className="text-sm text-zinc-500 fw_400 text-center">Amazing products added recently in our catalog</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-5 mt-8">
                    {list.map((product, index) => (
                        <ProductCard4 product={product} key={index + 1} />
                    ))}
                </div>

            </div>
        </div>
    )
}