import { ProductCard3 } from "@/components/productCards/productCard3"
import { Home3News } from "./home3News"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight"
import { homeDecorFeaturedProducts } from "@/data/homeDecorData"
import Link from "next/link"

export const FeaturedProducts = () => {
    return (
        <div className="pt-8" id="on-sale">
            <Home3News />
            <div className="px-3 sm:px-5 lg:px-10">
                <div className="mt-8 grid grid-cols-12 gap-x-0 pb-8 md:pb-10 border-b">
                    <div className="hidden lg:block col-span-4 h-full">
                        <ProductCard3 product={homeDecorFeaturedProducts[5]} size="lg" />
                        <Link href="/tricart-home-decore" className="border-none outline-none shadow-none text-xs fw_600 uppercase text-white bg-DECOR_PRIMARY hover:bg-DECOR_PRIMARY-HOVER duration-300 w-48 h-12 flex items-center justify-center gap-x-3 mt-8">Shop Bookshelf
                            <FontAwesomeIcon icon={faChevronRight} className="text-xxs" />
                        </Link>
                    </div>
                    <div className="col-span-12 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-0 gap-y-5">
                        {homeDecorFeaturedProducts.map((product, index) => (
                            <ProductCard3 key={index + 1} product={product} />
                        ))}
                        <ProductCard3 product={homeDecorFeaturedProducts[0]} />
                        <ProductCard3 product={homeDecorFeaturedProducts[1]} />
                    </div>
                </div>
            </div>

        </div>
    )
}