import { ProductCard5 } from "@/components/productCards/productCard5"
import { fashionProductsData } from "@/data/fashionData"

export const OtherProducts = () => {
    return (
        <div className="container3">
            <div className="py-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8">
                    <div className="flex flex-col gap-y-3">
                        <h2 className="text-zinc-900 text-xs fw_600 uppercase mb-2">Recently added products</h2>
                        {fashionProductsData.map((product, index) => (index < 3
                            && <ProductCard5 product={product} key={index + 1} />
                        ))}
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <h2 className="text-zinc-900 text-xs fw_600 uppercase mb-2">Best Selling products</h2>
                        {fashionProductsData.map((product, index) => (index >2
                            && <ProductCard5 product={product} key={index + 1} />
                        ))}
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <h2 className="text-zinc-900 text-xs fw_600 uppercase mb-2">Featured products</h2>
                        {fashionProductsData.map((product, index) => (index > 1 && index <5
                            && <ProductCard5 product={product} key={index + 1} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}