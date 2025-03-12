import { ProductCard4 } from "@/components/productCards/productCard4"
import { fashionProductsData } from "@/data/fashionData"
import { productType2 } from "@/Types/productPropsTypes"
import { useEffect, useState } from "react"

export const FeaturedProducts = () => {
    const [list, setList] = useState<productType2[]>([])

    useEffect(() => {
        setList(fashionProductsData.filter((item, index) => index < 4))
    }, [])
    return (
        <div className="container3">
            <div className="pt-16 pb-16 md:pb-20 border-b">
                <div className="flex flex-col items-center">
                    <h1 className="fw_700 text-zinc-900 text-center text-2xl uppercase">Featured Products</h1>
                    <p className="text-sm text-zinc-500 fw_400 text-center">Amazing products added recently in our catalog</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 lg:gap-5 mt-8">
                    {list.map((product, index) => (
                        <ProductCard4 product={product} key={index + 1} />
                    ))}
                </div>
                {list.length !== fashionProductsData.length && <div className="w-full flex justify-center mt-10">
                    <button onClick={() => setList(fashionProductsData)} className="fw_600 mx-auto text-white bg-fashionPrimary hover:bg-fashionPrimary-HOVER duration-300 text-sm h-12 w-48 uppercase">Load More...</button>
                </div>}
            </div>
        </div>
    )
}